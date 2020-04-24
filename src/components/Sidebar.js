import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';
import { Link } from 'gatsby';

import avatar from '../assets/images/avatar.png';
import config from '../../config';

export class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.lang = typeof window !== 'undefined' ? window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') : '';

    this.state = {
      tabs: [
        {
          content: this.lang === 'es' ? 'Acerca' : 'About',
          href: 'about'
        },
        {
          content: this.lang === 'es' ? 'Habilidades' : 'Skills',
          href: 'skills'
        },
        {
          content: this.lang === 'es' ? 'Experiencia' : 'Experience',
          href: 'experience'
        },
        {
          content: this.lang === 'es' ? 'Cursos' : 'Trainings',
          href: 'trainings'
        },
        {
          content: this.lang === 'es' ? 'Educación' : 'Education',
          href: 'education'
        },
        // {
        //   content: this.lang === 'es' ? 'Intereses' : 'Interests',
        //   href: 'interests'
        // },
        // {
        //   content: 'Hobbies',
        //   href: 'hobbies'
        // },
        {
          content: this.lang === 'es' ? 'Idiomas' : 'Languages',
          href: 'languages'
        },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    
    const lang = typeof window !== 'undefined' ? window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') : '';

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </a>
        <span className="navbar-brand d-none d-lg-block">
          {
            lang === 'en' ?
              (<Link className="text-white" to={'/es'}>Spanish</Link>) :
              (<Link className="text-white" to={'/en'}>English</Link>)
          }

        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >

            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
