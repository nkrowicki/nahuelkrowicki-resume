import React from 'react'

const ExperienceOrEducation = ({info}) => {
    return (
        <>
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                    <h3 className="mb-0">{info.title}</h3>
                    <div className="subheading mb-3">{info.subHeading}</div>
                    <p>
                        {info.description}
              </p>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">{info.dateSince} - {info.dateEnd}</span>
                </div>
            </div>
        </>
    );
}

export default ExperienceOrEducation;