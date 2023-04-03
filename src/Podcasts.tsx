import React from 'react';

function PodcastInfo(props: any) {
  return (
    <>
      <div>
        <div className="text-center">
          <h1 className="display-4">My Podcasts</h1>
          <h2>I have a podcast called Baconsale!</h2>
          <p>
            To check it out go to the Baconsale website{' '}
            <a href="https://baconsale.com/">here!</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default PodcastInfo;
