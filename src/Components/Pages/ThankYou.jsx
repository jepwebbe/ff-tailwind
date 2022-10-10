import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
    return (
        <section>
            <h2>Tak for din besked!</h2>
            <p>Den vil aldrig blive læst!</p>
            <button><Link to="/">Gå tilbage til forsiden</Link></button>
        </section>

    )
}

export default ThankYou