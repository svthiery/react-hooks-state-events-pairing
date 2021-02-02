import video from "../data/video.js";
import VideoContainer from "./VideoContainer";
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);

  return (
    <div>
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
    </div>
    <div>
      <VideoContainer title={video.title} views={video.views} upvotes={video.upvotes} downvotes={video.downvotes} createdAt={video.createdAt}/>
    </div>
    <div>
      <Comments hideComments= comments={video.comments}/>
    </div>
    </div>
  );
}

export default App;
