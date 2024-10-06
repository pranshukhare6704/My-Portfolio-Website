
import './project.css'

function Project(props) {
    const {name, para, image} = props
    return (
        <div>
            <div className='twogameImages'>
                <div>
                    <img src={image} alt="tic-tac-toe" className='gameimage1'></img>
                    <div className='name-para'>
                        <h4>{name}</h4>
                        <p>{para}</p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Project;