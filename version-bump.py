import os
import sys
import fileinput
import json
import datetime

with open("./client/version.json","r") as jsonFile:
    data = json.load(jsonFile)

tmp = str(data["version"])
major, minor, build = tmp.split('.')
newBuild = int(build) + 1
version = major + '.' + minor + '.' + str(newBuild)
print "Version bumped to: " + version
data["version"] = version

today = datetime.datetime.today().strftime('%Y-%m-%d')
print "Build date updated to: " + today
data["lastBuild"] = today

with open("./client/version.json","w") as jsonFile:
    data = json.dump(data, jsonFile)