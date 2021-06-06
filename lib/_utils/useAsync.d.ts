import _useAsyncFn from 'react-use/lib/useAsyncFn';
import { AsyncFnReturn } from 'react-use/lib/useAsync';
import { FunctionReturningPromise } from 'react-use/lib/misc/types';
export default function useAsyncFn<T extends FunctionReturningPromise>(...paramsz: Parameters<typeof _useAsyncFn>): [AsyncFnReturn<T>[0], (...params: Parameters<T>) => void];
