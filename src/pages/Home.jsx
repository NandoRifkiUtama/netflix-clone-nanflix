import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Request';

const Home = () => {
  return (
    <div>
        <Main />
        <Row title='Trending' fetchURL={requests.requestTranding} />
        <Row title='Popular' fetchURL={requests.requestPopular} />
        <Row title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row title='Upcoming' fetchURL={requests.requestUpcoming} />
    </div>
  )
}

export default Home