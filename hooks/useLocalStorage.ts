"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    const item = window.localStorage.getItem(key);

    if (item) {
      setStoredValue(JSON.parse(item) as T);
    }
  }, [key]);

  function setValue(value: T | ((previousValue: T) => T)) {
    setStoredValue((previousValue) => {
      const nextValue =
        value instanceof Function ? value(previousValue) : value;

      window.localStorage.setItem(key, JSON.stringify(nextValue));
      return nextValue;
    });
  }

  return [storedValue, setValue] as const;
}
