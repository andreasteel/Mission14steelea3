import React from 'react';

// Page containing information about Joel Hilton's podcast Baconsale

function PodcastInfo(props: any) {
  return (
    <>
      <div>
        <div className="text-center">
          <h1 className="display-4">My Podcasts</h1>
          <h3>This is where you go to find my podcast baconsale!</h3>
          <p>
            Check out the Baconsale website{' '}
            <a href="https://baconsale.com/">here!!</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default PodcastInfo;
