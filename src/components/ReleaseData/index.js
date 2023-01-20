import React from 'react'
import { convertData } from '../../helpers'
import { Container } from './style'

const ReleaseData = ({ date }) => {
    return (

        <Container>
            <span className="release-date">Data de Lançamento: {convertData(date)}</span>
        </Container>

    )
}

export default ReleaseData