/**
 * Simple helper and type guard to check if the ENV variable is actually defined
 */

console.log(process.env.REACT_APP_PROD_SECRET);
console.log(process.env.REACT_APP_TEST_SECRET);

export const getEnv = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ENV variable: "${name}"`);
  }

  return value;
};

export const PROD = getEnv('REACT_APP_PROD_SECRET');
export const TEST = getEnv('REACT_APP_TEST_SECRET');

