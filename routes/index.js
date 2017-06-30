// @flow

const { KoaContext } = require('koa-flow-declarations/KoaContext')

type Context = KoaContext

const router = require('koa-router')()

router.get('/', async (ctx: Context) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx: Context) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx: Context) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
