import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DateRange } from "react-date-range";
import { getSleepByRange } from "../../actions/getSleepData";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Calendario() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const dispatch = useDispatch();

  const handleChange = (item) => {
    if (item.selection.startDate === item.selection.endDate) {
      setState([item.selection]);
    } else {
      setState([item.selection]);
      const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
      const startDate = new Date(item.selection?.startDate - tzoffset)
        .toISOString()
        .split("T")[0];
      const endDate = new Date(item.selection?.endDate - tzoffset)
        .toISOString()
        .split("T")[0];
      console.log("start", startDate);
      console.log("end", endDate);
      dispatch(getSleepByRange(startDate, endDate));
    }
  };

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={handleChange}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
}
