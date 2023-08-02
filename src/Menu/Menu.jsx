import React from 'react'
import { useState } from 'react'
import './Menu.css'
import lang from '../lang.json'
import Language from './Language'

function Menu(props) {

    const [menuOpen, setMenuOpen] = useState(false)


    function selectLanguage(lang) {
        setMenuOpen(false)

        props.setSelectedLanguage(lang)
    }

    return (
        <div className='menu'>

            <div className="menuSelect" onClick={e => setMenuOpen(!menuOpen)}>
                <p className='selectedLanguageText'>{props.selectedLanguage}</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="arrow-drop-down">
                        <path id="Vector" d="M5.25 7.5L9 11.25L12.75 7.5H5.25Z" fill="#394A64" />
                    </g>
                </svg>

            </div>

            {
                //<p className="langItem" onClick={e => selectLanguage(item.lang)} key={index}>{item.lang}</p>
                menuOpen &&
                <div className="menuOpen">
                    <div className="menuOpenWrapper">
                        {
                            lang.map((item, index) => (
                                <Language langCode={item.langCode} langName={item.name} countryCode={item.countryCode} key={index} selectedLanguage={props.selectedLanguage} selectLanguage={selectLanguage} />

                            ))
                        }
                    </div>

                </div>
            }

        </div>
    )
}

export default Menu