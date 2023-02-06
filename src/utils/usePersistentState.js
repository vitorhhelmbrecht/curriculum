import { useEffect, useState } from 'react';

function usePersistentState(key, initialValue) {
  const getValue = () => {
    try {
      let value = localStorage.getItem(key);

      if (value) {
        value = JSON.parse(value);
      } else {
        value = initialValue;
      }

      return value;
    } catch {
      return initialValue;
    }
  };

  const [state, setState] = useState(null);

  useEffect(() => {
    setState(getValue());
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistentState;
