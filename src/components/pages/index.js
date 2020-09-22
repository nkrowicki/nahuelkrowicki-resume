import React from 'react';
import Layout from '../Layout';
import Sidebar from '../Sidebar';
import config from '../../../config';
import ExperienceOrEducation from '../ExperienceOrEducation';

import Portfolio from '../portfolio/Portfolio';
import WorkFlow from '../Workflow';
import Languages from '../Languages';

import useGetTranslation from '../../hooks/useGetTranslation';

const IndexPage = () => {

  const data = useGetTranslation();

  return (
    <Layout>
      <Sidebar />
      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div className="w-100">
            <h1 className="mb-0">
              {config.firstName}
              <p className="text-primary">{config.lastName}</p>
            </h1>
            <div className="subheading mb-5">
              {config.address} {' '} {config.phone} {' - '}
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </div>
            <p className="lead mb-5">
              <div>{data.summary1}</div>
              <div>{data.summary2}</div>

            </p>
            <div className="social-icons">
              {config.socialLinks.map(social => {
                const { icon, url } = social;
                return (
                  <a key={url} href={url}>
                    <i className={`fab ${icon}`}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </section>


        <Portfolio />
        
        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
          <div className="w-100">
            <h2 className="mb-5">{data.skills.title}</h2>

            <div className="subheading mb-3">
              {data.skills.subheading1}
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
              {/* <li className="list-inline-item">
                <i className="fab fa-angular"></i>
              </li> */}
              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-less"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-wordpress"></i>
              </li>
              {/* <li className="list-inline-item">
                <i className="fab fa-gulp"></i>
              </li> */}
              {/* <li className="list-inline-item">
                <i className="fab fa-grunt"></i>
              </li> */}
              <li className="list-inline-item">
                <i className="fab fa-npm"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-linux"></i>
              </li>
            </ul>

            <div className="subheading mb-3">{data.skills.subheading2}</div>
            <ul className="fa-ul mb-0">

              {data.skills.workflows.map(workflow => (
                <WorkFlow key={workflow} info={workflow} />
              ))}

            </ul>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="experience"
        >
          <div className="w-100">
            <h2 className="mb-5">{data.experience.title}</h2>

            {data.experience.experiences.map(exp => (
              <ExperienceOrEducation key={exp.title} info={exp} />
            ))}

          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="trainings"
        >
          <div className="w-100">
            <h2 className="mb-5">{data.training.title}</h2>

            {data.training.trainings.map(training => (
              <ExperienceOrEducation key={training.title} info={training} />
            ))}

          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div className="w-100">
            <h2 className="mb-5">{data.education.title}</h2>

            {data.education.educations.map(edu => (
              <ExperienceOrEducation key={edu.title} info={edu} />
            ))}

          </div>
        </section>


        <hr className="m-0" />

        {/* <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="interests"
        >
          <div className="w-100">
            <h2 className="mb-5">{data.interests.title}</h2>
            <p>
              {data.interests.description1}
            </p>
            <p className="mb-0">
              {data.interests.description2}
            </p>
          </div>
        </section>

        <hr className="m-0" /> */}

        {/* <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="hobbies"
        >
          <div className="w-100">
            <h2 className="mb-5">{data.hobbies.title}</h2>
            <p>
              {data.hobbies.description1}
            </p>
            <p className="mb-0">
              {data.hobbies.description2}
            </p>
          </div>
        </section> */}

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="languages"
        >
          <div className="w-100">
            <h2 className="mb-5">{data.languages.title}</h2>

            <ul className="fa-ul mb-0">

              {data.languages.languages.map(lang => (
                <Languages key={lang} info={lang} />
              ))}

            </ul>

          </div>
        </section>

        {/* <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="awards"
        >
          <div className="w-100">
            <h2 className="mb-5">{Awards &amp; Certifications}</h2>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
              Mobile Web Specialist - Google Certification
            </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2009
            </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - University of Colorado Boulder - Adobe Creative Jam 2008
              (UI Design Category)
            </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li>
            </ul>
          </div>
        </section> */}
        
      </div>
    </Layout>
  );
};

export default IndexPage;