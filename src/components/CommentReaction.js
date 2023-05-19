import classNames from "classnames";

const CommentReaction = (props) => {
    return (
        <div>
            <span className='comment-reaction'>{props.reaction}</span>
            <span className="reaction-count">{props.count}</span>
        </div>
    );
}

export default CommentReaction;