import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../logo.png';

const Header = () => {
    const history = useHistory();
    const handleClick =() => {
        history.push('/home');
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className='d-flex align-items-center justify-content-center mt-3 mb-3'>
                    <div className='logo'>
                        <img src={logo} alt="LogoMakr.com/app" onClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;