import React from 'react';

import MapWithRoute from './MapWithRoute';
import './RouteDetail.css';

const RouteDetail = props => (
  <div className="RouteDetail">
    <header>
      <h1>Route Detail</h1>
    </header>
    <main className="RouteDetail-main">
      <MapWithRoute />
    </main>
  </div>
);

export default RouteDetail;
