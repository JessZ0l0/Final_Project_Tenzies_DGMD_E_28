// React Hooks: useState for managing form state
import React, { useState } from 'react';

// React Router: useNavigate to redirect after form submission
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    // Form State: Controlled inputs for name and email
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate(); // navigation hook to redirect user

    // Form Element with Event: Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log("Form submitted:", { name, email });

        // API or Storage Access: Save player's name to localStorage
        localStorage.setItem("playerName", name);

        // Reset form fields after submission
        setName('');
        setEmail('');

        // React Router: Navigate to /game route
        navigate("/game");
    };

    return (
        // JSX Syntax: Rendered form using JSX
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Event handling: update state
                    required
                />
            </label>

            <label>
                Email:
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Event handling
                />
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
