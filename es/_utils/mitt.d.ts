export declare type Emitter<T> = {
    on<K extends keyof T>(type: K, handler: (event: T[K]) => void): void;
    off<K extends keyof T>(type: K, handler: (event: T[K]) => void): void;
    emit<K extends keyof T>(type: K, event: T[K]): void;
};
declare const Mitt: <T>() => Emitter<T>;
export default Mitt;
