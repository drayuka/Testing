# Problem Solution

This is a small node.js repo that should solve the provided programming problem.
To use it, you need nodejs and npm installed.

## Setup

> npm install

## Usage

to run against the provided SampleFile.txt

> npm start 

or run against any other file

> npm start -- --wordsFile _FileName_

## Limitations

This solution utilizes streaming to process the file one chunk at a time.
It should be limited only by the speed at which nodejs can read from a file and split 
recieved data into words, barring adversarial examples (all words are 'unique', etc.).
