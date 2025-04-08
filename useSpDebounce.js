import { useRef } from "react";

export default function useSpDebounce(callback, delay) {
  const timeoutRef = useRef(null);

  const debouncedCallback = (...args) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
}
