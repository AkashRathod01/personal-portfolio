import React from 'react'
import "./projects.scss"

export default function Projects() {
    return (
        <div className='projects' id='projects'>
            <div className="row1">
                <p>Projects developed by me</p>
                <h2>My Projects</h2>
            </div>
            <div className="row2">
                <div className="container projects_container">
                    <article className='item'>
                        <div className="item-image">
                            <img src="assets/personal-portfolio.png" alt="" />
                            <div className="h3-background">
                                <h3 className='title'>Personal Portfolio</h3>
                            </div>
                            <p className='badge'>React Js</p>
                            <p className='active-badge badge'>Active</p>
                        </div>
                        <div className="wrap-a">
                            <a href="https://github.com" className='btn btn-outline-primary btn1' target='_blank'>Github</a>
                            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
                        </div>
                    </article>
                    <article className='item'>
                        <div className="item-image">
                            <img src="assets/Hydro-one.png" alt="" />
                            <div className="h3-background">
                                <h3 className='title'>Hydro-One</h3>
                            </div>
                            <p className='badge'>React Js</p>
                        </div>
                        <div className="wrap-a">
                            <a href="https://github.com" className='btn btn-outline-primary btn1' target='_blank'>Github</a>
                            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
                        </div>
                    </article>
                    <article className='item'>
                        <div className="item-image">
                            <img src="assets/learning-curve.png" alt="" />
                            <div className="h3-background">
                                <h3 className='title'>Learning Curve</h3>
                            </div>
                            <p className='badge'>Html | Css | Js</p>
                        </div>
                        <div className="wrap-a">
                            <a href="https://github.com" className='btn btn-outline-primary btn1' target='_blank'>Github</a>
                            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
                        </div>
                    </article>
                    <article className='item'>
                        <div className="item-image">
                            <img src="assets/Hydro-one.png" alt="" />
                            <div className="h3-background">
                                <h3 className='title'>Hydro-One</h3>
                            </div>
                            <p className='badge'>React Js</p>
                        </div>
                        <div className="wrap-a">
                            <a href="https://github.com" className='btn btn-outline-primary btn1' target='_blank'>Github</a>
                            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}
