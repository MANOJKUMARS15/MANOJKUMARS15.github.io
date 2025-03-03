import { useState } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-blue-900 text-white p-6 text-center text-xl font-bold">
      Sri Sai Engineering
    </header>
  );
}

function Home() {
  return (
    <section className="p-8 text-center bg-white shadow-md m-4 rounded-lg">
      <h2 className="text-3xl font-semibold">Welcome to Sri Sai Engineering</h2>
      <p className="mt-4 text-lg">We provide high-precision CNC machining and engineering solutions.</p>
    </section>
  );
}

function About() {
  return (
    <section className="p-8 text-center bg-white shadow-md m-4 rounded-lg">
      <h2 className="text-2xl font-semibold">About Us</h2>
      <p className="mt-2">Sri Sai Engineering specializes in high-quality CNC machining, ensuring precision and reliability.</p>
    </section>
  );
}

function Services() {
  return (
    <section className="p-8 text-center bg-white shadow-md m-4 rounded-lg">
      <h2 className="text-2xl font-semibold">Our Services</h2>
      <ul className="mt-2">
        <li>CNC Milling</li>
        <li>CNC Turning</li>
        <li>Custom Engineering Solutions</li>
      </ul>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }
    alert(`Thank you for contacting us, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="p-8 text-center bg-white shadow-md m-4 rounded-lg">
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input className="border p-2 m-2 w-1/2" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input className="border p-2 m-2 w-1/2" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea className="border p-2 m-2 w-1/2" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
        <button className="bg-blue-900 text-white p-2 rounded" type="submit">Send</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center p-4 mt-4">
      &copy; 2025 Sri Sai Engineering. All rights reserved.
    </footer>
  );
}
