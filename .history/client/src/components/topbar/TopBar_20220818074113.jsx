import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import home from "../../images/home.png";
import about from "../../images/about.png";
import write from "../../images/write.png";
import bye from "../../images/bye.png";
import login from "../../images/login.png";
import register from "../../images/register.png";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <span>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="topIcon fab fa-facebook-square"></i>
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="topIcon fab fa-instagram-square"></i>
          </a>
        </span>
        <span>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="topIcon fab fa-twitter-square"></i>
          </a>
        </span>
        <span>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="topIcon fab fa-youtube-square"></i>
          </a>
        </span>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <img className="icon" src={home} alt="" />
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <img className="icon" src={about} alt="" />
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <img className="icon" src={write} alt="" />
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && (
              <div>
                <img className="icon" src={bye} alt="" />
                <span>LOGOUT</span>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <img className="icon" src={login} alt="" />
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <img className="icon" src={register} alt="" />
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
