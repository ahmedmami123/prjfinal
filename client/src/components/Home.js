import React, { useEffect, useState } from "react";
import "./Home.css";

import Modal from "./Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Idea from "./Idea";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import CardIdeas from "./CardIdeas";
function Home({ setnav, setpp, setnavbardash,ping,setPing }) {
  useEffect(() => {
    setnav("");
    setpp("");
    setnavbardash("");
  }, []);

  const [durable, setDurable] = useState([
    {
      img: "img/family.svg",
      titre: "1 NO POVERTY",
      imgg: "modalimg/POVERTY.jpg",
      color: "color1",
    },
    {
      img: "img/zero-hunger.svg",
      titre: "2 Zero Hunger",
      imgg: "modalimg/hunger.jpg",
    },
    {
      img: "img/good-health.svg",
      titre: "3 Good Health and well being",
      imgg: "modalimg/goodhealth.jpg",
    },
    {
      img: "img/Quality-education.svg",
      titre: "4 Quality education",
      imgg: "modalimg/education.jpg",
    },
    {
      img: "img/gender.svg",
      titre: "5 Gender equality",
      imgg: "modalimg/gender.png",
    },
    {
      img: "img/water.svg",
      titre: "6 Clean water and sanitation",
      imgg: "modalimg/water.jpg",
    },
    {
      img: "img/ENERGY.svg",
      titre: "7 AFFORDABLE AND CLEAN ENERGY",
      imgg: "modalimg/energy.jpg",
    },
    {
      img: "img/work.svg",
      titre: "8 DECENT WORK AND ECONOMIC GROWTH",
      imgg: "modalimg/ico.jpg",
    },
    {
      img: "img/work.svg",
      titre: "9 INDUSTRY, INNOVATION AND INFRASTRUCTURE",
      imgg: "modalimg/indus.jpg",
    },
    {
      img: "img/equality.svg",
      titre: "10 REDUCED INEQUALITIES",
      imgg: "modalimg/reduce.jpg",
    },
    {
      img: "img/building.svg",
      titre: "11 SUSTAINABLE CITIES AND COMMUNITIES",
      imgg: "modalimg/cites.jpg",
    },
    {
      img: "img/infinity.svg",
      titre: "12 RESPONSIBLE CONSUMPTION AND PRODUCTION",
      imgg: "modalimg/patterns.jpg",
    },
    {
      img: "img/earth.svg",
      titre: "13 CLIMATE ACTION",
      imgg: "modalimg/CLIMATE.jpg",
    },
    {
      img: "img/fish.svg",
      titre: "14 LIFE BELOW WATER",
      imgg: "modalimg/belowwater.jpg",
    },
    {
      img: "img/tree.svg",
      titre: "15 LIFE ON LAND",
      imgg: "modalimg/lifeland.png",
    },
    {
      img: "img/pigeon.svg",
      titre: "16 PEACE, JUSTICE AND STRONG INSTITUTIONS",
      imgg: "modalimg/peace.jpg",
    },
    {
      img: "img/bribe.svg",
      titre: "17 PARTNERSHIPS FOR THE GOALS",
      imgg: "modalimg/partner.jpg",
    },
  ]);

  const [show, setShow] = useState(true);
  const idea = useSelector((state) => state.idea?.ideas);
  const users = useSelector((state) => state?.user?.users);
  const [show1, setshow1] = useState(false);
  const [search1, setsearch] = useState("");
  var showsuc=idea?.findIndex(el=>el.validat==true);
console.log("hj",showsuc)
  return (
    <div className="home">
      <div className="img">
        <img src="banner.jpg"></img>
        <div className="top-banner">
          <h1 class="wrapper">
             All we care About is <span class="typing-demo">being creative.</span>
          </h1>
          {/* <h1>
            Find Nearby Jobs <span>
             
              Web Designer.</span>
          </h1> */}
          <div className="search">
          {show1?<div className="modaldiv1">
            <div className="sousmodal" >
            <div className="delete" onClick={()=>setshow1(!show1)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>

</div>
<h3 style={{color:"black"}}>users</h3>
{idea ? (
        idea?.filter((el)=> el.description.toLowerCase().includes(search1.toLowerCase())).map((el) => <Idea setPing={setPing} ping={ping} el={el} idea={idea} />)
      ) : 
        <img src="https://smart-l.ch/wp-content/plugins/crazy-call-to-action-box/css/loader.gif" />
      }
  </div>
          </div>:null}
            <div className="div1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="transparent"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <input
               onChange={(e)=>setsearch(e.target.value)}
                type="text"
                placeholder="Search (User/Idea) Keywords..."
              ></input>
            </div>
            <div className="div2">
              <button onClick={()=>{setshow1(!show1)}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>
          <div className="divs">
            <div className="div1"> <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
</svg></div>
<div className="descri">
  <p className="p1">{idea?.length}</p>
  <p className="p2"> Posted Ideas</p>
</div>
</div>

<div className="div1"> <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg></div>
<div className="descri">
  <p className="p1">{users?.length}</p>
  <p className="p2">users</p>
</div>
</div>


<div className="div1"> <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
</svg></div>
<div className="descri">
  <p className="p1">6</p>
  <p className="p2">Successful idea</p>
</div>
</div>
            



          </div>
        </div>
      </div>
      <div className="divis">

        <p className="titre">Ideas Project</p>

        <p className="lorem1">
        <b>Sustainable development</b> is key for a successful project idea
        </p>
        <p className="titre">WHAT IS SUSTAINABLE DEVELOPMENT?
</p>
        <p className="lorem">
        <b> Sustainable development </b>is a concept that appeared for the first time in 1987 with the publication of the Brundtland Report, warning of the negative environmental consequences of economic growth and globalization, which tried to find possible solutions to the problems caused by industrialization and population growth.
        </p>
        <p className="titre">
        HOW TO ACHIEVE SUSTAINABLE DEVELOPMENT?

        </p>
   
        <p className="titre">WHAT ARE THE SUSTAINABLE DEVELOPMENT GOALS?
</p>
<p className="lorem">The Sustainable Development Goals, also known as the Global Goals, are a call from the United Nations to all countries around the world to address the great challenges that humanity faces and to ensure that all people have the same opportunities to live a better life without compromising our planet.</p>
    <p className="titre">17 GOALS FOR A BETTER WORLD:</p>
      </div>
      <div className={show ? "durable" : "durable durable1"}>
        {durable.map((el) => (
          <Modal el={el} />
        ))}
        <div className="sdg">
          <img src="img/sdg.svg"></img>
          <p>Sustainable Development Goals</p>
        </div>
      </div>
      <div className="view">
        <button onClick={() => setShow(!show)}>
          View All Goals{" "}
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-caret-down"
              viewBox="0 0 16 16"
            >
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-caret-up"
              viewBox="0 0 16 16"
            >
              <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
            </svg>
          )}
        </button>
      </div>
      <div className="divis">
        <p className="titre">SUCCESSFUL IDEAS</p>

       
      </div>


 

<div class="container1">
    <div class="faders">
        <div class="left"></div>
        <div class="right"></div>
    </div>

    <div class="items">
    {idea ? (
           idea?.filter((el)=> el.validat==true).map((el) =>  <div class="entry">
           <p class="name">{el.user_name}</p>
           <div className="img">
             <img src={el.user_img}/>
           </div>
           <p class="quote">{el.description}</p>
       </div> )
      ) : 
        <img src="https://smart-l.ch/wp-content/plugins/crazy-call-to-action-box/css/loader.gif" />
      }
      
       
    </div>
</div>

      <div className="divis">
        
        <p className="titre">Top Ideas</p>

        <p className="lorem">
          Lorem Ipsum is simply dummy text printing and type setting industry
          Lorem Ipsum been industry standard dummy text ever since when unknown
          printer took a galley.
        </p>
      </div>
      <div className="investisseur">
        {idea ? (
        idea?.filter((el)=>el.status==true && el.validat==false ).map((el) => <Idea el={el}/>)
      ) : 
        <img src="https://smart-l.ch/wp-content/plugins/crazy-call-to-action-box/css/loader.gif" />
      }
      </div>
      <button className="viewbutton" onClick={() => setShow(!show)}>
        View All Ideas
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-caret-down"
          viewBox="0 0 16 16"
        >
          <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
        </svg>
      </button>
      <div className="poverty">
        <img src="poverty.jpg"></img>
        <div className="back">
          <p className="tit">Together for a better future</p>
          <p className="para">
          The power for creating a better future is contained in the present moment: You create a good future by creating a good present.
          </p>
        </div>
        <div className="back2"></div>
      </div>

      <Carousel
        className="c"
        width="1100px"
        emulateTouch
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={3000}
      >
         {
  users?.filter((el)=>el.option=="Investor" ).map((el)=> <div className="carou">
  <div className="usercar">
    <img src={el.user_img} />
  </div>
  <div className="decri">
    <h1>{el.Lastname} {el.name}</h1>
    <h3>Lorem Ipsum</h3>
    <p>
      Lorem Ipsum is simply dummy text of printing and type setting
     industry. Lorem Ipsum been industry standard dummy text ever
      since, when an unknown printer took a galley of type and laboris
      nisi ut aliquip ex minim veniam scrambled it to make a type
      specimen book. It has survived not only five into electronic type
      setting popularised. 
    </p>
  </div>
</div>)

        } 
      </Carousel>

      <Footer/>
    </div>
  );
}

export default Home;
