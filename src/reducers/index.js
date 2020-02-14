import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Smells Like Teen Spirit',
      duration: '4:05'
    },
    {
      title: 'All Star',
      duration: '3:05'
    },
    {
      title: "What's my age again?",
      duration: '3:42'
    },
    {
      title: 'Ice Ice Baby',
      duration: '4:42'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
