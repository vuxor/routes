import React from 'react';
import { Link } from 'react-router-dom';

import MapWithRoute from './MapWithRoute';
import './RouteDetail.css';

const RouteDetail = props => (
  <div className="RouteDetail">
    <header>
      <h1>Route Detail</h1>
      <Link to="/" className="RouteDetail-back">
        <svg
          fill="#333"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>Back To Home
      </Link>
    </header>
    <main className="RouteDetail-main">
      <MapWithRoute />
    </main>
  </div>
);

export default RouteDetail;
