import React from 'react';

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'cv', 'contact'].map((item, index) => (
                <a href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#088a92' } : {}}
                />
            ))}
        </div>
    )
};


export default NavigationDots;