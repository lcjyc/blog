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
        <div className="profileDesc">
          <h1 className="title">LesleyC</h1>
          <h3 className="desc">I love coffee, tea, cocktail.</h3>
        </div>
      </div>
    </div>
  );
}
