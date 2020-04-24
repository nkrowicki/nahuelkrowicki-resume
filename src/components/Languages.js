import React from 'react'

const Workflow = ({info}) => {
    return (
        <>
            <li>
                <i className="fa-li fa fa-book text-warning"></i>
              {info}
            </li>
        </>
    );
}

export default Workflow;