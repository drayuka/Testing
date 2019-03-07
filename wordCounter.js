const fs = require('fs');
const commandLineArgs = require('command-line-args');

let prevChunk = '';

const wordCounts = new Map();

const options = commandLineArgs([
    { name: 'wordsFile', defaultValue: './SampleFile.txt', type: String }
]);

fs.createReadStream(options.wordsFile, {encoding: 'utf8'})
    .on('data', (chunk) => {
        prevChunk += chunk;
        let words = prevChunk.split(/ |\n/);
        prevChunk = words.pop();

        processWords(words, wordCounts);
    })
    .on('end', () => {
        //add any remaining words to the word count
        processWords(prevChunk.split(/ |\n/), wordCounts);
        
        wordCounts.forEach((value, key) => {
            console.log(`${key} ${value}`);
        });
    })
    .on('error', (e) => {
        console.log(e);
        throw e;
    });

function processWords(words, wordCounts) {
    words.forEach((word) => {
        // if we get an empty string, ignore it.
        if(!word) {
            return;
        }
        let lowercase = word.toLowerCase();
        if(wordCounts.get(lowercase)) {
            wordCounts.set(lowercase, wordCounts.get(lowercase) + 1);
        } else {
            wordCounts.set(lowercase, 1);
        }
    });
}