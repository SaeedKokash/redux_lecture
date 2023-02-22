import React from 'react'
import './Home.css'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchAllHero, fetchOneHero } from '../store/actions/heroActions'

function Home() {

    const [name, setName] = useState('')

    const dispatch = useDispatch();
    const { allHero, hero } = useSelector((state) => state.hero);
    // const { hero } = useSelector((state) => state.hero);

    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            {/* <button onClick={() => getData()}>Search</button> */}
            <button onClick={() => fetchOneHero(dispatch, name)}>Search</button>

            <button onClick={() => fetchAllHero(dispatch)}>Get All Heroes</button>

            {hero.length > 0 ?
                hero.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                        </div>
                    )
                })
                : <p>Not Found</p>
            }

            <div className='parent' >
                {allHero &&
                    allHero.map((item, index) => {
                        return (
                            <div key={index} className="hero_card" >
                                <h1>{item.name}</h1>
                                <p>{item.description}</p>
                                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Home