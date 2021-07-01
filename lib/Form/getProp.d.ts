export declare function setProp<T extends Record<string, unknown>>(obj: T, pathes: string[], value: unknown): T;
export declare const setPropMutable: <T extends Record<string, unknown>>(obj: T, pathes: string[], value: unknown) => void;
/**
 * field value is not initialized
 * or it's parent value has been removed cause we cannot find the value
 * but we could know that this form item is stale.
 */
export declare const UNDEFINED_VALUE: {};
export declare function getProp(obj: Record<string, unknown>, pathes: string[]): unknown;
