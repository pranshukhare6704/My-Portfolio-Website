function Skills({ skill, width }) {
    return (
        <div>
            <div key={skill}>
                <h4>{skill}</h4>
                <div className='skillbar' data-percentage={`${width}%`} style={{ '--width': `${width}%` }}>
                    <div className="skillbar__fill"></div>
                    {/* Display percentage number above the fill */}
                    <span className='skill-percentage'>{`${width}%`}</span>
                </div>
            </div>
        </div>
    )
}
export default Skills;