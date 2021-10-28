import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Context from '../context/MyContext';
import LOCALES from '../locales/locales';

const LanguageModal = (props) => {
  const { setLangs } = props;
  const { state, dispatch } = useContext(Context);
  return (
    <div
      className="back-shadow"
      role="menu"
      tabIndex="0"
      onKeyDown={ () => setLangs(false) }
      onClick={ () => setLangs(false) }
    >
      <div className="modal">
        {Object.entries(LOCALES).map((locale) => (
          <button
            key={ locale }
            type="button"
            disabled={ state.locale === locale[1] }
            onClick={ () => {
              setLangs(false);
              dispatch({ type: 'setLocale', locale: locale[1] });
            } }
            className="lang-button"
          >
            <FormattedMessage id={ `langs.${locale[0]}` } />
          </button>
        ))}
      </div>
    </div>
  );
};

LanguageModal.propTypes = {
  setLangs: PropTypes.bool.isRequired,
};

export default LanguageModal;
