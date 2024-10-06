import './contact.css'
import Heading from './heading'
function Contact() {
    return (
        <div className='root-contact'>
            <div className='contact global-max-width'>
                <div className='left-contact'>
                    <Heading heading={"Contact Me"}/>
                    <h5>Let's Work Together</h5>
                    <p>I’m a passionate front-end developer with expertise in HTML, CSS, JavaScript, React.js, and Next.js, eager to bring innovative and responsive designs to life.
                        My goal is to collaborate on cutting-edge projects that demand precision and creativity, ensuring top-notch user experiences.
                        Let’s connect and build impactful digital solutions together—your vision, executed with excellence.</p>
                    <div className='icon-email'>
                        <p>PranshuKhare67704@gmail.com</p>
                    </div>
                    <div className='icon-number'>
                        <p>7071567279</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;