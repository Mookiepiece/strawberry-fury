export function setProp<T extends Record<string, unknown>>(
  obj: T,
  pathes: string[],
  value: unknown
): T {
  const ans = { ...obj }; // answer
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let curr: any = ans; // an cursor to walk deep into the obj

  let i = 0;
  for (; i < pathes.length - 1; i++) {
    const path = pathes[i];
    const next = curr[path];
    if (Array.isArray(next)) {
      curr = curr[path] = [...next];
    } else if (typeof next === 'object') {
      curr = curr[path] = { ...next };
    } else {
      throw new Error(`[ST form] cannot get prop on ${obj} by [${pathes.join(' ')}]`);
    }
  }

  curr[pathes[i]] = value;

  return ans;
}

export const setPropMutable = <T extends Record<string, unknown>>(
  obj: T,
  pathes: string[],
  value: unknown
): void => {
  const lastPath = pathes[pathes.length - 1];
  const prevPathes = pathes.slice(0, -1);

  const a: any = prevPathes.reduce((obj, path) => obj[path], obj as any);

  a[lastPath] = value;
  return;
};

/**
 * field value is not initialized
 * or it's parent value has been removed cause we cannot find the value
 * but we could know that this form item is stale.
 */
export const UNDEFINED_VALUE = {};

export function getProp(obj: Record<string, unknown>, pathes: string[]): unknown {
  return pathes.reduce((tempObj, k) => {
    if (k in tempObj) {
      return tempObj[k] as Record<string, unknown>;
    } else {
      return UNDEFINED_VALUE;
    }
  }, obj);
}
