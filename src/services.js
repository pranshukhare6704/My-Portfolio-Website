import './services.css'

function Services(props) {
    const{serviceheading, discription} = props;
    return (
        <div>
            <div className='serviceone'>
                <h3 className='serviceheading'>{serviceheading}</h3>
                <p className='servicebody'>{discription}
                </p>
            </div>
        </div>
    )
}
export default Services;

