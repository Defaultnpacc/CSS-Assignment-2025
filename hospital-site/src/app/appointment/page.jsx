'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Link from 'next/link'; // Import Link from next/link

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
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [appointmentDetails, setAppointmentDetails] = useState({}); // State to store appointment details

  useEffect(() => {
    // Mock data for departments and doctors
    const mockDepartments = [
      { id: 1, name: 'Cardiology' },
      { id: 2, name: 'Dental' },
      { id: 3, name: 'Maternity & Pediatrics Care' },
      { id: 4, name: 'Operation & Surgery' },
      { id: 5, name: 'Orthopedics' }
    ];
    const mockDoctors = [
      { id: 1, name: 'Dr. Ethan Lim' },
      { id: 2, name: 'Dr. Nick Gru' },
      { id: 3, name: 'Dr. Mike Oxlong' },
      { id: 4, name: 'Ben Dover' }
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
      setAppointmentDetails(formData); // Set appointment details
      setIsModalOpen(true); // Show modal
      localStorage.removeItem('appointmentFormData'); // Clear form data from localStorage
      setErrors({});
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatTime = (time) => {
    const [hour, minute] = time.split(':');
    const hourInt = parseInt(hour, 10);
    const ampm = hourInt >= 12 ? 'PM' : 'AM';
    const formattedHour = hourInt % 12 || 12;
    return `${formattedHour}:${minute} ${ampm}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center"> {/* Page container */}
      <Header /> {/* Header component */}
      <div className="container mx-auto px-4 py-12"> {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"> {/* Grid layout */}
          <div>
            <h1 className="text-teal-500 font-bold appointment-header">APPOINTMENT</h1> {/* Added class */}
            <img src="/appointment-1.jpg" alt="Appointment" className="my-4 cropped-image" /> {/* Inserted Image */}
            <h1 className="text-4xl font-bold text-gray-800 mt-2">Make An Appointment For Your Family</h1>
            <p className="text-gray-600 mt-4">
              Ensuring your family's health is our top priority. Book an appointment with our experienced doctors and receive
              quality medical care in a comfortable and caring environment. Whether you need a routine check-up, specialized 
              treatment, or urgent medical attention, our team is here to help. Schedule your visit today and take the first 
              step towards better health for you and your loved ones.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="/doctors">
                <button className="bg-teal-500 text-white px-6 py-3 rounded-lg">Our Doctors</button>
              </Link>
              <Link href="/services">
                <button className="border border-teal-500 text-teal-500 px-6 py-3 rounded-lg">Read More</button>
              </Link>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg shadow-md book-appointment-container"> {/* Added class */}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Appointment Details</h2>
            <p><strong>Department:</strong> {appointmentDetails.department}</p>
            <p><strong>Doctor:</strong> {appointmentDetails.doctor}</p>
            <p><strong>Name:</strong> {appointmentDetails.name}</p>
            <p><strong>Date:</strong> {appointmentDetails.date}</p>
            <p><strong>Time:</strong> {formatTime(appointmentDetails.time)}</p>
            <button onClick={closeModal} className="mt-4 bg-teal-500 text-white px-6 py-3 rounded-lg">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}