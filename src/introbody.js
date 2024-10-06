import React, { useEffect, useState } from 'react';

import Project from './project'
import Skills from './skills'
import Heading from './heading'
import Services from './services'
import myImage from './WhatsApp Image 2024-07-10 at 12.05.35 PM (1).jpeg';
import gameImage from './game-7217379_1280.png';
import counterImage from './ControlPanel.jpg';
import todolist from './checklist-1295319_1280.png'
import './introbody.css'
function Introbody() {
    const [skillWidths, setSkillWidths] = useState({
        HTML: 0,
        CSS: 0,
        JavaScript: 0,
        ReactJs: 0,
        NextJs: 0,
        Git: 0,
    });

    // Step 3: Update state with useEffect
    useEffect(() => {
        setTimeout(() => {
            setSkillWidths({
                HTML: 90,
                CSS: 80,
                JavaScript: 85,
                ReactJs: 75,
                NextJs: 70,
                Git: 65,
            });
        }, 100); // Set a small delay to trigger the transition
    }, []);


    const gameName = "Tic-Tac-Toe";

    return (
        <div>
            <div className='root-home'>
                <section className='home global-max-width'>
                    <div className="mainbody">
                        <div className='intropara'>

                            <p> <h3 className='hello'> Hello, It's Me </h3>
                                <h1 className='pranshu'>Pranshu Khare</h1>
                                <h3 className='frontend-developer'>and I am a <span className='frontend'> Front-end Developer </span></h3>
                                <p className='insidepara'>I bridge the gap between creativity and code. As a front-end <br />developer skilled in JavaScript, React.js, Next.js, and CSS, I design
                                    and build responsive, user-friendly web experiences.
                                </p>
                            </p>
                        </div>
                        <img src={myImage} alt="Pranshu dev" className='pranshuimage'></img>
                    </div>
                </section>
            </div>

            <div className='root-about'>

                <section className='global-max-width'>
                    <Heading heading={"About Me"}/>
                    <div className='about'>
                        <img src={myImage} alt="Pranshu dev" className='pranshuimage1'></img>
                        <div className='aboutheadpara'>
                            <p className='aboutpara'>Hi, I'm Pranshu, a dynamic and dedicated front-end developer from India with a passion for crafting seamless user experiences. I hold a Master's degree
                                in Computer Application (MCA) from Dr. APJ Abdul Kalam Technical University (AKTU), where I honed my expertise in HTML, CSS, JavaScript, React.js, and Next.js. My professional
                                journey includes a pivotal role as an Underwriting Analyst at Xceedance, collaborating with Berkshire Hathaway Specialty Insurance (BHSI), which sharpened my analytical and
                                problem-solving skills. <br /><br />
                                Balancing rigorous academics and night shift jobs, I developed exceptional time management, multitasking, and adaptability skills. I specialize in creating responsive,
                                performance-optimized, and scalable web applications that prioritize user experience and accessibility. My blend of technical proficiency, attention to detail, and commitment
                                to continuous learning makes me a valuable asset to any innovative front-end development team.<br /><br />
                                Let's connect and collaborate to build cutting-edge, user-centric web solutions that stand out in today's competitive digital landscape!
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className='root-service'>
                <section className='service-section global-max-width'>
                    <div className='servicebackground'>
                        <Heading heading={"My Services"} />
                        <div className='services'>
                            <Services serviceheading={"Responsive Web Design"} discription={"Crafting responsive web designs that adapt flawlessly across all devices, I specialize in creating dynamic user experiences that captivate and retain audiences. With meticulous attention to detail and innovative design solutions, I ensure websites are not just visually stunning but also perform optimally on every screen size.Harnessing the power of HTML, CSS, and JavaScript frameworks like React.js, I deliver seamless navigation and interaction, elevating user satisfaction and engagement."} />
                            <Services serviceheading={"User Interface (UI) Design"} discription={"My expertise in UI design transforms complex concepts into intuitive interfaces that resonate with users globally. Leveraging cutting-edge design principles and creativity,I create visually compelling layouts that enhance usability and evoke positive user experiences. Through strategic use of color schemes, typography, and interactive elements,I craft interfaces that not only meet but exceed client expectations. From wireframes to pixel-perfect designs, I prioritize clarity, functionality, and aesthetic appeal, ensuring each interface is a masterpiece of form and function."} />
                            <Services serviceheading={"Front-End Development"} discription={"As a front-end developer, I specialize in transforming ideas into robust, interactive web applications using HTML5, CSS3, and JavaScript frameworks such as React.js and Angular.With a passion for clean, efficient code and user-centric design, I build scalable solutions that drive business growth and innovation. By integrating best practices in coding and design architecture, I ensure websites are not only visually stunning but also optimized for performance and functionality. From concept to deployment, I thrive on delivering exceptional front-end solutions that elevate brands and exceed client objectives."} />
                            <Services serviceheading={"Performance Optimization"} discription={"Optimizing website performance is at the core of my expertise as a front-end developer. Utilizing advanced techniques in code optimization, image compression, and caching strategies I enhance loading speeds and overall site responsiveness. By implementing best-in-class performance metrics and continuous testing, I ensure websites deliver unparalleled user experiences. From reducing bounce rates to improving SEO rankings, my focus on performance optimization translates into tangible business outcomes and customer satisfaction."} />
                            <Services serviceheading={"Accessibility Compliance"} discription={"Committed to inclusivity and accessibility, I integrate WCAG-compliant practices into every aspect of web design and development. By prioritizing accessibility features such as semantic HTML, ARIA roles, and keyboard navigation, I ensure websites are accessible to users of all abilities. Empowered by a deep understanding of accessibility guidelines and user needs, I create inclusive digital experiences that reach a diverse global audience. From initial design concepts to final implementation, accessibility remains a cornerstone of my commitment to quality and user satisfaction."} />
                        </div>
                    </div>
                </section>
            </div>

            <div className='root-skills'>
                <section className='skills global-max-width'>
                    <div>
                        <Heading heading={"Technical Skill"} />
                        {Object.entries(skillWidths).map(([skill, width]) => (
                           <Skills key={skill} skill={skill} width={width}/>
                        ))}
                    </div>
                </section>
            </div>

            <div className='root-projects'>
                <section className='projects global-max-width'>
                    <Heading heading={"My Projects"} />
                    <div className='project-component'>
                        <Project name={gameName} para="The game is played on a grid that's 3 squares by 3 squares. You are X , your friend is O . Players take turns putting their marks in empty squares.
                        The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner." image={gameImage} />

                        <Project name={"ToDo List"} para="a list of all the things that you need to do, information that you want to find out, or things that you need to take somewhere, which you make in order 
                    to ensure that you do not forget anything. " image={todolist} />

                        <Project name={"Counter Component"} para="A Counter is a device which stores (and sometimes displays) the number of times a particular event or process has occurred, 
                        often in relationship to a clock signal. Counters are used in digital electronics for counting purpose, they can count specific event happening in the circuit." image={counterImage} />
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Introbody;