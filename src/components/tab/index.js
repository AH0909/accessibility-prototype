import React from 'react';

// tab information including aria role
const Tab = ({ children, index, isSelected }) => {
    return (
    <div id={`tabpanel_${index}`}
        key={`tabpanel_${index}`}
        name={`tabpanel_${index}`}
        role="tabpanel"
        aria-labelledby={`tab_${index}`}
        aria-hidden={!isSelected()}
    >{children}</div>
    )
}

export default Tab
