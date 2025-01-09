// utils.tsx

// 1. ClassName utility function (cn)
export const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// 2. Date Formatter utility function
export const formatDate = (date: string | Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-US', options);
};

// 3. Debounce function (to optimize performance in event handlers)
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const debounce = (func: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// 4. Capitalize the first letter of each word
export const capitalizeWords = (str: string) => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// 5. Random string generator (for use cases like IDs, tokens)
export const generateRandomString = (length: number = 8): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// utils.ts
