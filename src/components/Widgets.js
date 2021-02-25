import React from 'react';
import '../assets/Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecorIcon from '@material-ui/icons/FiberManualRecord';

function Widgets () {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecorIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('linkedin job topics', 'Market researh conducted this article! - 99314 readers')}
    </div>
  );
}

export default Widgets;
