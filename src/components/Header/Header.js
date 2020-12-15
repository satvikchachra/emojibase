import React from 'react';

const Header = props => {
    return (
        <div className='AppTitle'>
            {props.title}
        </div>
    );
}

export default Header;