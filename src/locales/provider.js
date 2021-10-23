import React, { Fragment, useContext } from 'react';
import { IntlProvider } from 'react-intl';
import flatten from 'flat';
import PropTypes from 'prop-types';
import Context from '../context/MyContext';
import locales from './locales';
import messages from './messages';

const Provider = ({ children, locale }) => {
  const { language } = useContext(Context);
  return (
    <IntlProvider
      locale={ language }
      textComponent={ Fragment }
      messages={ flatten(messages[locale]) }
    >
      {children}
    </IntlProvider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string,
};

Provider.defaultProps = {
  locale: locales.portuguese,
};

export default Provider;
