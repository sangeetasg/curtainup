import PropTypes from 'prop-types';
import { Nav } from "react-bootstrap";
import "./siteNavbarItem.scss";

const SiteNavbarItem = ({navItemText, icon}) => {
  return (
    <Nav.Item className='cu-nav-item d-flex align-items-center fs-6 px-3'>
      <div className='nav-icon d-flex align-items-center p-2'>{icon}</div>
      <Nav.Link href="#" className='p-0 ms-2'>{navItemText}</Nav.Link>
    </Nav.Item>
  )

}

SiteNavbarItem.propTypes = {
  navItemText: PropTypes.string.isRequired,
  icon: PropTypes.element, 
};

export default SiteNavbarItem;