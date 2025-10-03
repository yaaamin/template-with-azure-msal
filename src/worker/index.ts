export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
    const { createNitroApp } = await import('nitropack/runtime')
    const nitroApp = createNitroApp()
    return nitroApp.localFetch(request)
  }
}