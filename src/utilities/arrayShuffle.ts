export function arrayShuffleRight<T>(array: T[]): T[] {
  return [...array.slice(-1), ...array.slice(0,-1)]
}