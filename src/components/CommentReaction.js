const CommentReaction = (props) => {
    return (
        <div>
            <span onClick={props.onClick}>{props.addbutton ? '+' : (props.reaction)}</span>
            <span>{props.count}</span>
        </div>
    );
}

export default CommentReaction;