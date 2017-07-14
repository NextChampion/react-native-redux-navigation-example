import React, { PropTypes, Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from './Button';

export default class Counter extends Component {
  static propTypes = {
    decrementFn: PropTypes.func.isRequired,
    incrementFn: PropTypes.func.isRequired,
  }

  render() {
    console.log('counter');
    console.log(this.props);
    const { decrementFn, incrementFn, counter } = this.props;
    return (
      <View style={styles.container}>
        <Button onClick={decrementFn} text={'减'} />
        <Text style={styles.label}>{counter}
        </Text>
        <Button onClick={incrementFn} text={'加'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  label: {
    width: 40,
    textAlign: 'center',
  }
})
