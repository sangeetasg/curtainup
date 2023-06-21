import React from "react";
import Header from "../../shared/Header";
import SubHeader from "../../shared/SubHeader";

const Event = () =>{
  
  return (
    <div className="cu-page-content d-flex flex-1 scroll-y flex-column gap-4 p-4">
      <Header />
      <SubHeader pageTitle="Events List" pageButton backarrow pageButtonText="Add Event"/>
      <div className="d-flex flex-1 scroll-y">
        
      </div>
    </div>
  );
};

// Auth.propTypes = {
//   authHeading: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired
// };

export default Event;
