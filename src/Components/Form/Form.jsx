import React, { useEffect } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

function Form({ setShowForm, selectedLanguage }) {
    useEffect(() => {

        const script = document.createElement('script');
        script.src = 'https://embed.typeform.com/next/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    

    return (
        <div className='formBlock'>
            <div className='formClose'>
                <button onClick={() => setShowForm(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
                </button>
            </div>

            <div className="formContainer">
                {
                    selectedLanguage === 'US'
                        ? <div data-tf-widget="Iu4lG3p5" data-tf-opacity="100" data-tf-iframe-props="title=Morgis LP Host Form EN" data-tf-transitive-search-params data-tf-medium="snippet" style={{ width: '100%', height: '500px' }}></div>
                        : selectedLanguage === 'es'
                            ? <div data-tf-widget="RUuw3fwg" data-tf-opacity="100" data-tf-iframe-props="title=Morgis LP Host Form ES" data-tf-transitive-search-params data-tf-medium="snippet" style={{ width: '100%', height: '500px' }}></div>
                            : <div data-tf-widget="AeMKLcdV" data-tf-opacity="100" data-tf-iframe-props="title=Morgis LP Host Form PT" data-tf-transitive-search-params data-tf-medium="snippet" style={{ width: '100%', height: '500px' }}></div>
                }

            </div>

            <div className="formBottom">
                <p>Never submit passwords or sensitive data through unknown forms. Make sure this form was generated by your company or a trusted company.</p>
                <div className='footerLinks'>
                    <Link to='#'>Report abuse</Link>
                    <p>|</p>
                    <Link to='#'>Terms and Conditions</Link>
                </div>
            </div>
        </div>
    )
}

export default Form;
