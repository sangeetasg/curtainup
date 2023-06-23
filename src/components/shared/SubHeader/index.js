import PropTypes from 'prop-types';
import "./subHeader.scss";
import ButtonIcon from '../ButtonIcon';
import { Button } from 'react-bootstrap';
import { BiArrowBack } from 'react-icons/bi';

const SubHeader = ({pageTitle, backarrow,pageButton, pageButtonText }) => {

  return (
    <div className="cu-subheader d-flex align-items-center justify-content-between">
      <div className='d-flex align-items-center gap-3'>
        {backarrow && 
          <ButtonIcon className="cu-back-btn p-2">
            <BiArrowBack className='fs-5'/>
          </ButtonIcon>
        }
        <h1 className="fs-4 fw-semibold mb-0">{pageTitle}</h1>
      </div>
      {pageButton && 
        <Button className='text-uppercase py-3 px-4 fw-bold'>{pageButtonText}</Button>
      }
    </div>
  )
}

SubHeader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  backarrow: PropTypes.bool,
  pageButton: PropTypes.bool,
  pageButtonText: PropTypes.string.isRequired,
};

export default SubHeader;