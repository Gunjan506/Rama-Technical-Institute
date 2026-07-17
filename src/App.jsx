import "./style.css";
import institute from "./assets/Institute.png";
import classroom from "./assets/ClassRoom.jpeg";
import discussion from "./assets/Discussion class.jpeg";
import learning from "./assets/Student Learning.jpeg";
import training from "./assets/TrainingClass.jpeg";
function App() {

  const courses = [
    {
      name: "ADCA",
      icon: "💻",
      description: "Advanced Diploma in Computer Applications"
    },
    {
      name: "DCA",
      icon: "🖥️",
      description: "Diploma in Computer Applications"
    },
    {
      name: "CCC",
      icon: "⌨️",
      description: "Course on Computer Concepts"
    },
    {
      name: "DFA",
      icon: "🎨",
      description: "Diploma in Financial Accounting"
    },
    {
      name: "CCFA",
      icon: "📊",
      description: "Certificate Course in Financial Accounting"
    },
    {
      name: "DTP",
      icon: "🖨️",
      description: "Desktop Publishing"
    },
    {
      name: "Tally",
      icon: "💰",
      description: "Tally Prime with GST"
    },
    {
      name: "Advanced Excel",
      icon: "📈",
      description: "Advanced Excel Training"
    },
    {
      name: "AC & Refrigeration",
      icon: "❄️",
      description: "AC & Refrigeration Repairing"
    },
    {
      name: "House Wiring",
      icon: "⚡",
      description: "Electrical House Wiring"
    }
  ];

  return (
    <>

      {/* Top Contact Bar */}
      <div className="top-bar">
        <p>📞 +91 9936639215, 9580533615 | ✉️ ramatechnical@gmail.com</p>
        <p>📍 Khottah Bazar, Uttar Pradesh</p>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Rama Technical Institute</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
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
      Learn Computer Courses, Accounting, Technical Skills,
      Electrical Training and Professional Certification
      from experienced faculty.
    </p>

    <div className="hero-buttons">
      <button className="btn">
        Explore Courses
      </button>

      <a href="tel:+919936639215">
  <button className="call-btn">
    📞 Call Now
  </button>
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
    Why Choose Rama Technical Institute?
  </h2>

  <div className="feature-container">

    <div className="feature-card">
      <div className="feature-icon">🎓</div>
      <h3>Expert Faculty</h3>
      <p>Learn from experienced teachers with practical knowledge.</p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">💻</div>
      <h3>Practical Training</h3>
      <p>Hands-on learning in modern computer labs.</p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">📜</div>
      <h3>Certified Courses</h3>
      <p>Government recognized computer and technical courses.</p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">👨‍🏫</div>
      <h3>Small Batches</h3>
      <p>Personal attention to every student for better learning.</p>
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
<section className="gallery">

  <h2 className="section-title">
    Our Gallery
  </h2>

  <div className="gallery-container">

    <img src={classroom} alt="Class Room" />

    <img src={discussion} alt="Discussion Class" />

    <img src={learning} alt="Student Learning" />

    <img src={training} alt="Training Class" />

  </div>

</section>
{/* Statistics */}
<section className="stats">

  <div className="stat-card">
    <h2>1000+</h2>
    <p>Students Trained</p>
  </div>

  <div className="stat-card">
    <h2>10+</h2>
    <p>Professional Courses</p>
  </div>

  <div className="stat-card">
    <h2>5+</h2>
    <p>Years of Experience</p>
  </div>

  <div className="stat-card">
    <h2>95%</h2>
    <p>Student Satisfaction</p>
  </div>

</section>
{/* Our Faculty */}
<section className="testimonials">

  <h2 className="section-title">
    Meet Our Faculty
  </h2>

  <div className="testimonial-container">

    <div className="testimonial-card">
      <h3>👨‍🏫 Computer Faculty</h3>
      <p>
        Experienced in Computer Applications, Programming,
        MS Office, Advanced Excel and Tally.
      </p>
    </div>

    <div className="testimonial-card">
      <h3>👩‍🏫 Technical Faculty</h3>
      <p>
        Expert in AC & Refrigeration Repairing,
        Electrical House Wiring and practical technical training.
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
          Rama Technical Institute is dedicated to providing quality
          technical education and skill development programs for students.
        </p>

      </section>
      {/* Admission Enquiry */}

<section className="admission">

  <h2 className="section-title">
    Admission Enquiry
  </h2>

  <form className="admission-form">

    <input
      type="text"
      placeholder="Full Name"
    />

    <input
      type="tel"
      placeholder="Mobile Number"
    />

    <input
      type="email"
      placeholder="Email Address"
    />

    <select>
      <option>Select Course</option>
      {courses.map((course, index) => (
        <option key={index}>{course.name}</option>
      ))}
    </select>

    <textarea
      rows="5"
      placeholder="Your Message"
    ></textarea>

    <button type="submit" className="btn">
      Submit Enquiry
    </button>

  </form>

</section>

      {/* Contact */}
<section className="contact" id="contact">

  <h2>Contact Us</h2>

  <div className="contact-container">

    <div className="contact-info">

      <h3>Rama Technical Institute</h3>

      <p>📞 +91 9936639215</p>

      <p>📞 +91 9580533615</p>

      <p>✉️ ramatechnical@gmail.com</p>

      <p>📍 Khottah Bazar Hata Kushinagar, Uttar Pradesh</p>

    </div>

    <div className="contact-map">

      <iframe
        title="Institute Location"
        src="https://www.google.com/maps?q=Khottah+Bazar+Hata+Kushinagar+Uttar+Pradesh&output=embed"
        width="100%"
        height="350"
        style={{ border: 0, borderRadius: "15px" }}
        loading="lazy"
      ></iframe>

    </div>

  </div>

</section>
      {/* Footer */}
      <footer className="footer">
        © 2026 Rama Technical Institute. All Rights Reserved.
      </footer>

    </>
  );
}

export default App;