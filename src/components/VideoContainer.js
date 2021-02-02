import { useState } from "react";
import Comments from "./Comments"

function VideoContainer({ title, views, upvotes, downvotes, createdAt, comments }) {
    const [ hidden, setHidden] = useState(false)
    const [likes, setLikes] = useState(upvotes)
    const [dislikes, setDislikes] = useState(downvotes)
    // console.log(likes)

    function handleLikeClick() {
        let newLikes = likes + 1
        setLikes(newLikes)
    }

    function handleDislikeClick() {
        let newDislikes = dislikes + 1
        setDislikes(newDislikes)
    }

    function toggleHidden(e) {
        if (!hidden) {
            e.target.textContent = "Show Comments";
        } else {
            e.target.textContent = "Hide Comments";
        }
        setHidden(hidden => !hidden);
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>Views: {views} | Uploaded On: {createdAt}</p>
            <button onClick={handleLikeClick}>{ likes } 👍</button>
            <button onClick={handleDislikeClick} >{ dislikes } 👎</button>
            <br/>
            <br/>
            <button onClick={toggleHidden}> Hide Comments</button>
            { hidden ? null : <Comments comments={comments} />}
        </div>
    );
}

export default VideoContainer;