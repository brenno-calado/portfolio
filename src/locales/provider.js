import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import locales from './locales';
import messages from './messages';

const Provider = ({ children, locale = locales.portuguese }) => (
  <IntlProvider
    locale={ locale }
    textComponent={ Fragment }
    messages={ messages[locale] }
  >
    {children}
  </IntlProvider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired,
};

export default Provider;
