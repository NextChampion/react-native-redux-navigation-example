'use strict';

import * as types from '../constants/loginTypes';

// 模拟用户信息
let user = {
  name: 'zhangsan',
  age: 24,
}

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login() {
  console.log('登录方法');
  return dispatch => {
    dispatch(isLogining());
    // 模拟用户登录
    let result = fetch('https://www.baidu.com/')
      .then((res) => {
        dispatch(loginSuccess(true, user));
      }).catch((e) => {
        dispatch(loginError(false));
      })
  }
}

function isLogining() {
  return {
    type: types.LOGIN_IN_DOING
  }
}

function loginSuccess(isSuccess, user) {
  console.log('success');
  return {
    type: types.LOGIN_IN_DONE,
    user: user,
  }
}

function loginError(isSuccess) {
  console.log('error');
  return {
    type: types.LOGIN_IN_ERROR,
  }
}
