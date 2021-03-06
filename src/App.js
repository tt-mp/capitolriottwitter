import React from 'react';

import TimeBarChart from './components/tweet_timechart/TimeBarChart.jsx';
import HashTagPieChart from './components/hashtag_piechart/HashTagPieChart.jsx';
import ViralTweetChart from './components/ViralTweetChart.jsx';
import MentionsPieChart from './components/mentions_piechart/MentionsPieChart.jsx';
import ViralUserChart from './components/viraluser_chart/ViralUserChart.jsx';

import VerbByTime from './assets/json/verb_by_time.json';
import ViralTweets from './assets/json/viral_tweets.json';
import HashTagsByCount from './assets/json/hashtags.json';
import MostMentioned from './assets/json/most_mentioned.json';
import ViralAccounts from './assets/json/viral_accounts.json';

import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='about'>
        <span className='title'>Jan 6, 21</span>
        <p>Twitter stats from the day of the capitol riots in Washington, DC.</p>
        <p>Time zone is UTC.</p>
      </div>

      <TimeBarChart chartData={VerbByTime} />
      <HashTagPieChart chartData={HashTagsByCount} />
      <ViralTweetChart chartData={ViralTweets} />
      <MentionsPieChart chartData={MostMentioned} />
      <ViralUserChart chartData={ViralAccounts} />
    </div>
  );
}

export default App;
