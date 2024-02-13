import React, { useState } from 'react';

function Booking({ onFormSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        occasion: '',
        people: '',
        email: '',
        phone: '' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.people <= 0) {
            alert('Number of people must be greater than 0.');
            return;
        }

        onFormSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:*</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="date">Date:*</label>
            <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />

            <label htmlFor="time">Time:*</label>
            <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
            />
            
             <label htmlFor="people">Number of People:*</label>
            <input
                type="number"
                id="people"
                name="people"
                value={formData.people}
                onChange={handleChange}
                required
                min="1"
            />

<label htmlFor="email">Email:*</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@example.com"
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                title="Phone number should be in the format: 123-456-7890"
            />
            <label htmlFor="occasion">Occasion:</label>
            <input
                type="text"
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
            />


            <button type="submit">Submit</button>
        </form>
    );
}

export default Booking;
