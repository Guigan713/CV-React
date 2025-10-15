import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';

import ImgGuigan from '../images/Guigan-p.jpg'

import './User.css'

// GitLab SVG Icon Component
const GitLabIcon = () => (
    <svg 
        viewBox="0 0 24 24" 
        width="24" 
        height="24" 
        fill="currentColor"
    >
        <path d="M12 21.42l3.684-11.333H8.32L12 21.421zm0 0l-3.684-11.333H1.23L12 21.421zm0 0l3.684-11.333h7.086L12 21.421zM1.23 10.088L.12 13.47a.83.83 0 00.298.93L12 21.42 1.23 10.087zm21.54 0L23.88 13.47a.83.83 0 01-.298.93L12 21.42l10.77-11.333zM22.77 10.088h-7.086L12.644.558a.43.43 0 00-.82 0L8.32 10.087H1.23L4.275 1.13a.43.43 0 01.41-.3h14.63a.43.43 0 01.41.3l3.045 8.957z"/>
    </svg>
);

function User() {
    return (
        <div className="user">
            <img className="user__avatar" src={ImgGuigan} alt="guigan" />
            <h1 className="user__name">Guillaume Lequin</h1>
            <p className="user__profession">Ingénieur DevOps</p>
            <div className="user__infos">
                <p className="user__info"><HomeIcon />3 rue Victor Hugo 71300 Montceau Les Mines</p>
                <p className="user__info"><PhoneIphoneIcon /><a href="tel:+33618086512">0618086512</a></p>
                <p className="user__info"><MailIcon /><a href="mailto:guillaume.lequin713@gmail.com">guillaume.lequin713@gmail.com</a></p>
                <p className="user__info"><GitHubIcon /><a href="https://github.com/Guigan713">GitHub</a></p>
                <p className="user__info"><GitLabIcon /><a href="https://gitlab.com/Guigan713">GitLab</a></p>
            </div>
        </div>
    )
}

export default User;
