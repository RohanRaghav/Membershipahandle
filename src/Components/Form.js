import React, { useState } from "react";
import axios from "axios";


const MemberForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    UID: "",
    department: "",
    year: "",
    semester: "",
    email: "",
    phoneNumber: "",
    technicalSkills: "",
    softSkills: "",
    certifications: "",
    extracurricularActivities: "",
    previousPositions: "",
    achievements: "",
    interests: [],
    preferredRole: "",
    socialMedia: {
      linkedIn: "",
      github: "",
    },
    languages: [],
    specialSkills: "",
    suggestions: "",
    feedback: "",
    cvPortfolio: null,
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedInputChange = (e, field) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [field]: { ...formData[field], [name]: value },
    });
  };

  const handleArrayInputChange = (e, field) => {
    const value = e.target.value.split(",").map((item) => item.trim());
    setFormData({ ...formData, [field]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (e.target.name === "image") {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file)); // Set image preview
    } else {
      setFormData({ ...formData, cvPortfolio: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "cvPortfolio" || key === "image") {
        formDataToSend.append(key, value);
      } else if (typeof value === "object") {
        formDataToSend.append(key, JSON.stringify(value));
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await axios.post(
        "https://serverhandle.vercel.app/api/members",
        formDataToSend, // Use formDataToSend
        { headers: { "Content-Type": "multipart/form-data" } }
      );      
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        UID: "",
        department: "",
        year: "",
        semester: "",
        email: "",
        phoneNumber: "",
        technicalSkills: "",
        softSkills: "",
        certifications: "",
        extracurricularActivities: "",
        previousPositions: "",
        achievements: "",
        preferredRole: "",
        languages: [],
        specialSkills: "",
        suggestions: "",
        feedback: "",
        cvPortfolio: null,
        image: null,
      });
      setImagePreview(null);
    } catch (error) {
      console.error("Error submitting the form", error);
      console.log(formData);
      alert("Failed to submit the form. Please try again.");
    }
  };
  return (
    <div className="app">
      <center>
    <form onSubmit={handleSubmit} >
      <h2 className="text-xl font-bold mb-4">Club Membership Form</h2>
      <center>
<div className="alignment">
      {/* Basic Information */}
     <div className="form-group">
      <div>
      <label>Full Name:</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        required
      />
      </div>
      </div>
<div className="form-group">
  <div>
      <label>UID/Student ID:</label>
      <input
        type="text"
        name="UID"
        value={formData.UID}
        onChange={handleInputChange}
        required
      /></div>
<div>
      <label>Department:</label>
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleInputChange}
        required
      />
      </div>
</div>
<div className="form-group">
  <div>
      <label>Year of Study:</label>
      <select
        name="year"
        value={formData.year}
        onChange={handleInputChange}
        required
      >
        <option value="">Select Year</option>
        <option value="1st">1st</option>
        <option value="2nd">2nd</option>
        <option value="3rd">3rd</option>
        <option value="4th">4th</option>
      </select>
      </div>
      <div>
      <label>Semester:</label>
      <select
        name="semester"
        value={formData.semester}
        onChange={handleInputChange}
        required
      >
        <option value="">Select Semester</option>
        <option value="Odd">Odd</option>
        <option value="Even">Even</option>
      </select>
      </div>
</div>
<div className="form-group">
  <div>
      <label>Email Address:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
</div>
<div>
      <label>Phone Number:</label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        required
      />
      </div>
</div>
<div className="form-group">
      {/* Other Fields */}
      <div>
      <label>Technical Skills (comma separated):</label>
      <input
        type="text"
        name="technicalSkills"
        value={formData.technicalSkills}
        onChange={(e) => handleArrayInputChange(e, "technicalSkills")}
      />
      </div>
      <div>
      <label>Soft Skills:</label>
      <input
        type="text"
        name="softSkills"
        value={formData.softSkills}
        onChange={handleInputChange}
      />
      </div>
</div>
<div className="form-group">
  <div>
      <label>Certifications:</label>
      <textarea
        name="certifications"
        value={formData.certifications}
        onChange={handleInputChange}
      ></textarea>
</div>
<div>
      <label>Extracurricular Activities:</label>
      <textarea
        name="extracurricularActivities"
        value={formData.extracurricularActivities}
        onChange={handleInputChange}
      ></textarea>
      </div>
</div>
<div className="form-group">
  <div>
      <label>Previous Positions:</label>
      <textarea
        name="previousPositions"
        value={formData.previousPositions}
        onChange={handleInputChange}
      ></textarea>
</div>
<div>
      <label>Achievements:</label>
      <textarea
        name="achievements"
        value={formData.achievements}
        onChange={handleInputChange}
      ></textarea>
      </div>
</div>
<div className="form-group">
      <div>
      <label>Preferred Role:</label>
      <input
        type="text"
        name="preferredRole"
        value={formData.preferredRole}
        onChange={handleInputChange}
      />
      </div>
</div>
<div className="form-group">
  <div>
      <label>Languages Spoken (comma separated):</label>
      <input
        type="text"
        name="languages"
        value={formData.languages.join(", ")}
        onChange={(e) => handleArrayInputChange(e, "languages")}
      />
</div>
<div>
      <label>Special Skills:</label>
      <textarea
        name="specialSkills"
        value={formData.specialSkills}
        onChange={handleInputChange}
      ></textarea>
      </div>
</div>
<div className="form-group">
  <div>
      <label>Suggestions:</label>
      <textarea
        name="suggestions"
        value={formData.suggestions}
        onChange={handleInputChange}
      ></textarea>
</div>
<div>
      <label>Feedback:</label>
      <textarea
        name="feedback"
        value={formData.feedback}
        onChange={handleInputChange}
      ></textarea>
      </div>
</div>
<div className="form-group">
  <div>
      <label>Upload CV/Portfolio:</label>
      <input type="file" name="cvPortfolio" onChange={handleFileChange} />
</div>
<div>
      <label>Your Image:</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleFileChange}
        required
      />
      </div>
      </div>
      <button type="submit">Submit</button>
      </div>
      </center>
    </form>
    </center>
    {imagePreview && (
        <div>
          <p>Image Preview:</p>
          <img
            src={imagePreview}
            alt="User Preview"
            className="immage"
          />
        </div>
      )}
    </div>
  );
};

export default MemberForm;
