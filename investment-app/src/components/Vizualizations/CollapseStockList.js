import React from 'react';
import useCollapse from 'react-collapsed';
import PositionsPanelData from './PositionsPanelData';

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                <PositionsPanelData/>
            </div>
        </div>
    </div>
    );
}

export default Collapsible;