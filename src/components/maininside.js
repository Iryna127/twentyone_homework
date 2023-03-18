import React, { useState, useContext } from 'react';
import InputEdit from './inputComponent';
import '../css/maininside.css';
import { MyContext } from '../index';
import { ThemeContext } from '../providers/themeProvider';

function ValueContecxt() {
  const myValue = useContext(MyContext);
  const themeCtx = useContext(ThemeContext);
  if (themeCtx.theme) {
    return <div>{myValue.valueLight}</div>;
  } else {
    return <div>{myValue.valueNight}</div>;
  }
}

const InsideComponent = () => {
  const themeCtx = useContext(ThemeContext);
  /*  const valueCtx = useContext(ThemeContext); */
  const [isFieldInvalid, setisFieldInvalid1] = useState(false);
  const [isNotValidSecondInput, setisFieldInvalidTwo] = useState(false);

  const handleCustomeChangeFirst = (value) => {
    !isNaN(value) ? setisFieldInvalid1(false) : setisFieldInvalid1(true);
  };
  const handleCustomeChangeSecond = (value) => {
    !isNaN(value) ? setisFieldInvalidTwo(false) : setisFieldInvalidTwo(true);
  };
  return (
    <>
      <div className={themeCtx.theme ? 'div-light' : 'div-header'}>
        <div className="wrapper">
          <div className="input-block">
            <InputEdit
              text={'Enter the numbers'}
              onChange={handleCustomeChangeFirst}
              isNotValid={isFieldInvalid}
            />
            <InputEdit
              text={'Enter the numbers'}
              onChange={handleCustomeChangeSecond}
              isNotValid={isNotValidSecondInput}
            />
          </div>

          <div className="indicator">
            {' '}
            <ValueContecxt />
          </div>
        </div>
      </div>
    </>
  );
};
export default InsideComponent;
