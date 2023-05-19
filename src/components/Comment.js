import { useEffect, useState } from "react";
import CommentReaction from "./CommentReaction";
import ReactionPicker from "./ReactionPicker";

const Comment = (props) => {
    
    const [reactions, setReactions] = useState(props.reactions);

    // Pass the updated reaction state upwards
    useEffect(() => {

        let indexFound = props.comments.findIndex((i) => i.id === props.id);

        const updatedComment = {
            id: props.id,
            name: props.name,
            text: props.text,
            reactions: reactions
        }

        let newCommentState  = [...props.comments]
        newCommentState.splice(indexFound, 1, updatedComment)
        props.commentHook(newCommentState)

    }, [reactions]);

    return ( 
        <div className="comment">
            <span className="item-title comment-name">{props.name}</span>
            <div className="comment-body">
                <p className="body-text">{props.text}</p>
                <div className="comment-reactions">
                    {
                        // Get unique reactions
                        reactions.filter((value, index, array) => {
                            return array.indexOf(value) === index;
                        })
                        .map((i) => {
                            // For each unique reaction, create CommentReaction and calculate count
                            return <CommentReaction reaction={i} count={reactions.filter(x => x === i).length}/>;
                        })
                    }

                    {/* Create ReactionPicker and button to add reactions */}
                    <div className="break"></div>
                    <ReactionPicker commentReactions={reactions} setReactions={setReactions}/>
                </div>
            </div>
        </div>
    );
}

export default Comment;