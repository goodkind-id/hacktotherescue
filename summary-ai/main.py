from flask import Flask, request, jsonify
import os
from langchain.utilities import GoogleSerperAPIWrapper
from langchain.agents import AgentType, Tool, initialize_agent
from langchain.llms.openai import OpenAI

app = Flask(__name__)

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

self_ask_with_search = initialize_agent(
    tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION
)

@app.route('/')
def query_endpoint():

    name = request.args.get('name', '')
    issue = request.args.get('issue', '')


    result = self_ask_with_search.run("What is " + name + " stance on " + issue + "?")


    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
