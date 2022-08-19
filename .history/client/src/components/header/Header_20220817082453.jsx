import "./header.css";
import blackcoffee from "../../images/blackcoffee.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={blackcoffee} alt="" />
    </div>
  );
}
