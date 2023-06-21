import siteLogo from "../../../assets/images/cu-logo.png";
import ButtonIcon from "../ButtonIcon";
import iconLogout from "../../../assets/images/logout.svg";
import "./header.scss";
import { Nav } from "react-bootstrap";
import { MdOutlineEmojiFlags } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import SiteNavbarItem from "../SiteNavbarItem";

const Header = () => {

  const navItemList = [
    {
      icon: <MdOutlineEmojiFlags />,
      navText: "Events"
    },
    {
      icon: <IoCopyOutline/>,
      navText: "News Ticker"
    },
    {
      icon: <TbUsers/>,
      navText: "Users"
    }
  ];

  return (
    <div className="cu-page-header d-flex align-items-center justify-content-between border border-primary bg-white px-4 py-3">
      <div className="auth-logo">
        <img src={siteLogo} alt="logo"/>
      </div>
      <Nav className="gap-5">
        {navItemList?.map((navItems, i) => (
          <SiteNavbarItem navItemText={navItems.navText} icon={navItems.icon} />
        ))}
      </Nav>
      <ButtonIcon className="btn-logout fs-sm p-0">
        <img src={iconLogout} alt="Logout Icon" className="me-2"/>
        Logout
      </ButtonIcon>
    </div>
  )

}

export default Header;