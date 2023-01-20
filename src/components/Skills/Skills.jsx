import React from 'react'
import "./skills.scss"
import { VerifiedUser } from '@material-ui/icons'

export default function Skills() {
    return (
        <div className='skills' id='skills'>
            <div className="row1">
                <p>What Skills I have</p>
                <h2>My Skills</h2>
            </div>

            <div className="row2">
                <div className="skillsContainer programmingLanguage">
                    <h3>Programming Languages</h3>
                    <div className="content">
                        <article className="details">
                            <VerifiedUser className='icon' />
                            <span>C</span><br />
                            <small>Experienced</small>
                        </article>
                        <article className="details">
                            <VerifiedUser className='icon' />
                            <span>C++</span><br />
                            <small>Experienced</small>
                        </article>
                        <article className="details">
                            <VerifiedUser className='icon' />
                            <span>Java</span><br />
                            <small>beginner</small>
                        </article>
                        <article className="details">
                            <VerifiedUser className='icon' />
                            <span>Python</span><br />
                            <small>Intermediate</small>
                        </article>
                        <article className="details">
                            <VerifiedUser className='icon' />
                            <span>Javascript</span><br />
                            <small>Intermediate</small>
                        </article>
                    </div>
                </div>
                <div className="skillsContainer webDevelopment">
                    <h3>Web Development</h3>
                    <div className="content">
                        <article className="details">
                            <VerifiedUser className='icon' />
                            <span>Html</span><br />
                            <small>Experienced</small>
                        </article>
                        <article className="details">
                            <VerifiedUser className='icon' />
                            <span>Css</span><br />
                            <small>Experienced</small>
                        </article>
                        <article className="details">
                            <VerifiedUser className='icon' />
                            <span>Javascript</span><br />
                            <small>Intermediate</small>
                        </article>
                        <article className="details">
                            <VerifiedUser className='icon' />
                            <span>Jquery</span><br />
                            <small>Experienced</small>
                        </article>
                        <article className="details">
                            <VerifiedUser className='icon' />
                            <span>Angular</span><br />
                            <small>Intermediate</small>
                        </article>
                        <article className="details">
                            <VerifiedUser className='icon' />
                            <span>React Js</span><br />
                            <small>Intermediate</small>
                        </article>
                        {/* <article className="details">
                            <VerifiedUser className='icon' />
                            <span>Mongo db</span><br />
                            <small>Experienced</small>
                        </article> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


// Skills
// - Programming languages
//     C, C++, Java, Python

// - Web Development
//     Html, Css, Javascript, Jquery, Angular, React, Mongo db