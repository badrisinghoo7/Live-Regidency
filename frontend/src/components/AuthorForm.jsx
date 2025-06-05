
import './AuthorForm.css';



const AuthorForm = ({formdata,setFormdata,handleSubmit}) => {
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <form className="author-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="firstName">First Name</label>
        <input
          className="form-input"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formdata.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="lastName">Last Name</label>
        <input
          className="form-input"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formdata.lastName}
          onChange={handleChange}
        />
      </div>
       <div className="form-group">
        <label className="form-label" htmlFor="title">Title Name</label>
        <input
          className="form-input"
          id="title"
          name="title"
          placeholder="Title"
          value={formdata.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="profilePhoto">Profile Image URL</label>
        <input
          className="form-input"
          id="profilePhoto"
          name="profilePhoto"
          placeholder="Profile Image URL"
          value={formdata.profilePhoto}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="linkedIn">LinkedIn</label>
        <input
          className="form-input"
          id="linkedIn"
          name="linkedIn"
          placeholder="LinkedIn"
          value={formdata.linkedIn}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="twitter">Twitter</label>
        <input
          className="form-input"
          id="twitter"
          name="twitter"
          placeholder="Twitter"
          value={formdata.twitter}
          onChange={handleChange}
        />
      </div>
      <button className="form-button" type="submit">Submit</button>
    </form>
  );
};

export default AuthorForm;