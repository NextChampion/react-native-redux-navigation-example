import *as types from '../constants/counterTypes';

export function decrement() {
  return {
    type: types.DECREMENT,
  }
}

export function increment() {
  return {
    type: types.INCREMENT,
  }
}
