import React from 'react'
import Typed from 'react-typed'
import "./intro.scss"

export default function Intro() {

    return (
        // <div className='intro' id='intro'>
        //     {/* <img className='image' src="images/download.jpeg" alt="" /> */}
        //     <div className="blur" style={{ backgroundColor: "#C1F5FF" }}></div>
        //     <div>
        //         <span className='tagline'>Welcome to my Portfolio</span>
        //         {/* <h1>{`Hi I'm Software Engineer`}<span className='wrap'>Web Developer</span></h1> */}
        //         <h1>Hi! I'm a Web Developer</h1>
        //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate saepe nisi nam, commodi officia similique inventore obcaecati dicta sed voluptas?</p>
        //     </div>
        //     <div>
        //         Hello World
        //     </div>
        // </div >

        <div className="intro" id="intro">
            <div className="blur blur1" style={{ backgroundColor: "#C1F5FF" }}></div>
            <div className="blur blur2" style={{ backgroundColor: "rgb(255 193 245)" }}></div>
            <div className="col1">
                {/* <span className="greet">Welcome to my Portfolio</span> */}
                <div data-aos="zoom-in" data-aos-anchor=".other-element" className="greet">Welcome to my Portfolio</div>
                <h1 data-aos="slide-down">Hi! I'm Akash Rathod</h1>
                <h3>
                    <Typed
                        strings={[
                            "Web Developer",
                            "Student",
                            "Software Engineer",
                        ]}
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                    />
                </h3>
                <p>
                    <Typed
                        strings={[
                            "An Enthusiastic software engineer, ready to explore new technologies. I am passionate about coding and proficient in web development.",
                        ]}
                        typeSpeed={50}
                        backSpeed={100}
                    />
                </p>
                <a href="#skills">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
            <div className="col2">
                <img className='image' src="assets/smartboy.png" alt="" />
            </div>
        </div>
    )
}
