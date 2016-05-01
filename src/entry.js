import store from './store';
import App from './App';

import React, {
  AppRegistry,
} from 'react-native';


export default function init() {
  const pastaJar = () => <App store={store} />;
  AppRegistry.registerComponent('pastaJar', () => pastaJar);
}
