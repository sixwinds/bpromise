{
  "stats": {
    "suites": 530,
    "tests": 872,
    "passes": 714,
    "pending": 0,
    "failures": 158,
    "start": "2014-08-22T14:41:11.639Z",
    "end": "2014-08-22T14:42:19.024Z",
    "duration": 67385
  },
  "tests": [
    {
      "title": "already-fulfilled",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. already-fulfilled",
      "duration": 103
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. immediately-fulfilled",
      "duration": 105
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. eventually-fulfilled",
      "duration": 109
    },
    {
      "title": "trying to fulfill then immediately reject",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. trying to fulfill then immediately reject",
      "duration": 109
    },
    {
      "title": "trying to fulfill then reject, delayed",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. trying to fulfill then reject, delayed",
      "duration": 112
    },
    {
      "title": "trying to fulfill immediately then reject delayed",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. trying to fulfill immediately then reject delayed",
      "duration": 109
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. already-rejected",
      "duration": 107
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. immediately-rejected",
      "duration": 110
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. eventually-rejected",
      "duration": 108
    },
    {
      "title": "trying to reject then immediately fulfill",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. trying to reject then immediately fulfill",
      "duration": 112
    },
    {
      "title": "trying to reject then fulfill, delayed",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. trying to reject then fulfill, delayed",
      "duration": 109
    },
    {
      "title": "trying to reject immediately then fulfill delayed",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. trying to reject immediately then fulfill delayed",
      "duration": 107
    },
    {
      "title": "`onFulfilled` is `undefined`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a directly-rejected promise `onFulfilled` is `undefined`",
      "duration": 13
    },
    {
      "title": "`onFulfilled` is `null`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a directly-rejected promise `onFulfilled` is `null`",
      "duration": 15
    },
    {
      "title": "`onFulfilled` is `false`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a directly-rejected promise `onFulfilled` is `false`",
      "duration": 13
    },
    {
      "title": "`onFulfilled` is `5`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a directly-rejected promise `onFulfilled` is `5`",
      "duration": 16
    },
    {
      "title": "`onFulfilled` is an object",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a directly-rejected promise `onFulfilled` is an object",
      "duration": 15
    },
    {
      "title": "`onFulfilled` is `undefined`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a promise rejected and then chained off of `onFulfilled` is `undefined`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is `null`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a promise rejected and then chained off of `onFulfilled` is `null`",
      "duration": 32
    },
    {
      "title": "`onFulfilled` is `false`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a promise rejected and then chained off of `onFulfilled` is `false`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is `5`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a promise rejected and then chained off of `onFulfilled` is `5`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is an object",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a promise rejected and then chained off of `onFulfilled` is an object",
      "duration": 27
    },
    {
      "title": "`onRejected` is `undefined`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a directly-fulfilled promise `onRejected` is `undefined`",
      "duration": 16
    },
    {
      "title": "`onRejected` is `null`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a directly-fulfilled promise `onRejected` is `null`",
      "duration": 15
    },
    {
      "title": "`onRejected` is `false`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a directly-fulfilled promise `onRejected` is `false`",
      "duration": 16
    },
    {
      "title": "`onRejected` is `5`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a directly-fulfilled promise `onRejected` is `5`",
      "duration": 16
    },
    {
      "title": "`onRejected` is an object",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a directly-fulfilled promise `onRejected` is an object",
      "duration": 15
    },
    {
      "title": "`onFulfilled` is `undefined`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a promise fulfilled and then chained off of `onFulfilled` is `undefined`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is `null`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a promise fulfilled and then chained off of `onFulfilled` is `null`",
      "duration": 32
    },
    {
      "title": "`onFulfilled` is `false`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a promise fulfilled and then chained off of `onFulfilled` is `false`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is `5`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a promise fulfilled and then chained off of `onFulfilled` is `5`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is an object",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a promise fulfilled and then chained off of `onFulfilled` is an object",
      "duration": 30
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.1: it must be called after `promise` is fulfilled, with `promise`’s fulfillment value as its first argument. already-fulfilled",
      "duration": 16
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.1: it must be called after `promise` is fulfilled, with `promise`’s fulfillment value as its first argument. immediately-fulfilled",
      "duration": 15
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.1: it must be called after `promise` is fulfilled, with `promise`’s fulfillment value as its first argument. eventually-fulfilled",
      "duration": 78
    },
    {
      "title": "fulfilled after a delay",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.2: it must not be called before `promise` is fulfilled fulfilled after a delay",
      "duration": 78
    },
    {
      "title": "never fulfilled",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.2: it must not be called before `promise` is fulfilled never fulfilled",
      "duration": 159
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. already-fulfilled",
      "duration": 13
    },
    {
      "title": "trying to fulfill a pending promise more than once, immediately",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. trying to fulfill a pending promise more than once, immediately",
      "duration": 16
    },
    {
      "title": "trying to fulfill a pending promise more than once, delayed",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. trying to fulfill a pending promise more than once, delayed",
      "duration": 78
    },
    {
      "title": "trying to fulfill a pending promise more than once, immediately then delayed",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. trying to fulfill a pending promise more than once, immediately then delayed",
      "duration": 15
    },
    {
      "title": "when multiple `then` calls are made, spaced apart in time",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. when multiple `then` calls are made, spaced apart in time",
      "duration": 172
    },
    {
      "title": "when `then` is interleaved with fulfillment",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. when `then` is interleaved with fulfillment",
      "duration": 15
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.1: it must be called after `promise` is rejected, with `promise`’s rejection reason as its first argument. already-rejected",
      "duration": 15
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.1: it must be called after `promise` is rejected, with `promise`’s rejection reason as its first argument. immediately-rejected",
      "duration": 16
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.1: it must be called after `promise` is rejected, with `promise`’s rejection reason as its first argument. eventually-rejected",
      "duration": 78
    },
    {
      "title": "rejected after a delay",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.2: it must not be called before `promise` is rejected rejected after a delay",
      "duration": 78
    },
    {
      "title": "never rejected",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.2: it must not be called before `promise` is rejected never rejected",
      "duration": 160
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. already-rejected",
      "duration": 11
    },
    {
      "title": "trying to reject a pending promise more than once, immediately",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. trying to reject a pending promise more than once, immediately",
      "duration": 16
    },
    {
      "title": "trying to reject a pending promise more than once, delayed",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. trying to reject a pending promise more than once, delayed",
      "duration": 78
    },
    {
      "title": "trying to reject a pending promise more than once, immediately then delayed",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. trying to reject a pending promise more than once, immediately then delayed",
      "duration": 15
    },
    {
      "title": "when multiple `then` calls are made, spaced apart in time",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. when multiple `then` calls are made, spaced apart in time",
      "duration": 172
    },
    {
      "title": "when `then` is interleaved with rejection",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. when `then` is interleaved with rejection",
      "duration": 16
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected already-fulfilled",
      "duration": 15
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected immediately-fulfilled",
      "duration": 16
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected eventually-fulfilled",
      "duration": 78
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected already-rejected",
      "duration": 15
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected immediately-rejected",
      "duration": 16
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected eventually-rejected",
      "duration": 78
    },
    {
      "title": "when `onFulfilled` is added immediately before the promise is fulfilled",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (fulfillment case) when `onFulfilled` is added immediately before the promise is fulfilled",
      "duration": 0
    },
    {
      "title": "when `onFulfilled` is added immediately after the promise is fulfilled",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (fulfillment case) when `onFulfilled` is added immediately after the promise is fulfilled",
      "duration": 0
    },
    {
      "title": "when one `onFulfilled` is added inside another `onFulfilled`",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (fulfillment case) when one `onFulfilled` is added inside another `onFulfilled`",
      "duration": 212
    },
    {
      "title": "when `onFulfilled` is added inside an `onRejected`",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (fulfillment case) when `onFulfilled` is added inside an `onRejected`",
      "duration": 5
    },
    {
      "title": "when the promise is fulfilled asynchronously",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (fulfillment case) when the promise is fulfilled asynchronously",
      "duration": 32
    },
    {
      "title": "when `onRejected` is added immediately before the promise is rejected",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (rejection case) when `onRejected` is added immediately before the promise is rejected",
      "duration": 0
    },
    {
      "title": "when `onRejected` is added immediately after the promise is rejected",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (rejection case) when `onRejected` is added immediately after the promise is rejected",
      "duration": 0
    },
    {
      "title": "when `onRejected` is added inside an `onFulfilled`",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (rejection case) when `onRejected` is added inside an `onFulfilled`",
      "duration": 14
    },
    {
      "title": "when one `onRejected` is added inside another `onRejected`",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (rejection case) when one `onRejected` is added inside another `onRejected`",
      "duration": 213
    },
    {
      "title": "when the promise is rejected asynchronously",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (rejection case) when the promise is rejected asynchronously",
      "duration": 21
    },
    {
      "title": "fulfilled",
      "fullTitle": "2.2.5 `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value). strict mode fulfilled",
      "duration": 14
    },
    {
      "title": "rejected",
      "fullTitle": "2.2.5 `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value). strict mode rejected",
      "duration": 15
    },
    {
      "title": "fulfilled",
      "fullTitle": "2.2.5 `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value). sloppy mode fulfilled",
      "duration": 16
    },
    {
      "title": "rejected",
      "fullTitle": "2.2.5 `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value). sloppy mode rejected",
      "duration": 16
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple boring fulfillment handlers already-fulfilled",
      "duration": 18
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple boring fulfillment handlers immediately-fulfilled",
      "duration": 13
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple boring fulfillment handlers eventually-fulfilled",
      "duration": 76
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple fulfillment handlers, one of which throws already-fulfilled",
      "duration": 16
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple fulfillment handlers, one of which throws immediately-fulfilled",
      "duration": 20
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple fulfillment handlers, one of which throws eventually-fulfilled",
      "duration": 72
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values already-fulfilled",
      "duration": 30
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values immediately-fulfilled",
      "duration": 30
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order already-fulfilled",
      "duration": 17
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order immediately-fulfilled",
      "duration": 14
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order eventually-fulfilled",
      "duration": 77
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order even when one handler is added inside another handler already-fulfilled"
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order even when one handler is added inside another handler immediately-fulfilled"
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order even when one handler is added inside another handler eventually-fulfilled"
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple boring rejection handlers already-rejected",
      "duration": 16
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple boring rejection handlers immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple boring rejection handlers eventually-rejected",
      "duration": 77
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple rejection handlers, one of which throws already-rejected",
      "duration": 15
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple rejection handlers, one of which throws immediately-rejected",
      "duration": 15
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple rejection handlers, one of which throws eventually-rejected",
      "duration": 77
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values already-rejected",
      "duration": 30
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order already-rejected",
      "duration": 16
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order immediately-rejected",
      "duration": 16
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order eventually-rejected",
      "duration": 77
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order even when one handler is added inside another handler already-rejected"
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order even when one handler is added inside another handler immediately-rejected"
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order even when one handler is added inside another handler eventually-rejected"
    },
    {
      "title": "is a promise",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` is a promise",
      "duration": 0
    },
    {
      "title": "see separate 3.3 tests",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.1: If either `onFulfilled` or `onRejected` returns a value `x`, run the Promise Resolution Procedure `[[Resolve]](promise2, x)` see separate 3.3 tests",
      "duration": 0
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` already-fulfilled",
      "duration": 29
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` eventually-rejected",
      "duration": 93
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error immediately-fulfilled",
      "duration": 30
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error eventually-fulfilled",
      "duration": 93
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack already-fulfilled",
      "duration": 34
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack immediately-fulfilled",
      "duration": 28
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack eventually-fulfilled",
      "duration": 93
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack immediately-rejected",
      "duration": 30
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack eventually-rejected",
      "duration": 95
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date already-fulfilled",
      "duration": 30
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date eventually-rejected",
      "duration": 92
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object already-fulfilled",
      "duration": 29
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise immediately-fulfilled",
      "duration": 30
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `undefined` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `undefined` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `undefined` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `null` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `null` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `null` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `false` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `false` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `false` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `5` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `5` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `5` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an object already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an object immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an object eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an array containing a function already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an array containing a function immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an array containing a function eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `undefined` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `undefined` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `undefined` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `null` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `null` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `null` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `false` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `false` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `false` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `5` already-rejected",
      "duration": 30
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `5` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `5` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an object already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an object immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an object eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an array containing a function already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an array containing a function immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an array containing a function eventually-rejected",
      "duration": 94
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.1: If `promise` and `x` refer to the same object, reject `promise` with a `TypeError' as the reason. via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.1: If `promise` and `x` refer to the same object, reject `promise` with a `TypeError' as the reason. via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.1: If `x` is pending, `promise` must remain pending until `x` is fulfilled or rejected. via return from a fulfilled promise",
      "duration": 111
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.1: If `x` is pending, `promise` must remain pending until `x` is fulfilled or rejected. via return from a rejected promise",
      "duration": 112
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.2: If/when `x` is fulfilled, fulfill `promise` with the same value. `x` is already-fulfilled via return from a fulfilled promise",
      "duration": 41
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.2: If/when `x` is fulfilled, fulfill `promise` with the same value. `x` is already-fulfilled via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.2: If/when `x` is fulfilled, fulfill `promise` with the same value. `x` is eventually-fulfilled via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.2: If/when `x` is fulfilled, fulfill `promise` with the same value. `x` is eventually-fulfilled via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.3: If/when `x` is rejected, reject `promise` with the same reason. `x` is already-rejected via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.3: If/when `x` is rejected, reject `promise` with the same reason. `x` is already-rejected via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.3: If/when `x` is rejected, reject `promise` with the same reason. `x` is eventually-rejected via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.3: If/when `x` is rejected, reject `promise` with the same reason. `x` is eventually-rejected via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with null prototype via return from a fulfilled promise",
      "duration": 207
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with null prototype via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with normal Object.prototype via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with normal Object.prototype via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is a function via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is a function via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `undefined` via return from a fulfilled promise",
      "duration": 21
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `undefined` via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `null` via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `null` via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `false` via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `false` via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `0` via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `0` via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an error via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an error via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an error without a stack via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an error without a stack via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a date via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a date via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an object via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an object via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an always-pending thenable via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an always-pending thenable via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a fulfilled promise via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a fulfilled promise via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a rejected promise via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a rejected promise via return from a rejected promise",
      "duration": 33
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` Calls with `x` as `this` and two function arguments via return from a fulfilled promise",
      "duration": 209
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` Calls with `x` as `this` and two function arguments via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` Uses the original value of `then` via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` Uses the original value of `then` via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `undefined` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 200
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `undefined` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `undefined` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise"
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `undefined` `then` calls `resolvePromise` asynchronously via return from a rejected promise"
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `null` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 212
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `null` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `null` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise"
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `null` `then` calls `resolvePromise` asynchronously via return from a rejected promise"
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `false` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `false` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `false` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `false` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `5` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `5` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `5` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `5` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an object `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an object `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an object `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an object `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an array `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an array `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an array `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an array `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 42
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 45
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 110
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 124
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 48
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 30
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 45
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 48
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 45
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 110
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 124
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 78
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 78
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 213
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 99
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 78
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 78
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 213
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 205
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 100
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 124
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 110
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 124
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 123
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 110
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 124
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 43
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 48
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 61
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 33
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 213
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 200
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 205
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 205
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 200
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 200
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 20
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` then `rejectPromise`, both synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` then `rejectPromise`, both synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` synchronously then `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` synchronously then `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` then `rejectPromise`, both asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` then `rejectPromise`, both asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-fulfilled promise, then calling `rejectPromise`, both synchronously via return from a fulfilled promise",
      "duration": 110
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-fulfilled promise, then calling `rejectPromise`, both synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-rejected promise, then calling `rejectPromise`, both synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-rejected promise, then calling `rejectPromise`, both synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` then `resolvePromise`, both synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` then `resolvePromise`, both synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` synchronously then `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` synchronously then `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` then `resolvePromise`, both asynchronously via return from a fulfilled promise",
      "duration": 40
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` then `resolvePromise`, both asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice, first synchronously then asynchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice, first synchronously then asynchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice, both times asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice, both times asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-fulfilled promise, then calling it again, both times synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-fulfilled promise, then calling it again, both times synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-rejected promise, then calling it again, both times synchronously via return from a fulfilled promise",
      "duration": 110
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-rejected promise, then calling it again, both times synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, first synchronously then asynchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, first synchronously then asynchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, both times asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, both times asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. saving and abusing `resolvePromise` and `rejectPromise` via return from a fulfilled promise",
      "duration": 115
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. saving and abusing `resolvePromise` and `rejectPromise` via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with a non-thenable via return from a fulfilled promise",
      "duration": 26
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with a non-thenable via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with an asynchronously-fulfilled promise via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with an asynchronously-fulfilled promise via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with an asynchronously-rejected promise via return from a fulfilled promise",
      "duration": 110
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with an asynchronously-rejected promise via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` was called via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` was called via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` then `rejectPromise` were called via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` then `rejectPromise` were called via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` then `resolvePromise` were called via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` then `resolvePromise` were called via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. straightforward case via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. straightforward case via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. `resolvePromise` is called asynchronously before the `throw` via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. `resolvePromise` is called asynchronously before the `throw` via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. `rejectPromise` is called asynchronously before the `throw` via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. `rejectPromise` is called asynchronously before the `throw` via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is `5` via return from a fulfilled promise",
      "duration": 30
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is `5` via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an object via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an object via return from a rejected promise",
      "duration": 30
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an array containing a function via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an array containing a function via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is a regular expression via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is a regular expression via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an object inheriting from `Function.prototype` via return from a fulfilled promise",
      "duration": 30
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an object inheriting from `Function.prototype` via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` already-fulfilled",
      "duration": 214
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` immediately-fulfilled",
      "duration": 201
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` eventually-fulfilled",
      "duration": 204
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` already-rejected",
      "duration": 202
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` immediately-rejected",
      "duration": 203
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` eventually-rejected",
      "duration": 203
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` already-fulfilled",
      "duration": 202
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` immediately-fulfilled",
      "duration": 203
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` eventually-fulfilled",
      "duration": 203
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` already-rejected",
      "duration": 202
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` immediately-rejected",
      "duration": 204
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` eventually-rejected",
      "duration": 200
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` already-fulfilled",
      "duration": 23
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` immediately-fulfilled",
      "duration": 30
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` already-rejected",
      "duration": 30
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method already-fulfilled",
      "duration": 30
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method immediately-fulfilled",
      "duration": 30
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method eventually-rejected",
      "duration": 94
    }
  ],
  "failures": [
    {
      "title": "when one `onFulfilled` is added inside another `onFulfilled`",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (fulfillment case) when one `onFulfilled` is added inside another `onFulfilled`",
      "duration": 212
    },
    {
      "title": "when one `onRejected` is added inside another `onRejected`",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (rejection case) when one `onRejected` is added inside another `onRejected`",
      "duration": 213
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order even when one handler is added inside another handler already-fulfilled"
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order even when one handler is added inside another handler immediately-fulfilled"
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order even when one handler is added inside another handler eventually-fulfilled"
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order even when one handler is added inside another handler already-rejected"
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order even when one handler is added inside another handler immediately-rejected"
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order even when one handler is added inside another handler eventually-rejected"
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with null prototype via return from a fulfilled promise",
      "duration": 207
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with null prototype via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with normal Object.prototype via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is an object with normal Object.prototype via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is a function via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.1: Let `then` be `x.then` `x` is a function via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` Calls with `x` as `this` and two function arguments via return from a fulfilled promise",
      "duration": 209
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` Calls with `x` as `this` and two function arguments via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` Uses the original value of `then` via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` Uses the original value of `then` via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `undefined` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 200
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `undefined` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `undefined` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise"
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `undefined` `then` calls `resolvePromise` asynchronously via return from a rejected promise"
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `null` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 212
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `null` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `null` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise"
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `null` `then` calls `resolvePromise` asynchronously via return from a rejected promise"
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 213
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 213
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 205
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 213
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 200
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 205
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 205
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an already-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 200
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 200
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 202
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 204
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 201
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 202
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 201
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 204
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 203
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an eventually-fulfilled promise for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 203
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` already-fulfilled",
      "duration": 214
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` immediately-fulfilled",
      "duration": 201
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` eventually-fulfilled",
      "duration": 204
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` already-rejected",
      "duration": 202
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` immediately-rejected",
      "duration": 203
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `undefined` eventually-rejected",
      "duration": 203
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` already-fulfilled",
      "duration": 202
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` immediately-fulfilled",
      "duration": 203
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` eventually-fulfilled",
      "duration": 203
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` already-rejected",
      "duration": 202
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` immediately-rejected",
      "duration": 204
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `null` eventually-rejected",
      "duration": 200
    }
  ],
  "passes": [
    {
      "title": "already-fulfilled",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. already-fulfilled",
      "duration": 103
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. immediately-fulfilled",
      "duration": 105
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. eventually-fulfilled",
      "duration": 109
    },
    {
      "title": "trying to fulfill then immediately reject",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. trying to fulfill then immediately reject",
      "duration": 109
    },
    {
      "title": "trying to fulfill then reject, delayed",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. trying to fulfill then reject, delayed",
      "duration": 112
    },
    {
      "title": "trying to fulfill immediately then reject delayed",
      "fullTitle": "2.1.2.1: When fulfilled, a promise: must not transition to any other state. trying to fulfill immediately then reject delayed",
      "duration": 109
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. already-rejected",
      "duration": 107
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. immediately-rejected",
      "duration": 110
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. eventually-rejected",
      "duration": 108
    },
    {
      "title": "trying to reject then immediately fulfill",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. trying to reject then immediately fulfill",
      "duration": 112
    },
    {
      "title": "trying to reject then fulfill, delayed",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. trying to reject then fulfill, delayed",
      "duration": 109
    },
    {
      "title": "trying to reject immediately then fulfill delayed",
      "fullTitle": "2.1.3.1: When rejected, a promise: must not transition to any other state. trying to reject immediately then fulfill delayed",
      "duration": 107
    },
    {
      "title": "`onFulfilled` is `undefined`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a directly-rejected promise `onFulfilled` is `undefined`",
      "duration": 13
    },
    {
      "title": "`onFulfilled` is `null`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a directly-rejected promise `onFulfilled` is `null`",
      "duration": 15
    },
    {
      "title": "`onFulfilled` is `false`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a directly-rejected promise `onFulfilled` is `false`",
      "duration": 13
    },
    {
      "title": "`onFulfilled` is `5`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a directly-rejected promise `onFulfilled` is `5`",
      "duration": 16
    },
    {
      "title": "`onFulfilled` is an object",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a directly-rejected promise `onFulfilled` is an object",
      "duration": 15
    },
    {
      "title": "`onFulfilled` is `undefined`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a promise rejected and then chained off of `onFulfilled` is `undefined`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is `null`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a promise rejected and then chained off of `onFulfilled` is `null`",
      "duration": 32
    },
    {
      "title": "`onFulfilled` is `false`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a promise rejected and then chained off of `onFulfilled` is `false`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is `5`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a promise rejected and then chained off of `onFulfilled` is `5`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is an object",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.1: If `onFulfilled` is not a function, it must be ignored. applied to a promise rejected and then chained off of `onFulfilled` is an object",
      "duration": 27
    },
    {
      "title": "`onRejected` is `undefined`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a directly-fulfilled promise `onRejected` is `undefined`",
      "duration": 16
    },
    {
      "title": "`onRejected` is `null`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a directly-fulfilled promise `onRejected` is `null`",
      "duration": 15
    },
    {
      "title": "`onRejected` is `false`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a directly-fulfilled promise `onRejected` is `false`",
      "duration": 16
    },
    {
      "title": "`onRejected` is `5`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a directly-fulfilled promise `onRejected` is `5`",
      "duration": 16
    },
    {
      "title": "`onRejected` is an object",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a directly-fulfilled promise `onRejected` is an object",
      "duration": 15
    },
    {
      "title": "`onFulfilled` is `undefined`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a promise fulfilled and then chained off of `onFulfilled` is `undefined`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is `null`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a promise fulfilled and then chained off of `onFulfilled` is `null`",
      "duration": 32
    },
    {
      "title": "`onFulfilled` is `false`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a promise fulfilled and then chained off of `onFulfilled` is `false`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is `5`",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a promise fulfilled and then chained off of `onFulfilled` is `5`",
      "duration": 31
    },
    {
      "title": "`onFulfilled` is an object",
      "fullTitle": "2.2.1: Both `onFulfilled` and `onRejected` are optional arguments. 2.2.1.2: If `onRejected` is not a function, it must be ignored. applied to a promise fulfilled and then chained off of `onFulfilled` is an object",
      "duration": 30
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.1: it must be called after `promise` is fulfilled, with `promise`’s fulfillment value as its first argument. already-fulfilled",
      "duration": 16
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.1: it must be called after `promise` is fulfilled, with `promise`’s fulfillment value as its first argument. immediately-fulfilled",
      "duration": 15
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.1: it must be called after `promise` is fulfilled, with `promise`’s fulfillment value as its first argument. eventually-fulfilled",
      "duration": 78
    },
    {
      "title": "fulfilled after a delay",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.2: it must not be called before `promise` is fulfilled fulfilled after a delay",
      "duration": 78
    },
    {
      "title": "never fulfilled",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.2: it must not be called before `promise` is fulfilled never fulfilled",
      "duration": 159
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. already-fulfilled",
      "duration": 13
    },
    {
      "title": "trying to fulfill a pending promise more than once, immediately",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. trying to fulfill a pending promise more than once, immediately",
      "duration": 16
    },
    {
      "title": "trying to fulfill a pending promise more than once, delayed",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. trying to fulfill a pending promise more than once, delayed",
      "duration": 78
    },
    {
      "title": "trying to fulfill a pending promise more than once, immediately then delayed",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. trying to fulfill a pending promise more than once, immediately then delayed",
      "duration": 15
    },
    {
      "title": "when multiple `then` calls are made, spaced apart in time",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. when multiple `then` calls are made, spaced apart in time",
      "duration": 172
    },
    {
      "title": "when `then` is interleaved with fulfillment",
      "fullTitle": "2.2.2: If `onFulfilled` is a function, 2.2.2.3: it must not be called more than once. when `then` is interleaved with fulfillment",
      "duration": 15
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.1: it must be called after `promise` is rejected, with `promise`’s rejection reason as its first argument. already-rejected",
      "duration": 15
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.1: it must be called after `promise` is rejected, with `promise`’s rejection reason as its first argument. immediately-rejected",
      "duration": 16
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.1: it must be called after `promise` is rejected, with `promise`’s rejection reason as its first argument. eventually-rejected",
      "duration": 78
    },
    {
      "title": "rejected after a delay",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.2: it must not be called before `promise` is rejected rejected after a delay",
      "duration": 78
    },
    {
      "title": "never rejected",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.2: it must not be called before `promise` is rejected never rejected",
      "duration": 160
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. already-rejected",
      "duration": 11
    },
    {
      "title": "trying to reject a pending promise more than once, immediately",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. trying to reject a pending promise more than once, immediately",
      "duration": 16
    },
    {
      "title": "trying to reject a pending promise more than once, delayed",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. trying to reject a pending promise more than once, delayed",
      "duration": 78
    },
    {
      "title": "trying to reject a pending promise more than once, immediately then delayed",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. trying to reject a pending promise more than once, immediately then delayed",
      "duration": 15
    },
    {
      "title": "when multiple `then` calls are made, spaced apart in time",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. when multiple `then` calls are made, spaced apart in time",
      "duration": 172
    },
    {
      "title": "when `then` is interleaved with rejection",
      "fullTitle": "2.2.3: If `onRejected` is a function, 2.2.3.3: it must not be called more than once. when `then` is interleaved with rejection",
      "duration": 16
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected already-fulfilled",
      "duration": 15
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected immediately-fulfilled",
      "duration": 16
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected eventually-fulfilled",
      "duration": 78
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected already-rejected",
      "duration": 15
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected immediately-rejected",
      "duration": 16
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. `then` returns before the promise becomes fulfilled or rejected eventually-rejected",
      "duration": 78
    },
    {
      "title": "when `onFulfilled` is added immediately before the promise is fulfilled",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (fulfillment case) when `onFulfilled` is added immediately before the promise is fulfilled",
      "duration": 0
    },
    {
      "title": "when `onFulfilled` is added immediately after the promise is fulfilled",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (fulfillment case) when `onFulfilled` is added immediately after the promise is fulfilled",
      "duration": 0
    },
    {
      "title": "when `onFulfilled` is added inside an `onRejected`",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (fulfillment case) when `onFulfilled` is added inside an `onRejected`",
      "duration": 5
    },
    {
      "title": "when the promise is fulfilled asynchronously",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (fulfillment case) when the promise is fulfilled asynchronously",
      "duration": 32
    },
    {
      "title": "when `onRejected` is added immediately before the promise is rejected",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (rejection case) when `onRejected` is added immediately before the promise is rejected",
      "duration": 0
    },
    {
      "title": "when `onRejected` is added immediately after the promise is rejected",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (rejection case) when `onRejected` is added immediately after the promise is rejected",
      "duration": 0
    },
    {
      "title": "when `onRejected` is added inside an `onFulfilled`",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (rejection case) when `onRejected` is added inside an `onFulfilled`",
      "duration": 14
    },
    {
      "title": "when the promise is rejected asynchronously",
      "fullTitle": "2.2.4: `onFulfilled` or `onRejected` must not be called until the execution context stack contains only platform code. Clean-stack execution ordering tests (rejection case) when the promise is rejected asynchronously",
      "duration": 21
    },
    {
      "title": "fulfilled",
      "fullTitle": "2.2.5 `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value). strict mode fulfilled",
      "duration": 14
    },
    {
      "title": "rejected",
      "fullTitle": "2.2.5 `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value). strict mode rejected",
      "duration": 15
    },
    {
      "title": "fulfilled",
      "fullTitle": "2.2.5 `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value). sloppy mode fulfilled",
      "duration": 16
    },
    {
      "title": "rejected",
      "fullTitle": "2.2.5 `onFulfilled` and `onRejected` must be called as functions (i.e. with no `this` value). sloppy mode rejected",
      "duration": 16
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple boring fulfillment handlers already-fulfilled",
      "duration": 18
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple boring fulfillment handlers immediately-fulfilled",
      "duration": 13
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple boring fulfillment handlers eventually-fulfilled",
      "duration": 76
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple fulfillment handlers, one of which throws already-fulfilled",
      "duration": 16
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple fulfillment handlers, one of which throws immediately-fulfilled",
      "duration": 20
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. multiple fulfillment handlers, one of which throws eventually-fulfilled",
      "duration": 72
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values already-fulfilled",
      "duration": 30
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values immediately-fulfilled",
      "duration": 30
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order already-fulfilled",
      "duration": 17
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order immediately-fulfilled",
      "duration": 14
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.1: If/when `promise` is fulfilled, all respective `onFulfilled` callbacks must execute in the order of their originating calls to `then`. `onFulfilled` handlers are called in the original order eventually-fulfilled",
      "duration": 77
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple boring rejection handlers already-rejected",
      "duration": 16
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple boring rejection handlers immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple boring rejection handlers eventually-rejected",
      "duration": 77
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple rejection handlers, one of which throws already-rejected",
      "duration": 15
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple rejection handlers, one of which throws immediately-rejected",
      "duration": 15
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. multiple rejection handlers, one of which throws eventually-rejected",
      "duration": 77
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values already-rejected",
      "duration": 30
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. results in multiple branching chains with their own fulfillment values eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order already-rejected",
      "duration": 16
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order immediately-rejected",
      "duration": 16
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.6: `then` may be called multiple times on the same promise. 2.2.6.2: If/when `promise` is rejected, all respective `onRejected` callbacks must execute in the order of their originating calls to `then`. `onRejected` handlers are called in the original order eventually-rejected",
      "duration": 77
    },
    {
      "title": "is a promise",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` is a promise",
      "duration": 0
    },
    {
      "title": "see separate 3.3 tests",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.1: If either `onFulfilled` or `onRejected` returns a value `x`, run the Promise Resolution Procedure `[[Resolve]](promise2, x)` see separate 3.3 tests",
      "duration": 0
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` already-fulfilled",
      "duration": 29
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `undefined` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `null` eventually-rejected",
      "duration": 93
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `false` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is `0` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error immediately-fulfilled",
      "duration": 30
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error eventually-fulfilled",
      "duration": 93
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack already-fulfilled",
      "duration": 34
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack immediately-fulfilled",
      "duration": 28
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack eventually-fulfilled",
      "duration": 93
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack immediately-rejected",
      "duration": 30
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an error without a stack eventually-rejected",
      "duration": 95
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date already-fulfilled",
      "duration": 30
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a date eventually-rejected",
      "duration": 92
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object already-fulfilled",
      "duration": 29
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an object eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is an always-pending thenable eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise immediately-fulfilled",
      "duration": 30
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a fulfilled promise eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.2: If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason. The reason is a rejected promise eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `undefined` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `undefined` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `undefined` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `null` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `null` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `null` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `false` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `false` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `false` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `5` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `5` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is `5` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an object already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an object immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an object eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an array containing a function already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an array containing a function immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.3: If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value. `onFulfilled` is an array containing a function eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `undefined` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `undefined` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `undefined` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `null` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `null` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `null` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `false` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `false` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `false` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `5` already-rejected",
      "duration": 30
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `5` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is `5` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an object already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an object immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an object eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an array containing a function already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an array containing a function immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.2.7: `then` must return a promise: `promise2 = promise1.then(onFulfilled, onRejected)` 2.2.7.4: If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason. `onRejected` is an array containing a function eventually-rejected",
      "duration": 94
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.1: If `promise` and `x` refer to the same object, reject `promise` with a `TypeError' as the reason. via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.1: If `promise` and `x` refer to the same object, reject `promise` with a `TypeError' as the reason. via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.1: If `x` is pending, `promise` must remain pending until `x` is fulfilled or rejected. via return from a fulfilled promise",
      "duration": 111
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.1: If `x` is pending, `promise` must remain pending until `x` is fulfilled or rejected. via return from a rejected promise",
      "duration": 112
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.2: If/when `x` is fulfilled, fulfill `promise` with the same value. `x` is already-fulfilled via return from a fulfilled promise",
      "duration": 41
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.2: If/when `x` is fulfilled, fulfill `promise` with the same value. `x` is already-fulfilled via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.2: If/when `x` is fulfilled, fulfill `promise` with the same value. `x` is eventually-fulfilled via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.2: If/when `x` is fulfilled, fulfill `promise` with the same value. `x` is eventually-fulfilled via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.3: If/when `x` is rejected, reject `promise` with the same reason. `x` is already-rejected via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.3: If/when `x` is rejected, reject `promise` with the same reason. `x` is already-rejected via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.3: If/when `x` is rejected, reject `promise` with the same reason. `x` is eventually-rejected via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.2: If `x` is a promise, adopt its state 2.3.2.3: If/when `x` is rejected, reject `promise` with the same reason. `x` is eventually-rejected via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `undefined` via return from a fulfilled promise",
      "duration": 21
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `undefined` via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `null` via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `null` via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `false` via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `false` via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `0` via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is `0` via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an error via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an error via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an error without a stack via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an error without a stack via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a date via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a date via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an object via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an object via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an always-pending thenable via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is an always-pending thenable via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a fulfilled promise via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a fulfilled promise via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a rejected promise via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.2: If retrieving the property `x.then` results in a thrown exception `e`, reject `promise` with `e` as the reason. `e` is a rejected promise via return from a rejected promise",
      "duration": 33
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `false` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `false` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `false` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `false` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `5` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `5` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `5` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is `5` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an object `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an object `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an object `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an object `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an array `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an array `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an array `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is not a thenable `y` is an array `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 42
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 45
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 110
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 124
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 48
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable `y` is an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 30
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 45
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 48
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 45
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 110
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 124
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 78
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 78
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 99
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 78
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 78
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 100
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is an asynchronously-fulfilled custom thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 124
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 110
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 124
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a synchronously-fulfilled one-time thenable for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 123
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 63
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 110
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 124
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that tries to fulfill twice for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-fulfilled custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-fulfilled one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that tries to fulfill twice `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that tries to fulfill twice `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that fulfills but then throws `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that fulfills but then throws `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 43
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 48
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 61
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-fulfilled promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an asynchronously-rejected custom thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 62
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a synchronously-rejected one-time thenable `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 33
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that immediately throws in `then` `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for a thenable that immediately throws in `then` `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an object with a throwing `then` accessor `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 62
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an already-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 63
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 125
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.1: If/when `resolvePromise` is called with value `y`, run `[[Resolve]](promise, y)` `y` is a thenable for a thenable `y` is a thenable that fulfills but then throws for an eventually-rejected promise `then` calls `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 125
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 20
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `undefined` `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `null` `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `false` `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is `0` `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an error without a stack `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a date `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an object `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is an always-pending thenable `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a fulfilled promise `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.2: If/when `rejectPromise` is called with reason `r`, reject `promise` with `r` `r` is a rejected promise `then` calls `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` then `rejectPromise`, both synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` then `rejectPromise`, both synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` synchronously then `rejectPromise` asynchronously via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` synchronously then `rejectPromise` asynchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` then `rejectPromise`, both asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` then `rejectPromise`, both asynchronously via return from a rejected promise",
      "duration": 46
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-fulfilled promise, then calling `rejectPromise`, both synchronously via return from a fulfilled promise",
      "duration": 110
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-fulfilled promise, then calling `rejectPromise`, both synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-rejected promise, then calling `rejectPromise`, both synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-rejected promise, then calling `rejectPromise`, both synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` then `resolvePromise`, both synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` then `resolvePromise`, both synchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` synchronously then `resolvePromise` asynchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` synchronously then `resolvePromise` asynchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` then `resolvePromise`, both asynchronously via return from a fulfilled promise",
      "duration": 40
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` then `resolvePromise`, both asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice, first synchronously then asynchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice, first synchronously then asynchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice, both times asynchronously via return from a fulfilled promise",
      "duration": 47
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` twice, both times asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-fulfilled promise, then calling it again, both times synchronously via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-fulfilled promise, then calling it again, both times synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-rejected promise, then calling it again, both times synchronously via return from a fulfilled promise",
      "duration": 110
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `resolvePromise` with an asynchronously-rejected promise, then calling it again, both times synchronously via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice synchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice synchronously via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, first synchronously then asynchronously via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, first synchronously then asynchronously via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, both times asynchronously via return from a fulfilled promise",
      "duration": 46
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. calling `rejectPromise` twice, both times asynchronously via return from a rejected promise",
      "duration": 47
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. saving and abusing `resolvePromise` and `rejectPromise` via return from a fulfilled promise",
      "duration": 115
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.3: If both `resolvePromise` and `rejectPromise` are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored. saving and abusing `resolvePromise` and `rejectPromise` via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with a non-thenable via return from a fulfilled promise",
      "duration": 26
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with a non-thenable via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with an asynchronously-fulfilled promise via return from a fulfilled promise",
      "duration": 109
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with an asynchronously-fulfilled promise via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with an asynchronously-rejected promise via return from a fulfilled promise",
      "duration": 110
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` was called with an asynchronously-rejected promise via return from a rejected promise",
      "duration": 109
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` was called via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` was called via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` then `rejectPromise` were called via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `resolvePromise` then `rejectPromise` were called via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` then `resolvePromise` were called via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.1: If `resolvePromise` or `rejectPromise` have been called, ignore it. `rejectPromise` then `resolvePromise` were called via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. straightforward case via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. straightforward case via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. `resolvePromise` is called asynchronously before the `throw` via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. `resolvePromise` is called asynchronously before the `throw` via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. `rejectPromise` is called asynchronously before the `throw` via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.3: If `then` is a function, call it with `x` as `this`, first argument `resolvePromise`, and second argument `rejectPromise` 2.3.3.3.4: If calling `then` throws an exception `e`, 2.3.3.3.4.2: Otherwise, reject `promise` with `e` as the reason. `rejectPromise` is called asynchronously before the `throw` via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is `5` via return from a fulfilled promise",
      "duration": 30
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is `5` via return from a rejected promise",
      "duration": 32
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an object via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an object via return from a rejected promise",
      "duration": 30
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an array containing a function via return from a fulfilled promise",
      "duration": 31
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an array containing a function via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is a regular expression via return from a fulfilled promise",
      "duration": 32
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is a regular expression via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "via return from a fulfilled promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an object inheriting from `Function.prototype` via return from a fulfilled promise",
      "duration": 30
    },
    {
      "title": "via return from a rejected promise",
      "fullTitle": "2.3.3: Otherwise, if `x` is an object or function, 2.3.3.4: If `then` is not a function, fulfill promise with `x` `then` is an object inheriting from `Function.prototype` via return from a rejected promise",
      "duration": 31
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` already-fulfilled",
      "duration": 23
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `false` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` immediately-fulfilled",
      "duration": 30
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` already-rejected",
      "duration": 30
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `0` eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method already-fulfilled",
      "duration": 31
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method immediately-fulfilled",
      "duration": 31
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `true` with `Boolean.prototype` modified to have a `then` method eventually-rejected",
      "duration": 94
    },
    {
      "title": "already-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method already-fulfilled",
      "duration": 30
    },
    {
      "title": "immediately-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method immediately-fulfilled",
      "duration": 30
    },
    {
      "title": "eventually-fulfilled",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method eventually-fulfilled",
      "duration": 94
    },
    {
      "title": "already-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method already-rejected",
      "duration": 31
    },
    {
      "title": "immediately-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method immediately-rejected",
      "duration": 31
    },
    {
      "title": "eventually-rejected",
      "fullTitle": "2.3.4: If `x` is not an object or function, fulfill `promise` with `x` The value is `1` with `Number.prototype` modified to have a `then` method eventually-rejected",
      "duration": 94
    }
  ]
}