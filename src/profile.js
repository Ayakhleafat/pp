import React from 'react';
import './profile.css'; // Import your custom CSS file for profile styles

function Profile() {
  const profileData = {
    name: "Aya Khleafat",
    age: 20,
    email: "aya@gmail.com",
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-info">
        <div className="profile-item">
          <span className="profile-label">Name:</span>
          <span className="profile-value">{profileData.name}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Age:</span>
          <span className="profile-value">{profileData.age}</span>
        </div>
        <div className="profile-item">
          <span className="profile-label">Email:</span>
          <span className="profile-value">{profileData.email}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
