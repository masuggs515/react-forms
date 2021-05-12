import './Box.css'

const Box = ({ color, height, width, removeBox, id }) => {
    const styles = {
        backgroundColor: color,
        height: height,
        width: width
    }

    const handleRemove = () => {
        removeBox(id)
    }

    return (
        <div className='Box' style={styles}>
            <button className='Box-remove' onClick={handleRemove}>X</button>
        </div>
    )
}

export default Box;