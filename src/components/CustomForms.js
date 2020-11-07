import React, { useState } from "react";
import "../App.css";

function CustomForms() {
    const [formData, setFormData] = useState({ isGoing: "" });
    const [user, setUser] = useState({ username: "", password: "" });

    const handleInputChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

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
        <div id='custom-forms'>
            <form>
                <div>
                    <label>
                        Name:
                        <input type="text" onChange={event => handleChange(event)} />
                    </label>
                    <button onSubmit={() => handleSubmit()}>Submit!</button>
                </div>

                <div>
                    <span> Age Range: </span>
                    <label>
                        <input type="radio" name="age" value='13-18' onChange={event => handleChange(event)} />
                        13-18
                    </label>
                    <label>
                        <input type="radio" name="age" value='19-24' onChange={event => handleChange(event)} />
                        19-24
                    </label>
                    <label>
                        <input type="radio" name="age" value='25-39' onChange={event => handleChange(event)} />
                        25-39
                    </label>
                    <label>
                        <input type="radio" name="age" value='40+' onChange={event => handleChange(event)} />
                        40+
                    </label>
                </div>

                <div>
                    <span>Home State:</span>
                    <select id="states" name="states">
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="Colorado">Colorado</option>
                    </select>
                </div>

                <div>
                    <label>
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={false}
                            onChange={handleInputChange}
                        />
                        RSVP
                    </label>
                </div>
            </form>
        </div>
    )
}

export default CustomForms;