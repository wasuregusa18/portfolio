import simplejson
import pandas
from collections import defaultdict


project_data_path = "ProjectData.csv"
project_data = pandas.read_csv(project_data_path)
project_data = project_data.dropna(axis=0, how="any", thresh=4)

tech_path = "Technologies.csv"
tech_data = pandas.read_csv(tech_path, index_col=0, header=None)


# required jsons
project_data_dict = project_data.to_dict(orient="records")
project_name2techs = {}
grouping2projects = defaultdict(lambda: [])
tech_data_dict = tech_data.T.to_dict(orient="list")

# for ant design table
tableData = []
for (k, v) in tech_data_dict.items():
    non_nan_vals = [i for i in v if i == i]
    newEntry = {
        "id": hash(k),
        "area": k,
        "tech": non_nan_vals
    }
    tableData.append(newEntry)

project2grouping = {}
project2index = {}


all_tech = []
for v in tech_data_dict.values():
    for i in v:
        all_tech.append(i)
entry2related = {i: [] for i in all_tech if i == i}
tech_data_dict = {k: [{"id": hash(i), "name": i} for i in v if i == i] for (
    k, v) in tech_data_dict.items()}

for index, project in enumerate(project_data_dict):

    techs = project["tech"].split("-")
    project["tech"] = techs
    name = project["name"]
    grouping = project["grouping"]

    # ant
    project2grouping[project["name"]] = grouping
    project2index[project["name"]] = index

    project_name2techs[name] = techs
    grouping2projects[grouping].append({"id": project["id"],
                                        "name": name})

    entry2related[name] = techs
    for tech in techs:
        entry2related[tech].append(name)

highlight_keys = {key: False for key in entry2related}

file_names = [
    "projectData.json",
    "entry2related.json",
    "projectName2techs.json",
    "grouping2projects.json",
    "highlightKeys.json",
    "grouping2techs.json",
    "tableData.json",
    "project2grouping.json",
    "project2index.json"

]

data = [
    project_data_dict,
    entry2related,
    project_name2techs,
    grouping2projects,
    highlight_keys,
    tech_data_dict,
    tableData,
    project2grouping,
    project2index
]

for fn, d in zip(file_names, data):
    with open("../src/data/" + fn, "w") as f:
        simplejson.dump(d, f, indent=4, ignore_nan=True)
