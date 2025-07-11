import axios from 'axios';
import React, { useState } from 'react';
import { DayPicker, type DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function App() {
  const [days, setDays] = useState('');
  const [range, setRange] = useState<DateRange | undefined>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/days', range);
      if (res.data) setDays(res.data.days);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={setRange}
          className="bg-white rounded-lg shadow-md p-4"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>

      <div className="text-2xl font-semibold">Day Difference: {days}</div>
    </div>
  );
}

export default App;
