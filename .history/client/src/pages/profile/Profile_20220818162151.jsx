import "./profile.css";
import ProfilePic from "../../images/profilepic.jpg";

export default function Profile() {
  return (
    <div className="profile">
      <div className="leftWapper">
        <div>
          <div className="profile-bg"></div>
          <img className="profileImg" src={ProfilePic} alt="" />
        </div>
      </div>
      <div className="rightWapper">
        <div className="profilePage">
          <h1 className="title">LesleyC</h1>
          <p className="title">I love coffee, tea, cocktail.</p>
        </div>
      </div>
    </div>
  );
}
