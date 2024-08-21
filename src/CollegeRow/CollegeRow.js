import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft, faCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './CollegeRow.css';

const CollegeRow = ({ college }) => {
  return (
    <tr className={college.featured ? "featured" : ""}>
      <td >#{college.rank}</td>
      <td className='collegeName'>
  <img src={college.logoUrl} alt={`${college.name} logo`} className="collegeLogo" />
  <div className="collegeNameContainer">
    <span className="collegeNameText">{college.name}</span>
    <span className="collegeLocation">{college.location}</span>
    <div className="actions">
      <p className="applyNow">Apply Now</p>
      <p className="downloadBrochure">Download Brochure</p> 
    </div>
  </div>
</td>

      <td>
        <p className='price'>₹ {college.fees.toLocaleString()}</p>
        <p className="par">BE/B.Tech</p>
        <p className="par">-1st Year Fees</p>
        <p className="fees">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} /> Compare Fees
        </p>
      </td>
      <td className='collegePrice'>
        Avg Package: <br /> <p className='price'>₹{college.placement.averagePackage.toLocaleString()}</p><br />
        Highest Package: <br /> <p className='price'>₹ {college.placement.highestPackage.toLocaleString()}</p>
        <p className="fees">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} /> Compare Fees
        </p>
      </td>
      <td>
        <FontAwesomeIcon icon={faCircle} className='icon'/>{college.userReviewRating}/10<br />
        <p className='par'>Based on the 295 User</p>
        <p className='par'>Reviews</p>
        <p className='rankOption'> Best in Social Life <FontAwesomeIcon icon={faChevronDown} /></p>
      </td>
      <td>{college.ranking}</td>
    </tr>
  );
};

export default CollegeRow;

