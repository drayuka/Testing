# Problem Solution

this is a small node.js repo that should solve the programming problem

to use it, you need nodejs and npm installed.

## Usage

> npm start 

to run against the provided SampleFile.txt

> npm start -- --wordsFile _FileName_

or run against any other file

## Scope

This solution utilizes streaming to process the file one chunk at a time.
It should be limited only by the speed at which nodejs can read and split 
recieved data into words.