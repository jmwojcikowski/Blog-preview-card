import imageAvatar from "../assets/images/image-avatar.webp";
import imageArticle from "../assets/images/illustration-article.svg";

function App() {
  return (
    <div className="App">
      
      <div className="roundedDiv">
        
        <div className="articleImg">
          <img src={imageArticle} alt="Opis obrazu"/>
        </div>
        <div className="learning">
          <p>Learning</p>
        </div>
        
        <p>Published 21 Dec 2023</p>
        <h2 className="interactiveElement">HTML & CSS foundations</h2>
        <p className="description">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className="authorInfo">
          <div className="authotImg">
            <img src={imageAvatar} alt="Opis obrazu" />
          </div>
          <p className="authorName">Greg Hooper</p>
        </div>
        </div>
    </div>
  );
}

export default App;
