import React from 'react';

function IconItem({icon, children, size = ''}) {
    return (
        <div className="icon-item w-90">
            <i className={`fa fa-${icon} fa-${size}`}></i>
            {children}
        </div>
    );
}

export default IconItem;