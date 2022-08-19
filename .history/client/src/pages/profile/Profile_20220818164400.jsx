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
          <h3>
            I used to be a barista who really loves coffee. <br />
            Now I am a web developer, and I enjoy coding with coffee!
            <br />
            I will share some recipes about coffee drinks, cocktail and dessert
            baking.
            <br />
            <br />
            Also, I like photography, therefore the photo in this blog was taken
            by me.
          </h3>
        </div>
      </div>
    </div>
  );
}
