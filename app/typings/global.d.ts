declare namespace NodeJS {
  // tslint:disable-line no-namespace
  interface Global {
    fetch: typeof fetch
    [x: string]: any
  }

  interface Process {
    browser?: boolean
  }
}

// declare const process: any
// declare const global: any
