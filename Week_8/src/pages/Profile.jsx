import { Camera, Mail, Phone, Save, User } from "lucide-react";
import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem(
      "zynxis-profile"
    );

    return saved
      ? JSON.parse(saved)
      : {
          name: "Maira Nafees",
          email: "maira@example.com",
          phone: "+92 300 1234567",
          role: "Client",
          company: "Zynxis",
          location: "Karachi, Pakistan",
          bio: "Technology-focused client working on digital products, frontend experiences, and modern web solutions.",
        };
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const saveProfile = (event) => {
    event.preventDefault();

    localStorage.setItem(
      "zynxis-profile",
      JSON.stringify(profile)
    );

    alert("Profile updated successfully!");
  };

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <span className="page-eyebrow">
            ACCOUNT
          </span>

          <h2>Profile</h2>

          <p>
            Manage your personal information and
            workspace profile.
          </p>
        </div>
      </div>

      <form
        className="profile-layout"
        onSubmit={saveProfile}
      >
        <div className="dashboard-card profile-card">
          <div className="profile-cover" />

          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">
              MN
            </div>

            <button
              type="button"
              className="camera-button"
            >
              <Camera size={17} />
            </button>
          </div>

          <div className="profile-intro">
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
          </div>

          <div className="profile-meta">
            <div>
              <Mail size={16} />
              {profile.email}
            </div>

            <div>
              <Phone size={16} />
              {profile.phone}
            </div>

            <div>
              <User size={16} />
              {profile.company}
            </div>
          </div>
        </div>

        <div className="dashboard-card form-card">
          <div className="card-header">
            <div>
              <span>PERSONAL INFORMATION</span>
              <h3>Account Details</h3>
            </div>
          </div>

          <div className="form-grid">
            <label>
              Full Name
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </label>

            <label>
              Email Address
              <input
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone Number
              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Role
              <input
                name="role"
                value={profile.role}
                onChange={handleChange}
              />
            </label>

            <label>
              Company
              <input
                name="company"
                value={profile.company}
                onChange={handleChange}
              />
            </label>

            <label>
              Location
              <input
                name="location"
                value={profile.location}
                onChange={handleChange}
              />
            </label>

            <label className="full-width">
              Bio
              <textarea
                name="bio"
                rows="5"
                value={profile.bio}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-footer">
            <span>
              Your changes are saved locally.
            </span>

            <button
              className="primary-button"
              type="submit"
            >
              <Save size={17} />
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;