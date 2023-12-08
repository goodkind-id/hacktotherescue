from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json
from langchain.utilities import GoogleSerperAPIWrapper
from langchain.agents import AgentType, Tool, initialize_agent
from langchain.llms.openai import OpenAI

app = Flask(__name__)
CORS(app)

os.environ["SERPER_API_KEY"] = ""
os.environ["OPENAI_API_KEY"] = ""

llm = OpenAI(temperature=0)
search = GoogleSerperAPIWrapper()

tools = [
    Tool(
        name="Intermediate Answer",
        func=search.run,
        description="useful for when you need to ask with search",
    )
]


@app.route('/')
def query_endpoint():

    name = request.args.get('name', '')
    issue = request.args.get('issue', '')
    
    if name == "" or issue == "":
        return jsonify({"result": "Please provide a name and issue"}) 
    
    file_path = os.path.join("results", name + ".json")
    if os.path.exists(file_path):
        with open(file_path, "r") as f:
            result = json.loads(f.read())
    else:
        self_ask_with_search = initialize_agent(
            tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION
        )
        
        result = self_ask_with_search.run("What is " + name + " stance on " + issue + "?")
        
        with open(file_path, "a+") as f:
            f.write(json.dumps(result))

    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
