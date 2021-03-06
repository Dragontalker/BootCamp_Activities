let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Task 1: Split story string list into individual words and save them in a new array called storyWords.
let storyWords = story.split(" ");

// Task 2: Log how many words there are in this story to the console.
console.log(storyWords.length);

// Task 3: Filter out overused and unncessary words.
const betterWords = storyWords.filter(word => !(unnecessaryWords.includes(word)));

// Task 4: Let the user of your program know how many times they have used these overusedwords.
const wordCount = (overused) => {
    let repeatList = betterWords.filter(word => word === overused);
    return repeatList.length;
}

const overusedCount = overusedWords.map(word => wordCount(word));
console.log(overusedCount);

// Task 5: counter how many sentences are in the story.
let sentenceCount = 0;
betterWords.forEach(word => {
    if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
        sentenceCount += 1;
    }
});
console.log(sentenceCount);

// Task 6: create a function that logs all of information to console.
const storyInfo = () => {
    console.log(`In this story, there are ${storyWords.length} words and ${sentenceCount} sentence.`);
    console.log(`The overused word: ${overusedWords[0]}, appeared ${overusedCount[0]} times.`);
    console.log(`The overused word: ${overusedWords[1]}, appeared ${overusedCount[1]} times.`);
    console.log(`The overused word: ${overusedWords[2]}, appeared ${overusedCount[2]} times.`);
}
storyInfo();

// Task 7: Now, log the betterWords array to the console as a single string.
const betterStory = betterWords.join(" ");
console.log(betterStory);