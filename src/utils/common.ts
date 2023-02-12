/**
 * Excuted when specific context is not provided to application.
 * commonly that situation rarely happens.(almost never).
 * But typescript do not know that..
 */
export function noProviderHandler(contextName: string) {
  console.error(`Cannot found ${contextName} Provider`);
}
