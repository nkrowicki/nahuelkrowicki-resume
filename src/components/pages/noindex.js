import React from 'react';
import {useTranslation} from 'react-i18next';
import Layout from '../Layout';

const IndexPage = () => {
  const [t, i18n] = useTranslation();

  return (
    <Layout>
      <div>
        {t('current_language', {language: i18n.language})} <br />
        {t('current_language')} <br />
      </div>


    </Layout>
  );
};

export default IndexPage;




