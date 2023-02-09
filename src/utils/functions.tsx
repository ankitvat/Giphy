export const debounce = (func: any, delay: any) => {
  let debounceHandler: number;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceHandler);
    debounceHandler = setTimeout(() => func.apply(context, args), delay);
  };
};

export const debounceFunc = (func, handler, delay) => {
  clearTimeout(handler);
  return setTimeout(func, delay);
};
