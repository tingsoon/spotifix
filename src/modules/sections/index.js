import { combineReducers } from 'redux';
import artists from './artists';
import artist from './artist';
import album from './album';
import genres from './genres';
import search from './search';

export default combineReducers({ artist, album, search, genres, artists });
