# koa-flowtype-demo
flow demo for koa


## Step

1. install flow package

```
npm i flow flow-typed -g
```

2. init flow

```
# if use flow-typed
# flow-bin is require
flow init & npm i flow-bin -D
```

3. set `.flowconfig` ignore & libs
```
[ignore]
.*/node_modules/.*
...
[libs]
flow-typed

```

4. install flow libs

> flow lib list ↓↓↓

> @https://github.com/flowtype/flow-typed/tree/master/definitions/npm

```
flow-type install koa@2.x.x lodash2.x.x
```

5. Declaring An Module

see in `flow-typed/modules.js`


