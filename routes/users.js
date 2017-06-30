// @flow

const { KoaContext } = require('koa-flow-declarations/KoaContext')

type Context = KoaContext

const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx: Context) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx: Context) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
