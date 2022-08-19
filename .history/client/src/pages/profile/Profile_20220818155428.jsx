import "./profile.css";
import ProfilePic from "../../images/profilepic.jpg";

export default function Profile() {
  return (
    <div className="profile">
      <div className="leftWapper">
        <div>
          <img className="profileImg" src={ProfilePic} alt="" />
        </div>
      </div>
      <div className="rightWapper">
        <div className="profileDesc">
          <p></p>
        </div>
      </div>
    </div>
  );
}
