import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <section className="bg-[#0067B1] text-white p-8 md:p-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="mb-8">For general enquiries</p>

          <div className="mb-6">
            <h3 className="font-semibold">Address :</h3>
            <p>110, 16th Road, Chembur, Mumbai - 400071</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">Phone :</h3>
            <p>+91 22 25208822</p>
          </div>

          <div>
            <h3 className="font-semibold">Email :</h3>
            <p>info@supremegroup.co.in</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full name"
            className="bg-transparent border-b border-gray-300 outline-none w-full p-2"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-transparent border-b border-gray-300 outline-none w-full p-2"
            required
          />

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="bg-transparent border-b border-gray-300 outline-none w-full p-2"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={3}
            className="bg-transparent border-b border-gray-300 outline-none w-full p-2"
          ></textarea>

          <button
            type="submit"
            className="border border-gray-300 py-2 px-8 rounded-full hover:bg-white hover:text-blue-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
    
  );
};

export default ContactForm;
