import "./profile.css";
import ProfilePic from "../../images/profilepic.jpg";

export default function Profile() {
  return (
    <div className="profile">
      <div className="leftWrapper">
        <div>
          <div className="profile-bg"></div>
          <img className="profileImg" src={ProfilePic} alt="" />
        </div>
      </div>
      <div className="rightWrapper">
        <div className="profilePage">
          <h1 className="title">LesleyC</h1>
        </div>
      </div>
    </div>
  );
}
