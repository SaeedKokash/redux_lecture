import React from 'react'
import { useSelector } from 'react-redux'

function Test() {

    const { hero } = useSelector((state) => state.hero);
    return (
        <div>
            {hero.length > 0 ?
                hero.map((item, index) => {
                    return (
                        <div>
                            <h1> I am in Test</h1>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })
                : <p>Im not in Test</p>
            }


        </div>
    )
}

export default Test