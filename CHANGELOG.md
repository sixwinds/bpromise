####2014-7-2
+ 增加了 resolvePromise 方法对应 promise/a+ 的 promise resolution procedure,但是没有实现。
+ 修正了当 fulfilledHandler 和 rejectedHandler 不是 function 的行为，按照的是 promise/a+ 的spec。

####2014-7-3
+ 部分实现了 resolvePromise 方法，但是其中如果 x 为 object 或者 function 时如何处理则还没有看懂promise/a+ 的 spec。

####2014-07-15
+ 功能完成，在运行 promise aplus test 的时候 console 产生太多的日志没法看错误，需要寻找一种看的方法。

####2017-03-10
+ 重新实现了一把，通过了 a+ 大部分测试，阶段性提交。
+ 更新了下测试的命令行命令。
+ 修改了 README 上关于测试的部分。