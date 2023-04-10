import React from 'react';
import { selectedSong } from '../actions';
import SongList from './SongList';

const App = () => {
  return (
    <div className='text-2xl justify-center'>
        <SongList/>
    </div>
  );
};

export default App;