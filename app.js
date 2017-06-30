// @flow
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')()

const { KoaContext } = require('koa-flow-declarations/KoaContext')

type Context = KoaContext

type Route = {
  routes: () => any,
  allowedMethods: () => any,
}


const index: Route = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx: Context, next: () => any) => {
  const start:number = new Date()
  await next()
  const ms: number = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

module.exports = app
