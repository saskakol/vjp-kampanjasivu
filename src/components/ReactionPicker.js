import './component-styles.css'

const ReactionPicker = (props) => {

    const handleReactionSelect = (reaction) => {
        props.setReactions([...props.commentReactions, reaction])
        props.setVisibility(false)
    }

    return (
        <div className={"reaction-picker " + (props.visible ? 'visible' : '')}>
            <span className="reaction-button" onClick={(e) => {handleReactionSelect(e.target.innerHTML)}}>😢</span>
            <span className="reaction-button" onClick={(e) => {handleReactionSelect(e.target.innerHTML)}}>😲</span>
            <span className="reaction-button" onClick={(e) => {handleReactionSelect(e.target.innerHTML)}}>😡</span>
        </div>
    )
}

export default ReactionPicker