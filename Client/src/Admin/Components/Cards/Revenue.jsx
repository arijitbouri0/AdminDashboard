import React, { useState, useEffect } from "react";
import { UilMoneyBill } from '@iconscout/react-unicons';  
import Button from '../Button/Button';
import { useDispatch, useSelector } from "react-redux";
import { fetchRevenue } from "../../../Redux/Admin/Matrix/Action";

const Revenue = () => {
  const dispatch = useDispatch();
  const { revenue, loading, error } = useSelector((state) => state.revenue);

  const [filterOption, setFilterOption] = useState('year');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    dispatch(fetchRevenue({ startDate, endDate, filterOption }));
  }, [dispatch, startDate, endDate, filterOption]);

  return (

    <div className="bg-white border border-stroke rounded-sm shadow-sm px-7 py-6 relative">
      <div className="absolute top-4 right-4">
        <Button setFilterOption={setFilterOption} setStartDate={setStartDate} setEndDate={setEndDate} />
      </div>
      <div className="flex h-11 w-11 items-center mt-4 bg-blue-50 justify-center mb-3 rounded-full">
        <UilMoneyBill className="text-blue-700 size={24}" />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md text-4xl  font-bold text-black ">
            {revenue}
          </h4>
          <span className="text-sm font-medium text-slate-400">Total Revenue</span>
        </div>
      </div>
      </div>
      );
};

      export default Revenue;

