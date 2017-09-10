declare namespace NodeJS {
  interface Global {
    fetch: typeof fetch
  }

  interface Process {
    browser?: boolean
  }
}
