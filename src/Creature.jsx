function Creature(props) {
    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated',
        cursor: 'pointer',
        userSelect: 'none'
    };

    return (
        <div style={style} onClick={props.onWake}>
            <img 
            src={props.isAwake ? props.awakeImageUrl : props.sleepImageUrl}
            alt={props.name}
            width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
