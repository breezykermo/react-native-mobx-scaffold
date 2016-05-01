import React, {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  PropTypes,
} from 'react-native';
import { observer } from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  },
});

const App = props => (
  <View style={styles.container}>
    <Text style={styles.heading}>Mobx Counter</Text>
    <TouchableHighlight onPress={() => props.store.increment()}>
      <Text style={styles.text}>|   +   | </Text>
    </TouchableHighlight>
    <Text style={styles.text}>Clicked: {props.store.counter} times</Text>
    <TouchableHighlight onPress={() => props.store.decrement()}>
      <Text style={styles.text}>|   -   | </Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => props.store.incrementAsync()}>
      <Text style={styles.text}>|   + Async   | </Text>
    </TouchableHighlight>
  </View>
);
App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default observer(App);
