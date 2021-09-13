import React from 'react'

import dataFormations from '../datas/Formations'
import Formations from './Formations'
import dataExperiences from '../datas/Experiences'
import Experiences from './Experiences'

import './FormationsExperiences.css'

function FormationsExperiences() {
    return (
        <>
            <Formations datas={dataFormations} />
            <Experiences datas={dataExperiences} />
        </>
    )
}

export default FormationsExperiences;
