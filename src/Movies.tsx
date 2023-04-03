import { useState } from 'react';
import data from './MovieData.json';

const mds = data.MovieDataSample;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(mds);

  return (
    <>
      <div>
        <center>
          <h3>Joel Hilton's Movie Collection</h3>
        </center>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
