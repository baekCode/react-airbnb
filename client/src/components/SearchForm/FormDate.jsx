import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkDate, reset } from '../../modules/date';
import styled from 'styled-components';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const ResetBtn = styled.button`
  position: relative;
  width: 70px;
  padding: 10px 15px;
  font-size: 12px;
  color: #333;
  line-height: 1;
  border-radius: 3px;
  border: 1px solid transparent;
  background: #e7e7e7;
  transition: all 0.3s;
  z-index: 1;
  &:hover {
    border: 1px solid #aaa;
    background: #b9b9b9;
  }
`;
const FormDate = () => {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector(state => state.date);
  const [focus, setFocus] = useState('startDate');
  const handleOnDateChange = date => dispatch(checkDate(date));
  const resetButton = () => (
    <ResetBtn
      onClick={() => {
        setFocus('startDate');
        return dispatch(reset());
      }}
    >
      초기화
    </ResetBtn>
  );
  return (
    <div>
      <DateRangePicker
        startDatePlaceholderText=""
        startDate={startDate}
        onDatesChange={handleOnDateChange}
        endDatePlaceholderText=""
        endDate={endDate}
        numberOfMonths={2}
        showClearDates={false}
        focusedInput={focus}
        onFocusChange={focus => setFocus(focus)}
        startDateId="startDateMookh"
        endDateId="endDateMookh"
        minimumNights={0}
        renderCalendarInfo={resetButton}
        hideKeyboardShortcutsPanel
        readOnly
        keepOpenOnDateSelect
      />
    </div>
  );
};

export default FormDate;
