import os
import sys

os.environ["SERPER_API_KEY"] = ""
os.environ["OPENAI_API_KEY"] = ""

from langchain.utilities import GoogleSerperAPIWrapper
from langchain.agents import AgentType, Tool, initialize_agent
from langchain.llms.openai import OpenAI

name = "PUTRI ZULKIFLI HASAN"
issue = "POLUSI UDARA"

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
    tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True
)
self_ask_with_search.run(
    "What is " + name + " stance on " + issue + "?"
)