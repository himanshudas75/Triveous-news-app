import React, { useContext,useEffect,useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../firebase";
import axios from "axios";
import "./Dashboard.css"
// import "./login.css";
import 'font-awesome/css/font-awesome.min.css';



const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [news, setNews] =useState([]);
  const [Loading,setLoading]=useState(true);
  const [isGridView, setIsGridView] = useState(false);
  const [favorites, setFavorites] = useState([])

  const url="https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=8577027495dea7b9c2038bff73544e8b";
  useEffect(()=>{
    const fetchNews = async () => {
    try{
        let response = await axios.get(url);
        setNews(response.data.articles);
        setLoading(false);
        console.log(response.data.articles);
    }
    catch(error){
        console.log(error);
    }
}
    fetchNews();
}, []);



if (!currentUser) {
  return <Navigate to="/login" />;
}

const handleToggleView = () => {
  setIsGridView((prevIsGridView) => !prevIsGridView);
};

const createSlug = (title) => {
    return title.replace(/\s+/g, "-").toLowerCase();
  };


  const addToFavorites = (news) => {
    setFavorites([...favorites, news])
    console.log("its work?")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg" >
      <a class="navbar-brand text" href="#">News App</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <  ul class="navbar-nav ml-auto">
      <li class="nav-item active">
      <a className=" navbar-brand text ml"onClick={() => firebaseConfig.auth().signOut()}>Logout</a>
      </li>
      </ul>
      </div>

      </nav>
         {Loading? <p>Loading...</p>:(
    <div > 
      <h1 className="Heading">Top Latest News</h1>
      <button onClick={handleToggleView} className="toggle-button btn btn-dark custom">
        {isGridView ?     <i class="fa-solid fa-list fa-2xl" style={{color: "#000000;"}}></i> :<i class="fa-solid fa-grip fa-2xl" style={{color: "#000000;"}}></i>}
      </button>
      <ul id="news" className={`news-list ${isGridView ? "grid-view" : "list-view"}`}>
      
    
      {news.map((article)=>(
          <p>
            <a  href={`/dashboard/${createSlug(article.title)}`}>
            <h3>{article.title}</h3>
            <img src={article.image} alt="Image Not Available"/>
            <p className="desc">{article.description}</p>


            </a>
            <button className="btn btn-dark"onClick={() => addToFavorites(article)}>
            <i class="fa-solid fa-heart"></i>       </button>   </p>
          
          
      ))}
      </ul> 
            </div> ) }
    </div>
  );
};

export default Dashboard;

// fcdf3df48dc5488c86f9e9c0ac8801f6