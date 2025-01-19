/**
 * The current version of the package.
 */
export const VERSION = "__VERSION__";

/**
 * For those libraries that will not accept undefined.
 */
export const NONE = null; // eslint-disable-line unicorn/no-null

/**
 * For the cases where you would need this?
 */
export const UNDEFINED = undefined;

/**
 * Defines a standard closure with either none or one parameter.
 *
 * @param Output The response
 * @param Input The parameter
 */
export type Runnable<Output = void, Input = never> = (input: Input) => Output;

/**
 * Defines a async closure with either none or one parameter.
 *
 * @param Output The response
 * @param Input The parameter
 *
 * @see Runnable
 */
export type Callable<Output = void, Input = never> = Runnable<MaybePromise<Output>, Input>;

/**
 * Defines a constructable instance for a class
 */
export type Constructor<T> = new (...parameters: unknown[]) => T;

/**
 * An eventually resolved value.
 */
export type MaybePromise<T> = T | PromiseLike<T> | Promise<T>;

/**
 * An value that is either present or absent.
 */
export type Optional<T> = T | undefined;

/**
 * Defines a raw primitive value
 */
export type Primitive = string | symbol | number;
