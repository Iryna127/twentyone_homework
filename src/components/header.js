import InsideComponent from './maininside';
import '../css/header.css';
import { useContext } from 'react';
import { ThemeContext } from '../providers/themeProvider';
const HeaderComponent = (props) => {
  const themeCtx = useContext(ThemeContext);

  const handlerThemeChange = () => {
    themeCtx.changeTheme();   
  };

  const handlerThemeChangeLight = () => {
    themeCtx.changeThemeLight();    
  };

  return (
    <>
      <div className="header-block">
        <button onClick={handlerThemeChange} className="button">
          Dark
        </button>
        <button onClick={handlerThemeChangeLight}>Light</button>
        <InsideComponent />
      </div>
    </>
  );
};
export default HeaderComponent;
