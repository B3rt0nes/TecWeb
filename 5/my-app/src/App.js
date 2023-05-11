import React from 'react';
import Counter from "./counter";
import Parent from "./parent";
import { useEffect } from 'react';

function App() {
  return (
    <div>
      <Counter />
      <Parent />
      <WeatherCard />
    </div>
  );
}
export default App;