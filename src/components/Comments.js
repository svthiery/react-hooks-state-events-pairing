

function Comments({ comments }){
    const allComments = comments.map((comment) => {
        return(
            <div>
                <h5>{comment.user}</h5>  
                <p>{comment.comment}</p>  
            </div>
        )
    })
    
    return(
        <div>
            <h3>Total Comments: {comments.length}</h3>
            {allComments}
        </div>
    );
}

export default Comments;