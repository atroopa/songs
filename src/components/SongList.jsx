import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectedSong} from '../actions';

class SongList extends React.Component {

  renderList(){

    return this.props.songs.map(song => {
        return(
            <div className='grid grid-cols-3 gap-4 place-items-start h-10 ' key={song.title}>

                <div className='py-2 px-5'>
                    {song.title}
                </div>

                <button onClick={() => this.props.selectedSong(song)} className='bg-blue-200 w-20 px-2 py-2'>select</button>
            </div>
        )
    })

  }

  render() {

    return (
      <div>
        { this.renderList()}
      </div>
    )
  }


}




const mapStateToProps = (state) => {
  console.log('mapStateToProps',state);
    return {
        songs: state.songs,
    };
}

export default connect(mapStateToProps, { selectedSong })(SongList);