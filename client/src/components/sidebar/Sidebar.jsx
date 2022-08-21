import { axiosInstance } from "../../config";
import { useEffect, useState } from "react";
import "./sidebar.css";
import forest from "../../images/forest.jpg";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <h3 className="sidebarTitle">ABOUT</h3>
        <img className="sidebarImg" src={forest} alt="" />
        <p className="sidebarDesc">
          This blog app is build with React, Express, Node.js, and MongoDB.
          <br />
          You can register a account and start writing for your own blog !
        </p>
      </div>
      <div className="sidebarItem">
        <h3 className="sidebarTitle">CATEGORIES</h3>
        <ul className="sidebarList">
          {cats.map((c) => (
            <li className="sidebarListItem" key={c.name}>
              {c.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <h3 className="sidebarTitle">FOLLOW</h3>
        <div className="sidebarSocial">
          <span>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="sidebarIcon fab fa-facebook-square"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="sidebarIcon fab fa-instagram-square"></i>
            </a>
          </span>
          <span>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="sidebarIcon fab fa-twitter-square"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="sidebarIcon fab fa-youtube-square"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
