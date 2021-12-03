import React from 'react'
import './brand.css'

import { SiPython, SiDocker, SiKubernetes, SiCsharp, SiPostgresql, SiAtlassian} from 'react-icons/si';

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <SiPython size="2.5rem" color="gray" />
            </div>
            <div>
                <SiCsharp size="2.5rem" color="gray"/>
            </div>
            <div>
                <SiDocker size="2.5rem" color="gray"/>
            </div>
            <div>
                <SiKubernetes size="2.5rem" color="gray"/>
            </div>
            <div>
                <SiPostgresql size="2.5rem" color="gray"/>
            </div>
            <div>
                < SiAtlassian size="2.5rem" color="gray"/>
            </div>

        </div>
    )
}

export default Brand
