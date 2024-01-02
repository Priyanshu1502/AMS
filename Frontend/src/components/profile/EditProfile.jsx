import { useState } from "react";


const EditProfile = ({closeModal}) => {

        const [selectedGender, setSelectedGender] = useState('');
       
        const handleChange = (event) => {
           setSelectedGender(event.target.value);
           console.log(event.target.value)
        };
  return (
    
    <>
    <div className='edit-wrapper' onClick={closeModal}></div>
        <div className='edit-container'>
        <div className="edit-title">
            <h2>Edit Profile</h2>
        </div>
        <div className='edit-close'>
            <button onClick={closeModal}>X</button>
            </div>
        <div className='edit-name'>
            <h2>Change Name</h2>
            <span>First Name</span>
            <input type='text' placeholder='First Name'></input>
            <span>Last Name</span>
            <input type='text' placeholder='Last Name'></input>
        </div>
        <div className="edit-gender">
            <h2>Gender</h2>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={selectedGender} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
        </div>
        <div className="edit-location">
            <h2>Location</h2>
            <span>Address</span>
            <input type="text" placeholder="Address line 1"></input>
            <input type="text" placeholder="Address line 2"></input>
            
        </div>
        <div className="edit-education">

        </div>
        <div className="edit-contact">

        </div>
    </div>
    </>
  )
}

export default EditProfile