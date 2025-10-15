import React from 'react'

function Certifications(props) {
    return (
        <div className="cursus certifications">
            <h2>Certifications</h2>
            <div className="certifications-list">
                {props.datas.map((data) => (
                    <div key={data.id} className="certification-item">
                        <div className="certification-bullet"></div>
                        <p className="certification-title">{data.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certifications
