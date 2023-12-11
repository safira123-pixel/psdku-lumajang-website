import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import IconId from '../components/Flag/IconId'
import IconEn from "../components/Flag/IconEn"


class GoogleTranslate extends PureComponent {
  state = {
    init: false,
  };

  googleTranslateElementInit = () => {
    this.translateInstance = new window.google.translate.TranslateElement(
      {
        pageLanguage: 'id',
        includedLanguages: 'en, id',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        disableAutoTranslation: true, // Only translate when needed, to avoid conflict with React.js
      },
      'google_translate_element'
    );
  };

  handleScriptInsert = () => {
    this.setState({ init: true }, () => {
      window.googleTranslateElementInit = this.googleTranslateElementInit;

      const newScript = document.createElement('script');
      newScript.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      this.refContainer.appendChild(newScript);
    });
  };

  render() {
    const { init } = this.state;
    if (!init) {
      return (
        <Button
          variant="outlined"
          size="small"
          onClick={this.handleScriptInsert}
        >
         <IconEn />
         <IconId />
        </Button>
      );
    }

    return (
      <div ref={container => (this.refContainer = container)}>
        <div id="google_translate_element" />
      </div>
    );
  }
}

export default GoogleTranslate;