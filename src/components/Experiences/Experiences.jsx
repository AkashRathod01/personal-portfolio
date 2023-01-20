import React from 'react'
import "./experiences.scss"
import { CalendarToday } from '@material-ui/icons'

export default function Experiences() {
    return (
        <div className='experiences' id='experiences'>
            <div className="row1">
                <p>Experiences gained</p>
                <h2>My Experience</h2>
            </div>
            <div className="row2">
                <div className="education">
                    <h3 className="title">Education</h3>
                    <div className="row">
                        <div className="timeline-box">
                            <div className="timeline">
                                {/* Timeline item */}
                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-date">
                                        <CalendarToday className='calendarIcon' />2018 - 2020
                                    </h3>
                                    <h3 className='timeline-heading'>Sathaye College</h3>
                                    <h4 className="timeline-title">Science</h4>
                                    <p className="timeline-text">Studied from 2018 - 2020. Got a really good exposure in chemical reactions, physics, biology and mathematical calculations. Deep Understanding of how the world around us works.</p>
                                </div>
                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-date">
                                        <CalendarToday className='calendarIcon' /> 2020 - 2024
                                    </h3>
                                    <h3 className='timeline-heading'>Karunya University</h3>
                                    <h4 className="timeline-title title-last">Btech Computer Science and Engineering</h4>
                                    <p className="timeline-text">Studying from 2020 - 2024. Getting to know about computer standards. How the IOT helps us to make our life easier. Deep Understanding of computer hardware and Software systems, Computer Networking, Coding, Databases, etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience">
                    <h3 className="title">Experience</h3>
                    <div className="row">
                        <div className="timeline-box">
                            <div className="timeline">
                                {/* Timeline item */}
                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-date">
                                        <CalendarToday className='calendarIcon' />Jan 2022 - March 2022
                                    </h3>
                                    <h4 className="timeline-title mob-title">Internshala</h4>
                                    <p className="timeline-text">Good Knowledge of marketing standards and measures. How to promote a particular brands, Advertising, etc and how to deal with marketing.</p>
                                </div>
                                <div className="timeline-item">
                                    <div className="circle-dot"></div>
                                    <h3 className="timeline-date">
                                        <CalendarToday className='calendarIcon' /> May 2022 - Jul 2022
                                    </h3>
                                    <h4 className="timeline-title title-last mob-title">Cisco</h4>
                                    <p className="timeline-text">Get to know how the Networking works. Connection of network through various devices. Knowledge of Networking attacks, vulnerability and dealing with it. Various devices used to protect networking attacks like firewall, etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
