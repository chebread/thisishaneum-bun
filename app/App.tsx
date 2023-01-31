import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <div>{value}</div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        add
      </button>
    </div>
  );
};

export default App;

// vscode만 error 발생
