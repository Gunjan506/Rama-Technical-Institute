import { useState } from "react";
import axios from "axios";
import "../style.css";

import institute from "../assets/Institute.png";
import classroom from "../assets/ClassRoom.jpeg";
import discussion from "../assets/Discussion class.jpeg";
import learning from "../assets/Student Learning.jpeg";
import training from "../assets/TrainingClass.jpeg";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const courses = [
    {
      name: "ADCA",
      icon: "💻",
      description: "Advanced Diploma in Computer Applications",
    },
    {
      name: "DCA",
      icon: "🖥️",
      description: "Diploma in Computer Applications",
    },
    {
      name: "CCC",
      icon: "⌨️",
      description: "Course on Computer Concepts",
    },
    {
      name: "DFA",
      icon: "🎨",
      description: "Diploma in Financial Accounting",
    },
    {
      name: "CCFA",
      icon: "📊",
      description: "Certificate Course in Financial Accounting",
    },
    {
      name: "DTP",
      icon: "🖨️",
      description: "Desktop Publishing",
    },
    {
      name: "Tally",
      icon: "💰",
      description: "Tally Prime with GST",
    },
    {
      name: "Advanced Excel",
      icon: "📈",
      description: "Advanced Excel Training",
    },
    {
      name: "AC & Refrigeration",
      icon: "❄️",
      description: "AC & Refrigeration Repairing",
    },
    {
      name: "House Wiring",
      icon: "⚡",
      description: "Electrical House Wiring",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://rama-technical-institute.onrender.com/api/admission",
      formData
    );

    alert(res.data.message);

    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "",
      message: "",
    });
  } catch (err) {
    alert("Failed to submit enquiry.");
    console.log(err);
  }
};

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <p>📞 +91 9936639215 | 9580533615</p>
        <p>✉️ ramakhottha@gmail.com</p>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Rama Technical Institute</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">

        <div className="hero-content">

          <span className="hero-badge">
            🎓 Admissions Open 2026
          </span>

          <h1>
            Shape Your Career with
            <span> Rama Technical Institute</span>
          </h1>

          <p>
            Learn Computer Courses, Accounting,
            Technical Skills and Professional
            Certification from experienced faculty.
          </p>

          <div className="hero-buttons">

            <a href="#courses" className="btn">
  Explore Courses
</a>

            <a href="tel:+919936639215" className="btn">
              Call Now
            </a>
            <a
  href="https://wa.me/919936639215?text=Hello%20Rama%20Technical%20Institute,%20I%20want%20to%20know%20about%20your%20courses."
  target="_blank"
  rel="noopener noreferrer"
  className="btn whatsapp-btn"
>
  WhatsApp
</a>

          </div>

        </div>

        <div className="hero-image">
          <img src={institute} alt="Institute" />
        </div>

      </section>
      {/* Why Choose Us */}
      <section className="features">

        <h2 className="section-title">
          Why Choose Us
        </h2>

        <div className="feature-container">

          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Expert Faculty</h3>
            <p>
              Learn from experienced teachers with practical knowledge.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Practical Training</h3>
            <p>
              Hands-on learning in modern computer labs.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📜</div>
            <h3>Certified Courses</h3>
            <p>
              Government recognized computer and technical courses.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👨‍🏫</div>
            <h3>Small Batches</h3>
            <p>
              Personal attention for every student.
            </p>
          </div>

        </div>

      </section>

      {/* Courses */}

      <section className="courses" id="courses">

        <h2 className="section-title">
          Our Courses
        </h2>

        <div className="course-container">

          {courses.map((course, index) => (

            <div className="course-card" key={index}>

              <div className="course-icon">
                {course.icon}
              </div>

              <h3>{course.name}</h3>

              <p>{course.description}</p>

              <button className="learn-btn">
                Learn More
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Gallery */}

      <section className="gallery" id="gallery">

        <h2 className="section-title">
          Our Gallery
        </h2>

        <div className="gallery-grid">

          <img src={classroom} alt="Classroom" />

          <img src={discussion} alt="Discussion" />

          <img src={learning} alt="Learning" />

          <img src={training} alt="Training" />

        </div>

      </section>

      {/* Faculty */}

      <section className="faculty">

        <h2 className="section-title">
          Our Faculty
        </h2>

        <div className="testimonial-container">

          <div className="testimonial-card">
            <h3>👨‍🏫 Computer Faculty</h3>
            <p>
              Experienced in Computer Applications,
              Programming, MS Office, Advanced Excel
              and Tally.
            </p>
          </div>

          <div className="testimonial-card">
            <h3>👩‍🏫 Technical Faculty</h3>
            <p>
              Expert in AC & Refrigeration Repairing,
              Electrical House Wiring and practical training.
            </p>
          </div>

          <div className="testimonial-card">
            <h3>👨‍💼 Accounting Faculty</h3>
            <p>
              Specialized in Financial Accounting,
              Tally Prime with GST and Business Accounting.
            </p>
          </div>

        </div>

      </section>

      {/* About */}

      <section className="about" id="about">

        <h2>About Us</h2>

        <p>
          Rama Technical Institute is dedicated to
          providing quality technical education and
          skill development programs that help students
          become industry ready.
        </p>

      </section>
      {/* Admission Enquiry */}

      <section className="admission" id="admission">

        <h2 className="section-title">
          Admission Enquiry
        </h2>

        <form className="admission-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>

            {courses.map((course, index) => (
              <option key={index} value={course.name}>
                {course.name}
              </option>
            ))}

          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn">
            Submit Enquiry
          </button>

        </form>

      </section>

{/* Contact Section */}

<section className="contact-section" id="contact">

    <h2 className="section-heading">Contact Us</h2>

    <p className="section-subheading">
        Get in touch with us for admissions and course information.
    </p>

    <div className="contact-wrapper">

        {/* Contact Information */}

        <div className="contact-info">

            <h3>Rama Technical Institute</h3>

            <div className="info">
                <span>📞</span>
                <a href="tel:+919936639215">+91 9936639215</a>
            </div>

            <div className="info">
                <span>📞</span>
                <a href="tel:+919580533615">+91 9580533615</a>
            </div>

            <div className="info">
                <span>✉️</span>
                <a href="mailto:ramakhottha@gmail.com">
                    ramakhottha@gmail.com
                </a>
            </div>

            <div className="info">
                <span>📍</span>
                <p>
                    Khottah Chauraha, Barwa,
                    Hata, Kushinagar,
                    Uttar Pradesh - 274206
                </p>
            </div>

            <div className="contact-buttons">

                <a
                    href="tel:+919936639215"
                    className="btn"
                >
                    📞 Call Now
                </a>

                <a
                    href="https://wa.me/919936639215"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn whatsapp-btn"
                >
                    💬 WhatsApp
                </a>

                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ramakhottha@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  ✉ Email
</a>

            </div>

        </div>


        {/* Google Map */}

        <div className="contact-map">

            <div className="map-header">

                <h3>📍 Visit Our Institute</h3>

                <p>
                    We welcome you to visit our institute for admission guidance
                    and course counseling.
                </p>

            </div>

            <iframe
                title="Institute Location"
                src="https://www.google.com/maps?q=RM87%2BPGP%2C+Khottah+Chaoraha%2C+Barwa%2C+Uttar+Pradesh+274206&output=embed"
                loading="lazy"
            ></iframe>

            <a
                href="https://www.google.com/maps/search/?api=1&query=RM87%2BPGP%2C+Khottah+Chaoraha%2C+Barwa%2C+Uttar+Pradesh+274206"
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn"
            >
                📍 Open in Google Maps
            </a>

        </div>

    </div>

</section>
{/* Floating WhatsApp Button */}

<a
  href="https://wa.me/919936639215?text=Hello%20Rama%20Technical%20Institute,%20I%20want%20to%20know%20about%20your%20courses."
  className="floating-whatsapp"
  target="_blank"
  rel="noopener noreferrer"
>
  💬
</a>
{/* Floating Call Button */}

<a
  href="tel:+919936639215"
  className="floating-call"
>
  📞
</a>
      {/* Footer */}

      <footer className="footer">

        <p>
          © 2026 Rama Technical Institute.
          All Rights Reserved.
        </p>

      </footer>

    </>
  );
}

export default Home;