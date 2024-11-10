import { debounce } from "lodash";
import { useEffect } from "react";

const DEBOUNCE_TIME = 1000;

export function useLocalStorage(
  id: string,
  setValue: (value: string) => void,
  defaultValue: string = ""
) {
  useEffect(() => {
    const savedValue = localStorage.getItem(id);
    if (savedValue) {
      setValue(savedValue);
    } else {
      setValue(defaultValue);
    }
  }, [id]);

  const setLocalStorage = debounce((value: string) => {
    localStorage.setItem(id, value);
  }, DEBOUNCE_TIME);

  return { setLocalStorage };
}
