import React from 'react';
import './course-card.css';
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import teacherProfile from '../A_media/course-media/teacher-profile1.jpg';

const CourseCard = ({ bannerSrc, CourseName, Money, Time }) => {
  return (
    <div className="card-container">

      <div className="card">
        <img className="pro-banner" src={bannerSrc} alt="banner"></img>

        <div className="card-bellow">
          <img src={teacherProfile} alt="profile" className="profile-pic" />

          <div className="pro-name">
            <div>Jyotirmay gayen</div>
            <span> Japanese Teacher</span>
          </div>

          <div className="class-details">
            <div> <h5>Course: </h5> <span> {CourseName} </span> </div>
            <div> <h5>Mode: </h5> <span> Online/Offline </span></div>
            <div> <h5>Period: </h5> <span> {Time} </span></div>
            <div> <h5>Price: </h5> <span style={{ fontWeight: "600" }}> {Money} </span></div>
          </div>

          <div className="class-btn">
            <h5>Book Now</h5>
            <div>
              <button className="call-btn" onClick={() => window.location.href = 'tel:8013072585'}>
                <MdCall />
              </button>
              <button className="wapp-btn" onClick={() => window.open("https://api.whatsapp.com/send?phone=%2B918013072585&data_filter_required=ARBHHFtaUwdrkJ3LOSOjkrBPMiUVFJfMxVQnj8awZER3y_APKIxw-LNF3ZKPR5-dyDRBDznJ_3qk2BwOkpSYMiYj_fOA6eRe6YQq8IaANpJdU1HelnQyNjQBv6CcQc9gEivqCYjiN8lao7cH6Ay0ku23_Q&source=FB_Page&app=facebook&entry_point=page_cta", "_blank")}>
                <FaWhatsapp />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CourseCard;
