import React from 'react';
import './course-card.css';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import teacherProfile from '../A_media/course-media/teacher-profile1.jpg';

const CourseCard = ({ bannerSrc, CourseName, Money, Time }) => {
  return (
    <div className="card-container">
      <figure className="card">
        <img src={bannerSrc} alt="banner"></img>

        <figcaption>
          <img src={teacherProfile} alt="profile-pic" className="profile" />
          <h2>Jyotirmay gayen<span>Japanese Teacher</span></h2>

          <div className="class-details">
            <div style={{ display: "flex" }}><h5>Course: </h5><span style={{ padding: "3px" }}></span> {CourseName} </div>
            <div style={{ display: "flex" }}><h5>Mode: </h5><span style={{ padding: "3px" }}></span> Online/Offline </div>
            <div style={{ display: "flex" }}><h5>Period: </h5><span style={{ padding: "3px" }}></span> {Time} </div>
            <div style={{ display: "flex" }}><h5>Price: </h5><span style={{ padding: "3px" }}></span> <h6 style={{ fontSize: "14px" }}> {Money} </h6></div>
          </div>

          <div className="class-btn">
            <h5>Book Now</h5>
            <button className="call-btn" onClick={() => window.location.href = 'tel:8013072585'}>
              <CallIcon />
            </button>
            <button className="wapp-btn" onClick={() => window.open("https://api.whatsapp.com/send?phone=%2B918013072585&data_filter_required=ARBHHFtaUwdrkJ3LOSOjkrBPMiUVFJfMxVQnj8awZER3y_APKIxw-LNF3ZKPR5-dyDRBDznJ_3qk2BwOkpSYMiYj_fOA6eRe6YQq8IaANpJdU1HelnQyNjQBv6CcQc9gEivqCYjiN8lao7cH6Ay0ku23_Q&source=FB_Page&app=facebook&entry_point=page_cta", "_blank")}>
              <WhatsAppIcon />
            </button>
          </div>

        </figcaption>
      </figure>
    </div>
  );
}

export default CourseCard;
