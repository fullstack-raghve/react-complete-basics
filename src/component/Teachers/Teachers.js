import React from 'react'
import people from './data';

let title = <h2>Teachers</h2>
export const Teachers = () => {
    return (
        <div>
            {title}
            <div>
                {
                    people.map((user, index) =>
                        <div className="card" key={index} >
                            <div className = {index % 2 ? 'border1' : 'border2'}>
                            <img src={user.image} alt={user.image} />
                            <h1>{user.name}</h1>
                            <p className="title">{user.job}</p>

                            <p><button>Contact</button></p>
                            </div>
                        </div>

                    )}

            </div>
        </div>
    )
}
