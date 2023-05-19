import Comment from "./Comment";
import Button
 from "./Button";
import { useState } from "react";
const CommentView = (props) => {

    const [commentsToDisplay, updateCommentsToDisplay] = useState(2)

    return (
        <div className="comment-view">
            {   

                props.comments.slice(0, commentsToDisplay).map((comment) => (
                    <Comment 
                        id={comment.id}
                        name={comment.name} 
                        text={comment.text} 
                        reactions={comment.reactions} 
                        commentHook={props.commentHook} 
                        comments={props.comments}
                    />
                ))
            }

            {commentsToDisplay < props.comments.length ?
            <Button type="load-button" text="Näytä lisää..." onClick={() => {updateCommentsToDisplay(commentsToDisplay + 2)}}/>
            : ''}
        </div>
    );
}

export default CommentView;