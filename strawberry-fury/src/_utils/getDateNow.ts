export default async function getDateNow(): Promise<number> {
  return new Promise(resolve => setTimeout(() => resolve(Date.now()), 2000));
}
