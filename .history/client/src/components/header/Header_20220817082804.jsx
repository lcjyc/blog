import "./header.css";
import blackcoffee from "../../images/blackcoffee.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitle">Blog</span>
      </div>
      <img className="headerImg" src={blackcoffee} alt="" />
    </div>
  );
}
