#ts 4.x 的新特性

## 前言

最近看 react-router 源码的时候看到了看到了这样一段类型定义


``` typescript
type ParamParseSegment<Segment extends string> =
  Segment extends `${infer LeftSegment}/${infer RightSegment}`
    ? ParamParseSegment<LeftSegment> extends infer LeftResult
      ? ParamParseSegment<RightSegment> extends infer RightResult
        ? LeftResult extends string
          ? RightResult extends string
            ? LeftResult | RightResult
            : LeftResult
          : RightResult extends string
          ? RightResult
          : ParamParseFailed
        : ParamParseFailed
      : ParamParseSegment<RightSegment> extends infer RightResult
      ? RightResult extends string
        ? RightResult
        : ParamParseFailed
      : ParamParseFailed
    : Segment extends `:${infer Remaining}`
    ? Remaining
    : ParamParseFailed;
```

当时就心想这些都啥啊, `${infer LeftSegment}/${infer RightSegment}`, 这是个什么语法, 怎么类型定义里面还能用模板字符串的吗, 然后编辑器里面也是一片飘红。 显然这肯定是 TS 后面的新特性了。因此我花了点时间将4.x出现的几个重要特性都总结一遍。



[[ts.md]]