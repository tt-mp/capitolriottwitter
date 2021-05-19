import React from 'react';
import TimeBarChart from './components/TimeBarChart.js';
import HashTagPieChart from './components/HashTagPieChart.js';
import ViralTweetChart from './components/ViralTweetChart.js';
import MentionsPieChart from './components/MentionsPieChart.js';
import ViralUserChart from './components/ViralUserChart.js';

import VerbByTime from './assets/json/verb_by_time.json';
import Viral from './assets/json/viral.json';
import Hashtags from './assets/json/hashtags.json';
import MostMentioned from './assets/json/most_mentioned.json';
import ViralAccounts from './assets/json/viral_accounts.json';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="about">
        <span className='title'>Jan 6, 2021</span>
        <p>The day of the capitol riots in Washington, DC.</p>
      </div>
      <TimeBarChart chartData={VerbByTime} />
      <HashTagPieChart chartData={Hashtags} />
      <ViralTweetChart chartData={Viral} />
      <MentionsPieChart chartData={MostMentioned} />
      <ViralUserChart chartData={ViralAccounts} />
    </div>
  );
}

export default App;
