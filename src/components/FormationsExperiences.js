import React from 'react'

import dataFormations from '../datas/Formations'
import Formations from './Formations'
import dataExperiences from '../datas/Experiences'
import Experiences from './Experiences'
import dataCertifications from '../datas/Certifications'
import Certifications from './Certifications'

import './FormationsExperiences.css'

function FormationsExperiences() {
    return (
        <>
            <Experiences datas={dataExperiences} />
            <Formations datas={dataFormations} />
            <Certifications datas={dataCertifications} />
        </>
    )
}

export default FormationsExperiences;
