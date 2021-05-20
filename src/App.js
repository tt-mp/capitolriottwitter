import React from 'react';

import TimeBarChart from './components/tweet_timechart/TimeBarChart.js';
import HashTagPieChart from './components/hashtag_piechart/HashTagPieChart.js';
import ViralTweetChart from './components/ViralTweetChart.js';
import MentionsPieChart from './components/MentionsPieChart.js';
import ViralUserChart from './components/ViralUserChart.js';

import VerbByTime from './assets/json/verb_by_time.json';
import ViralTweets from './assets/json/viral_tweets.json';
import Hashtags from './assets/json/hashtags.json';
import MostMentioned from './assets/json/most_mentioned.json';
import ViralAccounts from './assets/json/viral_accounts.json';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="about">
        <span className='title'>Jan 6, 2021</span>
        <p>Twitter stats from the day of the capitol riots in Washington, DC.</p>
        <p>Time zone is UTC.</p>
      </div>

      <TimeBarChart chartData={VerbByTime} />
      <HashTagPieChart chartData={Hashtags} />
      <ViralTweetChart chartData={ViralTweets} />
      <MentionsPieChart chartData={MostMentioned} />
      <ViralUserChart chartData={ViralAccounts} />
    </div>
  );
}

export default App;
