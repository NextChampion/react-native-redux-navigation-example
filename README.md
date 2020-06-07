# react-native-redux-navigation-example

## 其他
[作者简书](https://www.jianshu.com/u/c0a74e6c84eb "超链接title")

[react-native中使用redux的原理分析](https://www.jianshu.com/p/466639774e01)

[react-native项目中从零开始使用redux](https://www.jianshu.com/p/8fb7df931eea)


## 报错
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
