import { useState } from "react";

function VideoContainer({ title, views, upvotes, downvotes, createdAt }) {

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

    return (
        <div>
            <h1>{title}</h1>
            <p>Views: {views} | Uploaded On: {createdAt}</p>
            <button onClick={handleLikeClick}>{ likes } 👍</button>
            <button onClick={handleDislikeClick} >{ dislikes } 👎</button>
            <br/>
            <br/>
            <button>Hide Comments</button>
            <Comments hideOrNot={boolean} />
        </div>
    );
}

export default VideoContainer;