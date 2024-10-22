import React, { useEffect, useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Button = ({ setFilterOption, setStartDate, setEndDate }) => {
  const [dateFilter, setDateFilter] = useState("full-time");
  const [localFilterOption, setLocalFilterOption] = useState('day');
  const [localStartDate, setLocalStartDate] = useState(new Date());
  const [localEndDate, setLocalEndDate] = useState(new Date());

  const handleApplyFilter = () => {
    setFilterOption(localFilterOption);
    setStartDate(localStartDate);
    setEndDate(localEndDate);
  };
  return (
    <>
      <div className="relative">
        <button
          className="p-2 lg:p-3 rounded-full flex items-center transition-colors duration-300 hover:bg-slate-50 focus:outline-none"
          onClick={() => setDateFilter(dateFilter === 'full-time' ? 'custom' : 'full-time')}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
        </button>

        {dateFilter === 'custom' && (
          <div className="absolute top-full right-0 mt-2 bg-white border p-4 rounded shadow-lg z-50 w-72 sm:w-72 lg:w-auto text-black">
            <select
              className="border p-2 rounded mb-4 w-full"
              value={localFilterOption}
              onChange={(e) => setLocalFilterOption(e.target.value)}
            >
              <option value="year">Year</option>
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="day">Day</option>
            </select>

            {localFilterOption === 'day' && (
              <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                <DatePicker selected={localStartDate} onChange={(date) => setLocalStartDate(date)} />
                <span className="mx-2">to</span>
                <DatePicker selected={localEndDate} onChange={(date) => setLocalEndDate(date)} />
              </div>
            )}

            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              onClick={handleApplyFilter}
            >
              Apply
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Button;
