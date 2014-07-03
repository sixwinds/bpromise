####2014-7-2
+ 增加了 resolvePromise 方法对应 promise/a+ 的 promise resolution procedure,但是没有实现。
+ 修正了当 fulfilledHandler 和 rejectedHandler 不是 function 的行为，按照的是 promise/a+ 的spec。

####2014-7-3
+ 部分实现了 resolvePromise 方法，但是其中如果 x 为 object 或者 function 时如何处理则还没有看懂promise/a+ 的 spec。