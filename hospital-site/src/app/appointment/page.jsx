'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import axios from 'axios'; // Import Axios for data fetching

export default function Appointment() {
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Mock data for departments and doctors
    const mockDepartments = [
      { id: 1, name: 'Cardiology' },
      { id: 2, name: 'Neurology' },
      { id: 3, name: 'Pediatrics' }
    ];
    const mockDoctors = [
      { id: 1, name: 'Dr. Smith' },
      { id: 2, name: 'Dr. Johnson' },
      { id: 3, name: 'Dr. Williams' }
    ];

    // Set mock data
    setDepartments(mockDepartments);
    setDoctors(mockDoctors);

    // Load form data from localStorage
    const savedFormData = localStorage.getItem('appointmentFormData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
    localStorage.setItem('appointmentFormData', JSON.stringify(newFormData)); // Save form data to localStorage
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.doctor) newErrors.doctor = 'Doctor is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Appointment booked:', formData);
      localStorage.removeItem('appointmentFormData'); // Clear form data from localStorage
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center"> {/* Page container */}
      <Header /> {/* Header component */}
      <div className="container mx-auto px-4 py-12"> {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"> {/* Grid layout */}
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
                {departments.map(department => (
                  <option key={department.id} value={department.name}>{department.name}</option>
                ))}
              </select>
              {errors.department && <span className="text-red-500 col-span-2">{errors.department}</span>}
              <select name="doctor" value={formData.doctor} onChange={handleChange} className="p-3 border rounded">
                <option value="">Select Doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                ))}
              </select>
              {errors.doctor && <span className="text-red-500 col-span-2">{errors.doctor}</span>}
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-3 border rounded" />
              {errors.name && <span className="text-red-500 col-span-2">{errors.name}</span>}
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-3 border rounded" />
              {errors.email && <span className="text-red-500 col-span-2">{errors.email}</span>}
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-3 border rounded" />
              {errors.date && <span className="text-red-500 col-span-2">{errors.date}</span>}
              <input type="time" name="time" value={formData.time} onChange={handleChange} className="p-3 border rounded" />
              {errors.time && <span className="text-red-500 col-span-2">{errors.time}</span>}
              <button type="submit" className="col-span-2 bg-teal-500 text-white py-3 rounded-lg">Make An Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
