/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
TrackPlayer.setupPlayer({}).then(async () => {});

AppRegistry.registerComponent(appName, () => App);
