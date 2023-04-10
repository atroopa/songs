import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div className='text-2xl justify-center'>
        <SongList/>
        <SongDetail/>
    </div>
  );
};

export default App;