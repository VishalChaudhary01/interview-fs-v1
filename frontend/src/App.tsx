import axios from 'axios';
import React, { useState } from 'react';
// import { Button, Input } from 'react-daisyui';

function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const [days, setDays] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/days', { from, to });

      console.log(res.data);
      if (res.data) setDays(res.data.days);
    } catch (error) {
      console.log(error);
    }

    console.log('form data: ', from, to);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <form onSubmit={handleSubmit}>
        <input
          name="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <br />
        <input name="to" value={to} onChange={(e) => setTo(e.target.value)} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <br />
      <div>Days Difference: {days}</div>
    </div>
  );
}

export default App;
