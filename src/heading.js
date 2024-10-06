import './heading.css'
function Heading(prop){

    const heading = prop.heading;
    return(
        <div>
            <h2 className='heading'>{heading}</h2>
        </div>
    )
}
export default Heading;