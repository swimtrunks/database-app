const Register = () => {
  return (
    <div>
      <h1>Forms</h1>

      <form className="create_form">
        <h3>create employee record</h3>
        <input type="text" placeholder="Full Name"></input>
        <input type="text" placeholder="Department"></input>
        <input type="text" placeholder="Job Title"></input>
        <input type="text" placeholder="Email Address"></input>
        <button className="create_button">Submit</button>
      </form>

      <form className="update_form">
        <h3>update employee record</h3>
        <input type="text" placeholder="ID Number"></input>
        <select name="options" className="dropdown_list">
          <option value="">--Choose Option--</option>
          <option value="department">Department</option>
          <option value="email">Email</option>
          <option value="job">Job Title</option>
          <option value="name">Full Name</option>
        </select>
        <input type="text" placeholder="updated selection"></input>
        <button className="update_button">Submit</button>
      </form>

      <form className="delete_form">
        <h3>delete employee record</h3>
        <input type="text" placeholder="Employee ID"></input>
        <button className="delete_button">Delete</button>
      </form>
    </div>
  );
};

export default Register;
