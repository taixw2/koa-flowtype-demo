declare module 'koa-views' {
  declare var exports: {
    (path: string, options: any): any
  }
}

declare module 'koa-json' {
  declare var exports: {
    (): any
  }
}

declare module 'koa-onerror' {
  declare var exports: {
    (app: any): any
  }
}

declare module 'koa-logger' {
  declare var exports: {
    (): any
  }
}

declare module 'koa-static' {
  declare var exports: {
    (app: string): any
  }
}

declare module 'koa-bodyparser' {
  declare var exports: {
    (): any
  }
}

declare module 'koa-router' {
  declare var exports: {
    (): any
  }  
}

declare module 'koa-flow-declarations/KoaContext' {
  declare var exports: any
}


