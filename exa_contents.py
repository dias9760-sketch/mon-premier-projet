import os

from exa_py import Exa

exa = Exa(os.environ["EXA_API_KEY"])

result = exa.get_contents(
  urls=["exa.ai"],
  highlights=True
)

for item in result.results:
  print(item.url)
  print(item.title)
  for highlight in item.highlights or []:
    print("-", highlight)
