import React, { useEffect, useState } from "react";
import CardIdeas from "./CardIdeas";
import "./GlobalIdea.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userCurrent } from "../redux/userSlice/userSlice";
import { addidea, getidea } from "../redux/ideasslice/IdeaSlice";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { addnotif } from "../redux/notifcationSlice/notifcationSlice";

function GlobalIdea({ setnav, setpp, ping, setPing }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getidea());
    setnav("nav-login");
    setPing(!ping);
    setpp("pp");
  }, []);

  const idea = useSelector((state) => state.idea.ideas);


    const user = useSelector((state) => state?.user?.user);
 
  console.log("ggg",user)
  const [ideas, setideas] = useState({
    user_img: user?.user_img,
    user_name: user?.name,
    user_id:user?._id,
    description: "",
    longDescription: "",
    Available_Resources: "",
    Unavailable_Resources: "",
    Number_Employees: "",
    project_Cost: "",
    budget: "",
  });
  const [notification, setnotification] = useState({
    user_img: user?.user_img,
    user_name:user?.name,
    Lastname:user?.Lastname,
    description:"add an idea",
  })
  const [description, setdescription] = useState(false);
  console.log("fff", description);
  console.log("jj", description);
  const [longDescription, setlongDescription] = useState(false);
  const [Available_Resources, setAvailable_Resources] = useState(false);
  const [Unavailable_Resources, setUnavailable_Resources] = useState(false);
  const [Number_Employees, setNumber_Employees] = useState(false);
  const [project_Cost, setproject_Cost] = useState(false);
  const [budget, setbudget] = useState(false);

  function clickerror() {
    if (ideas?.description.length == 0) {
      setdescription(true);
    } else {
      setdescription(false);
    }
    if (ideas?.longDescription.length < 250) {
      setlongDescription(true);
    } else {
      setlongDescription(false);
    }

    if (ideas?.Available_Resources.length == 0) {
      setAvailable_Resources(true);
    } else {
      setAvailable_Resources(false);
    }

    if (ideas?.Unavailable_Resources.length == 0) {
      setUnavailable_Resources(true);
    } else {
      setUnavailable_Resources(false);
    }
    if (ideas?.Number_Employees.length == 0) {
      setNumber_Employees(true);
    } else {
      setNumber_Employees(false);
    }

    if (ideas?.project_Cost.length == 0) {
      setproject_Cost(true);
    } else {
      setproject_Cost(false);
    }

    if (ideas?.budget.length == 0) {
      setbudget(true);
    } else {
      setbudget(false);
    }

    if (
      ideas?.description.length != 0 &&
      ideas?.longDescription.length >= 250 &&
      ideas?.Available_Resources.length != 0 &&
      ideas?.Unavailable_Resources.length != 0 &&
      ideas?.Number_Employees.length != 0 &&
      ideas?.project_Cost.length != 0 &&
      ideas?.budget.length != 0
    ) {
      dispatch(addidea(ideas));

      setTimeout(() => {
        setPing(!ping);
        navigate("/idea");
        setshow(!show);
        dispatch(addnotif(notification));

        setideas({
          user_img: user?.user_img,
          user_name: user?.name,
          description: "",
          longDescription: "",
          Available_Resources: "",
          Unavailable_Resources: "",
          Number_Employees: "",
          project_Cost: "",
          budget: "",
        });
      }, 2000);
    }
  }

  const [pos, setpos] = useState(0);

  const nb = idea?.length / 3;
  const nb2 = Math.ceil(nb);
  const [nb3, setnb3] = useState(nb2 - 2);
  const [nb4, setnb4] = useState(nb3);

  const isAuth = localStorage.getItem("token");
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="globalidea">
      <div className="cov">
        <img src="idimg.jpg" />
        {isAuth ? (
          <div className="descri">
            <div className="divgob">
              <div className="div1">
                <TypeAnimation
                  sequence={[
                    "Do you have a project idea and want to  be realizeds", // Types 'One'
                    2000, // Waits 1s
                    "chase your  chance", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    "your dream may be true", // Types 'Three' without deleting 'Two'
                    4000,
                    () => {
                      console.log("Done typing!"); // Place optional callbacks anywhere in the array
                    },
                  ]}
                  repeat={Infinity}
                  cursor={false}
                  style={{ fontSize: "60px" }}
                />
              </div>
            </div>

            <button className="bt1" onClick={() => setshow(!show)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fontWeight="600"
                width="35"
                height="35"
                fill="white"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
            </button>
            {show ? (
              <div className="modalidea">
                <main
                  onClick={() => {
                    setshow(!show);
                    setideas({
                      user_img: user?.user_img,
                      user_name: user?.name,
                      description: "",
                      longDescription: "",
                      Available_Resources: "",
                      Unavailable_Resources: "",
                      Number_Employees: "",
                      project_Cost: "",
                      budget: "",
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="gray"
                    class="bi bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                </main>
                <section>
                  <h4>Do you have a project idea and want to be realizeds</h4>
                  <div className="div">
                    <div className="div1">
                      <label>
                        Project Name{" "}
                        <span>
                          {" "}
                          *{" "}
                          {description ? (
                            <span style={{ color: "red" }}>error</span>
                          ) : null}
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Project name"
                        required
                        onChange={(e) =>
                          setideas({ ...ideas, description: e.target.value })
                        }
                      />
                      <label>
                        Project Description
                        <span>
                          {" "}
                          *
                          {longDescription ? (
                            <span style={{ color: "red" }}>error</span>
                          ) : null}
                        </span>
                      </label>
                      <textarea
                        placeholder="Project description (Minimum of 250 characters)"
                        onChange={(e) =>
                          setideas({
                            ...ideas,
                            longDescription: e.target.value,
                          })
                        }
                        id="story"
                        name="story"
                        rows="5"
                        cols="33"
                      ></textarea>
                      <label>
                        Available Resources
                        <span>
                          {" "}
                          *{" "}
                          {Available_Resources ? (
                            <span style={{ color: "red" }}>error</span>
                          ) : null}
                        </span>
                      </label>
                      <textarea
                        placeholder="Available resources"
                        onChange={(e) =>
                          setideas({
                            ...ideas,
                            Available_Resources: e.target.value,
                          })
                        }
                        id="story"
                        name="story"
                        rows="5"
                        cols="33"
                      ></textarea>
                    </div>
                    <div className="div2">
                      <label>
                        Unavailable Resources{" "}
                        <span>
                          {" "}
                          *{" "}
                          {Unavailable_Resources ? (
                            <span style={{ color: "red" }}>error</span>
                          ) : null}
                        </span>
                      </label>
                      <textarea
                        placeholder="Unavailable resources"
                        onChange={(e) =>
                          setideas({
                            ...ideas,
                            Unavailable_Resources: e.target.value,
                          })
                        }
                        id="story"
                        name="story"
                        rows="5"
                        cols="33"
                      ></textarea>

                      <label>
                        Number of Employees{" "}
                        <span>
                          {" "}
                          *{" "}
                          {Number_Employees ? (
                            <span style={{ color: "red" }}>error</span>
                          ) : null}
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Number of Employees"
                        onChange={(e) =>
                          setideas({
                            ...ideas,
                            Number_Employees: e.target.value,
                          })
                        }
                      ></input>

                      <label>
                        Project Cost{" "}
                        <span>
                          {" "}
                          *{" "}
                          {project_Cost ? (
                            <span style={{ color: "red" }}>error</span>
                          ) : null}
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="project cost"
                        onChange={(e) =>
                          setideas({ ...ideas, project_Cost: e.target.value })
                        }
                      ></input>

                      <label>
                        Your Budget
                        <span>
                          {" "}
                          *{" "}
                          {budget ? (
                            <span style={{ color: "red" }}>error</span>
                          ) : null}
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your budget"
                        onChange={(e) =>
                          setideas({ ...ideas, budget: e.target.value })
                        }
                      ></input>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      clickerror();
                    }}
                  >
                    {" "}
                    Post Idea
                  </button>
                </section>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="descri">
            <h1>Browse Ideas</h1>
            <h>
              Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>{" "}
              Browse Ideas
            </h>
          </div>
        )}
      </div>

      <div className="ideas">
        <div
          className="idea1"
          style={{ marginTop: `${pos}px`, transition: "1s" }}
        >
          
          {idea ?
          (
           
            idea.map((el,i) => <CardIdeas ping={ping} setPing={setPing} key={i} el={el} />))
             : (
            <img src="https://smart-l.ch/wp-content/plugins/crazy-call-to-action-box/css/loader.gif" />
          )}
        </div>
      </div>

      <div className="suiv">
        {nb3 < nb4 ? (
          <div
            onClick={() => {
              if (pos < 0) {
                setpos(pos + 780);
                setnb3(nb3 + 1);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
          </div>
        ) : (
          <div>
            <svg
              className="di"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
          </div>
        )}
        {nb3 > 0 ? (
          <div
            onClick={() => {
              if (pos <= nb2 * 780) {
                setpos(pos - 780);
                setnb3(nb3 - 1);
              }
            }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </div>
        ) : (
          <div>
            {" "}
            <svg
              className="di"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default GlobalIdea;
