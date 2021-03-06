import firstImage from "../stockphotos/ladylaptop.jpeg";

import "./homepage.css";

const Home = () => {
  return (
    <div>
      <div className="homeSplash fade-in">
        <img src={firstImage} className="frontImage" alt="lady on laptop"></img>
        
        <div className="frontText"><span className="homeHeading">Databases have never been so fun.</span> <br />
        <p>mploy frees HR to perform the big-picture projects that make a difference. Businesses can streamline tedious database managment processes and improve their employee experience by moving away from paper and spreadsheets and into our intuitive, web-based software.</p>
        <a href="/register" className="topButton">Let's Get Started</a>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
