import React from 'react'

const Workflow = ({info}) => {
    return (
        <>
            <li>
                <i className="fa-li fa fa-check"></i>
              {info}
            </li>
        </>
    );
}

export default Workflow;