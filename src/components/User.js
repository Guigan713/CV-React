import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailIcon from '@material-ui/icons/Mail';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';

import ImgGuigan from '../images/Guigan-p.jpg'

import './User.css'

function User() {
    return (
        <div className="user">
            <img className="user__avatar" src={ImgGuigan} alt="guigan" />
            <h1 className="user__name">Guillaume Lequin</h1>
            <p className="user__profession">Développeur Web</p>
            <div className="user__infos">
                <p className="user__info"><HomeIcon />3 rue Victor Hugo 71300 Montceau Les Mines</p>
                <p className="user__info"><PhoneIphoneIcon /><a href="tel:+33618086512">0618086512</a></p>
                <p className="user__info"><MailIcon /><a href="mailto:guillaume.lequin713@gmail.com">guillaume.lequin713@gmail.com</a></p>
                <p className="user__info"><GitHubIcon /><a href="https://github.com/Guigan713">GitHub</a></p>
                <p className="user__info"><EventIcon />26/01/1989</p>
                <p className="user__info"><LocationOnIcon />Le Creusot</p>
            </div>
        </div>
    )
}

export default User;
