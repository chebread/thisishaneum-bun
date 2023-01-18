import { useState, useCallback } from 'react';

const useBoolean = initialValue => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(value => !value), []);

  return [value, toggle, setValue];
};

export default useBoolean;
