# react-native-redux-navigation-example


## 启动

到项目根目录`package.json`文件所在目录下，
执行 `yarn`

然后通过Xcode或者Android studio 运行项目即可


## 其他
[作者简书](https://www.jianshu.com/u/c0a74e6c84eb "超链接title")

[react-native中使用redux的原理分析](https://www.jianshu.com/p/466639774e01)

[react-native项目中从零开始使用redux](https://www.jianshu.com/p/8fb7df931eea)


## 报错
由于react-native版本问题，运行demo的时候，可能会遇到报错。

#### 报错1
```
Make sure you’re running a packager server or have included a .jsbundle file in your application
```
#### 解决方法：

到项目根目录下`package.json`文件所在的目录下
执行
`
npm install -g react-native-git-upgrade
`
`
react-native-git-upgrade
`


#### 报错2
```
Unknown argument type 'attribute' in method -[RCTUIManager setJSResponder:blockNativeResponder:]
```

#### 解决方法

路径： `/node_modules/react-native/React/Base/RCTModuleMethod.mm.`文件
找到 `static BOOL RCTParseUnused` 这个方法

替换成

```
static BOOL RCTParseUnused(const char **input)
{
  return RCTReadString(input, "__unused") || RCTReadString(input, "__attribute__((__unused__))") || RCTReadString(input, "__attribute__((unused))");
}
```
