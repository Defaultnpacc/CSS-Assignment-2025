// Done by Ethan Lim
'use client';

import { useState, useEffect } from 'react'; // Importing useState and useEffect hooks from React
import Header from '../../components/Header'; // Importing the Header component
import Link from 'next/link'; // Import Link from next/link for navigation

export default function Appointment() {
  // State to manage form data
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    name: '',
    email: '',
    date: '',
    time: ''
  });

  // State to store departments and doctors
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  // State to manage form validation errors
  const [errors, setErrors] = useState({});
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to store appointment details for modal display
  const [appointmentDetails, setAppointmentDetails] = useState({});

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

    // Set mock departments and doctors to state
    setDepartments(mockDepartments);
    setDoctors(mockDoctors);

    // Load saved form data from localStorage if available
    const savedFormData = localStorage.getItem('appointmentFormData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Handle form input changes
  const handleChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
    localStorage.setItem('appointmentFormData', JSON.stringify(newFormData)); // Save form data to localStorage
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    // Check if all fields have values and if not, add error messages
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.doctor) newErrors.doctor = 'Doctor is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const validationErrors = validate(); // Validate form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set validation errors to state if any
    } else {
      console.log('Appointment booked:', formData); // Log form data for testing
      setAppointmentDetails(formData); // Set appointment details to state for modal
      setIsModalOpen(true); // Open the modal
      localStorage.removeItem('appointmentFormData'); // Clear form data from localStorage
      setErrors({}); // Clear any validation errors
    }
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Format the time into a 12-hour format with AM/PM
  const formatTime = (time) => {
    const [hour, minute] = time.split(':');
    const hourInt = parseInt(hour, 10);
    const ampm = hourInt >= 12 ? 'PM' : 'AM';
    const formattedHour = hourInt % 12 || 12; // Convert to 12-hour format
    return `${formattedHour}:${minute} ${ampm}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center"> {/* Page container */}
      <Header /> {/* Header component */}
      <div className="container mx-auto px-4 py-12"> {/* Main content container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"> {/* Responsive grid layout */}
          <div>
            <h1 className="text-teal-500 font-bold appointment-header">APPOINTMENT</h1> {/* Appointment title */}
            <img src="/appointment-1.jpg" alt="Appointment" className="my-4 cropped-image" /> {/* Image for appointment */}
            <h1 className="text-4xl font-bold text-gray-800 mt-2">Make An Appointment For Your Family</h1> {/* Heading */}
            <p className="text-gray-600 mt-4"> {/* Paragraph description */}
              Ensuring your family's health is our top priority...
            </p>
            <div className="flex gap-4 mt-6"> {/* Button links */}
              <Link href="/doctors">
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg">Our Doctors</button>
              </Link>
              <Link href="/services">
                <button className="border border-blue-900 text-blue-900 px-6 py-3 rounded-lg">Read More</button>
              </Link>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md book-appointment-container"> {/* Appointment form container */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book An Appointment</h2> {/* Form heading */}
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4"> {/* Form layout */}
              <select name="department" value={formData.department} onChange={handleChange} className="p-3 border rounded">
                <option value="">Choose Department</option>
                {departments.map(department => (
                  <option key={department.id} value={department.name}>{department.name}</option>
                ))}
              </select>
              {errors.department && <span className="text-red-500 col-span-2">{errors.department}</span>} {/* Error message */}
              
              <select name="doctor" value={formData.doctor} onChange={handleChange} className="p-3 border rounded">
                <option value="">Select Doctor</option>
                {doctors.map(doctor => (
                  <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                ))}
              </select>
              {errors.doctor && <span className="text-red-500 col-span-2">{errors.doctor}</span>} {/* Error message */}
              
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-3 border rounded" />
              {errors.name && <span className="text-red-500 col-span-2">{errors.name}</span>} {/* Error message */}
              
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-3 border rounded" />
              {errors.email && <span className="text-red-500 col-span-2">{errors.email}</span>} {/* Error message */}
              
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-3 border rounded" />
              {errors.date && <span className="text-red-500 col-span-2">{errors.date}</span>} {/* Error message */}
              
              <input type="time" name="time" value={formData.time} onChange={handleChange} className="p-3 border rounded" />
              {errors.time && <span className="text-red-500 col-span-2">{errors.time}</span>} {/* Error message */}
              
              <button type="submit" className="col-span-2 bg-blue-900 text-white py-3 rounded-lg">Make An Appointment</button> {/* Submit button */}
            </form>
          </div>
        </div>
      </div>

      {/* Modal for showing appointment details */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"> {/* Modal backdrop */}
          <div className="bg-white p-6 rounded-lg shadow-lg"> {/* Modal content */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Appointment Details</h2>
            <p><strong>Department:</strong> {appointmentDetails.department}</p>
            <p><strong>Doctor:</strong> {appointmentDetails.doctor}</p>
            <p><strong>Name:</strong> {appointmentDetails.name}</p>
            <p><strong>Date:</strong> {appointmentDetails.date}</p>
            <p><strong>Time:</strong> {formatTime(appointmentDetails.time)}</p> {/* Formatted time */}
            <button onClick={closeModal} className="mt-4 bg-teal-500 text-white px-6 py-3 rounded-lg">Close</button> {/* Close modal button */}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6 w-full text-center mt-8">
        <p>&copy; 2025 KYS General Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
}
