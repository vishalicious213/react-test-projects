import React, { useState } from 'react';
import '../App.css';

function CustomForms() {
    const [formData, setFormData] = useState({ username: '', age: '', homeState: '', isGoing: false })

    const handleChange = event => {
        // console.log(event.target.name, event.target.value)
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleRSVP = event => {
        setFormData({ ...formData, isGoing: !formData.isGoing })
        // console.log('going', formData.isGoing)
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log('name', formData.username)
        console.log('age', formData.age)
        console.log('state', formData.homeState)
        console.log('going', formData.isGoing)
        setFormData({ ...formData, username: '', age: '', homeState: '', isGoing: false })
        event.target.reset() // resets all of the HTML/JSX fields!
    }

    return (
        <div id='custom-forms'>
            {console.log('formData', formData)}
            <form onSubmit={event => handleSubmit(event)}>
                <div className='form-field wide'>
                    <label id='custom-forms-name-box'>
                        <span className='field-name'>Name:</span>
                        <input id='custom-forms-name' type="text" name='username' value={formData.username} onChange={event => handleChange(event)} />
                    </label>
                </div>

                <div className='form-field'>
                    <span className='field-name'>Age Range:</span>
                    <label className='age-range'>
                        <input type='radio' name='age' value='13-18' onChange={event => handleChange(event)} />
                        13-18
                    </label>
                    <label className='age-range'>
                        <input type='radio' name='age' value='19-24' onChange={event => handleChange(event)} />
                        19-24
                    </label>
                    <label className='age-range'>
                        <input type='radio' name='age' value='25-39' onChange={event => handleChange(event)} />
                        25-39
                    </label>
                    <label className='age-range'>
                        <input type='radio' name='age' value='40+' onChange={event => handleChange(event)} />
                        40+
                    </label>
                </div>

                <div className='wide'>
                    <label className='form-field'>
                        <span className='field-name'>Home State:</span>
                        <select id='homeState' name='homeState' onChange={event => handleChange(event)}>
                            <option value={null}></option>
                            <option value='Alabama'>Alabama</option>
                            <option value='Alaska'>Alaska</option>
                            <option value='Arizona'>Arizona</option>
                            <option value='Arkansas'>Arkansas</option>
                            <option value='California'>California</option>
                            <option value='Colorado'>Colorado</option>
                            <option value='New York'>New York</option>
                            <option value='Texas'>Texas</option>
                        </select>
                    </label>

                    <label className='form-field'>
                        <input
                            name='isGoing'
                            type='checkbox'
                            checked={formData.isGoing}
                            value={formData.isGoing}
                            onChange={event => handleRSVP(event)}
                        />
                        <span>RSVP</span>
                    </label>
                </div>

                <button id='custom-forms-submit'>Submit!</button>
            </form>

            <p>This form's inputs include text, radio buttons, a drop-down and checkbox. Their values are all held in state. A single event handler updates state for all but the checkbox, which uses a different handler to toggle its checked value between true/false.</p>
            <p>The submit handler resets all of the form's fields with <i>'event.target.reset()'</i> after it resets state to its initial values. </p>
            <p><a href='https://github.com/vishalicious213/react-test-projects/blob/main/src/components/CustomForms.js'>View source code</a></p>
        </div>
    )
}

export default CustomForms;