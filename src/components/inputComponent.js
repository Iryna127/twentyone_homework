import React, { useState, useContext } from 'react';
import '../css/inputComponents.css';
import { ThemeContext } from '../providers/themeProvider';
const InputEdit = (props) => {
  const [value, setValue] = useState(props.text);
  const themeCtx = useContext(ThemeContext);
  const onType = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };
  return (
    <>
      <div className='input-block'>
        <input
          className={themeCtx.theme ? 'input-light' : 'input-dark'}
          type="text"
          value={value}
          onChange={onType}
        ></input>
        {props.isNotValid && <p>This field is invalid!</p>}
        {props.isNotValidSecondInput && <p>This field is invalid!</p>}
      </div>
    </>
  );
};
export default InputEdit;
