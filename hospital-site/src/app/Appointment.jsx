'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Appointment() {
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-teal-500 font-bold">APPOINTMENT</h2>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">Make An Appointment For Your Family</h1>
          <p className="text-gray-600 mt-4">
            Ensuring your family's health is our top priority. Book an appointment with our experienced doctors and receive
            quality medical care in a comfortable and caring environment. Whether you need a routine check-up, specialized 
            treatment, or urgent medical attention, our team is here to help. Schedule your visit today and take the first 
            step towards better health for you and your loved ones.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg">Our Doctors</button>
            <button className="border border-teal-500 text-teal-500 px-6 py-3 rounded-lg">Read More</button>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book An Appointment</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <select name="department" value={formData.department} onChange={handleChange} className="p-3 border rounded">
              <option value="">Choose Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Pediatrics">Pediatrics</option>
            </select>
            <select name="doctor" value={formData.doctor} onChange={handleChange} className="p-3 border rounded">
              <option value="">Select Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Jane">Dr. Jane</option>
            </select>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-3 border rounded" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-3 border rounded" />
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-3 border rounded" />
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="p-3 border rounded" />
            <button type="submit" className="col-span-2 bg-teal-500 text-white py-3 rounded-lg">Make An Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
}
