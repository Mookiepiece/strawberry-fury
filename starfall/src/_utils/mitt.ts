import mitt from 'mitt';

export interface Emitter<T> {
  on(type: T, handler: (event?: T) => void): void;
  off(type: T, handler: (event?: T) => void): void;
  emit(type: T, event?: (event?: T) => void): void;
}

const Mitt = <T>(): Emitter<T> => (mitt() as unknown) as Emitter<T>;

export default Mitt;
