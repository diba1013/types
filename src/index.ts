/**
 * The current version of the package.
 */
export const VERSION = "__VERSION__";

/**
 * For those libraries that will not accept undefined.
 */
export const NONE = null; // eslint-disable-line unicorn/no-null

/**
 * An value that is either present or absent.
 */
export type Optional<T> = T | undefined;

/**
 * An eventually resolved value.
 */
export type MaybePromise<T> = T | PromiseLike<T> | Promise<T>;
