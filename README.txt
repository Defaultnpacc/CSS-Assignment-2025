# CSS-Assignment-2025
Ngee Ann Poly CSS assignment for 2025
Theme: Hospital Website
Website Structure:

hospital-website/
│
├── public/                  # Static assets like images, icons, etc.
│   ├── logo.png
│   └── doctors/
│       └── dr_ravi.jpg
│
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── AppointmentForm.js
│   │   └── DoctorCard.js
│   │
│   ├── pages/               # Each page corresponds to a route
│   │   ├── index.js         # Home page
│   │   ├── doctors.js       # Doctor profiles page
│   │   ├── appointments.js  # Appointment booking page
│   │   └── blog.js          # Health blog/news page
│   │
│   ├── styles/              # CSS/SCSS modules for styling
│   │   ├── globals.css
│   │   ├── Header.module.css
│   │   └── DoctorCard.module.css
│   │
│   ├── utils/               # Helper functions (e.g., API calls)
│   │   ├── api.js
│   │   └── validations.js
│   │
│   └── context/             # Global state management
│       └── UserContext.js
│
├── package.json             # Project dependencies
├── .gitignore               # Files to ignore in Git
└── README.md                # Project documentation
