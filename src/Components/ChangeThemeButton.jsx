import React, {useContext} from 'react';
import moon from '../img/moon.png'
import sun from '../img/sun.png'
import { ThemeContext } from '../App';

const ChangeThemeButton = (props) => {

    const theme = useContext(ThemeContext);
    const changeColorTheme = () =>
    {
        theme === 'dark' ? props.setTheme('light') : props.setTheme('dark')
        props.setLoading(true)
        setTimeout(function () {
            props.setLoading(false)
        }, 400)


    }
    return (

        <div className="color_button" onClick={() => changeColorTheme()}>

            {
                theme === 'dark' ? <img src={moon} alt={'moon'} />
                :  <img src={sun} alt={'sun'} />
            }

        </div>

    );
};

export default ChangeThemeButton;