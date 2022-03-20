console.log('Starting the Bot')
const fs = require('fs');
const path = require('path');
const Twit = require('twit');
const axios = require('axios');
const chunk = require('lodash/chunk');
const config = require('./config');

// Create an instance of twit
const twit = new Twit(config);

/**
 * Called to post a single Juz throughout a day 
 * @param {number} juzNumber the number of the Juz being posted
 */
async function postJuz(juzNumber) {
  const juzText = getJuzFromFile(juzNumber);
  const tweets = splitTextForTweeting(juzText);
  const batches = batchTweets(tweets, batchSize);
  batches.forEach(batch => {
    batch.forEach(tweet => {
      twit.post('statuses/update', {status: })
    });
    // somehow wait for the next time to post?
  });
}

/**
 * Splits a block of text into tweetable chunks
 * @param {string} text the string to be split
 * @returns {string[]} the text split to size
 */
function splitTextForTweeting(text) {
    
}

/**
 * @param {number} juzNumber the number of the Juz to get from file
 * @returns {string} the text of the Juz retrieved from file
 */
function getJuzFromFile(juzNumber) {
  const paddedNum = juzNumber.toString().padStart(2, '0');
  const juzText = fs.readFileSync(path.resolve(__dirname, `resources/juz${paddedNum}/juz.txt`))
  return juzText;
}

/**
 * Batch tweets
 * 
 * @param {string[]} tweets to be batched
 * @returns {string[][]} batches of tweets
 */
function batchTweets(tweets, batchSize) {
  return chunk(tweets, batchSize);
}