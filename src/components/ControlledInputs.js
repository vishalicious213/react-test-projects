import React, { useState } from "react";
import "../App.css";

function ControlledInputs() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.password);
    setUser({ username: '', password: '' });
  };

  return (
    <div id='controlled-inputs'>
      {console.log(user)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </label>

        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={event => handleChange(event)}
          />
        </label>

        <button>Submit!</button>
      </form>

      <p>Controlled inputs use state to set the value of an input in a form. The gist of it is that the input's value attribute is set to a key in state. Initializing state then sets the initial value of the input, and updating state updates the input's value.</p>
      <p>By letting state control the input values, code can be added to submit handlers to clear/reset those fields by clearing state after data has been submitted.</p>
      <p><a href='https://github.com/vishalicious213/react-test-projects/blob/main/src/components/ControlledInputs.js'>View source code</a></p>
    </div>
  );
}

export default ControlledInputs;