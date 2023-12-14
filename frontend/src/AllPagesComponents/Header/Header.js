import React from 'react'
import AppName from './AppName'

import '../Header/Header.css';

function Header({title}) {
    return (
        <header className='header'>
            <div className="header_inner">
                <div className="app_name_wrapper">
                    <AppName>{title}</AppName>
                </div>
                <div className="header_user_wrapper">
                    
                </div>
            </div>
        </header>
    )
}

export default Header