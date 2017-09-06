declare namespace NodeJS {
  interface Global {
    fetch: typeof fetch
    [x: string]: any
  }

  interface Process {
    browser?: boolean
  }
}
