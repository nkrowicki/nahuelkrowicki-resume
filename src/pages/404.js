import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <header className="major">
          <h2>
            Page not found - Página no encontrada
            <br />
            Not a valid URL - No es una URL válida
          </h2>
        </header>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
