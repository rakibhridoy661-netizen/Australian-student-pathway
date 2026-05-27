export default function StudentConsultancyPlatform() {
  const brand = {
    name: 'Aussie Student Pathway',
    email: 'info@aussiestudentpathway.com',
    phone: '+61 480 750 232',
    whatsapp: 'https://wa.me/61480750232',
    location: 'Sydney, Australia',
  };

  const services = [
    {
      icon: '🎓',
      title: 'Course & College Selection',
      desc: 'Guidance to choose suitable courses, colleges, intakes, fees, and study locations in Australia.',
    },
    {
      icon: '📄',
      title: 'Admission Application Support',
      desc: 'Support with application forms, documents, offer letters, and CoE steps.',
    },
    {
      icon: '🇦🇺',
      title: 'Student Visa Guidance',
      desc: 'General support for understanding Australian student visa requirements.',
    },
    {
      icon: '🍽️',
      title: 'Hospitality Pathways',
      desc: 'Guidance for hospitality, cookery, and chef career pathways.',
    },
    {
      icon: '🏠',
      title: 'Settlement Support',
      desc: 'Help with accommodation, transport, and student life in Sydney.',
    },
    {
      icon: '🗣️',
      title: 'English & PTE Guidance',
      desc: 'Help students understand English course and PTE preparation options.',
    },
  ];

  const courses = [
    'Bachelor of Business',
    'Bachelor of Information Technology',
    'Commercial Cookery',
    'Hospitality Management',
    'English / ELICOS',
    'Graduate Diploma Programs',
  ];

  const faqs = [
    {
      q: 'Do you guarantee visas?',
      a: 'No. Visa decisions are made by the Australian Government.',
    },
    {
      q: 'Can you help choose a course?',
      a: 'Yes. We help compare courses, fees, and pathways.',
    },
    {
      q: 'Can I contact through WhatsApp?',
      a: 'Yes. Click the WhatsApp button and message us anytime.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              {brand.name}
            </h1>

            <p className="text-sm text-slate-500">
              Student Consultancy
            </p>
          </div>

          <div className="hidden md:flex gap-6 items-center">

            <a href="#services" className="hover:text-blue-700">
              Services
            </a>

            <a href="#courses" className="hover:text-blue-700">
              Courses
            </a>

            <a href="#faq" className="hover:text-blue-700">
              FAQ
            </a>

            <a
              href="#contact"
              className="bg-blue-700 text-white px-5 py-2 rounded-full"
            >
              Contact
            </a>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-800 to-sky-500 text-white py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Start Your Australian Study Journey 🇦🇺
            </h2>

            <p className="text-lg text-blue-100 mb-8">
              We help international students choose courses, apply to colleges,
              and understand study pathways in Australia.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#contact"
                className="bg-white text-blue-700 px-7 py-4 rounded-2xl font-bold"
              >
                Book Consultation
              </a>

              <a
                href={brand.whatsapp}
                target="_blank"
                className="border border-white px-7 py-4 rounded-2xl font-bold"
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* FORM */}
          <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">

            <h3 className="text-2xl font-bold mb-6">
              Quick Student Enquiry
            </h3>

            <form className="space-y-4">

              <input
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-slate-300"
              />

              <input
                placeholder="Email Address"
                type="email"
                className="w-full p-4 rounded-xl border border-slate-300"
              />

              <input
                placeholder="Phone / WhatsApp"
                className="w-full p-4 rounded-xl border border-slate-300"
              />

              <select className="w-full p-4 rounded-xl border border-slate-300">

                <option>Select Course</option>

                {courses.map((course) => (
                  <option key={course}>{course}</option>
                ))}

              </select>

              <textarea
                rows="4"
                placeholder="Tell us about your study plan"
                className="w-full p-4 rounded-xl border border-slate-300"
              ></textarea>

              <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold">
                Submit Enquiry
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-extrabold mb-4">
              Our Services
            </h2>

            <p className="text-slate-600">
              Professional student consultancy support in Australia.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (

              <div
                key={service.title}
                className="bg-white rounded-3xl p-7 shadow-lg"
              >

                <div className="text-4xl mb-5">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600">
                  {service.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* COURSES */}
      <section id="courses" className="py-20 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-extrabold mb-4">
              Popular Courses
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {courses.map((course) => (

              <div
                key={course}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 font-bold"
              >
                📘 {course}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">

        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-extrabold">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-5">

            {faqs.map((faq) => (

              <div
                key={faq.q}
                className="bg-white border border-slate-200 rounded-2xl p-6"
              >

                <h3 className="font-bold text-lg mb-2">
                  {faq.q}
                </h3>

                <p className="text-slate-600">
                  {faq.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 bg-slate-900 text-white"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          <div>

            <h2 className="text-4xl font-extrabold mb-6">
              Contact Us
            </h2>

            <p className="text-slate-300 mb-8">
              Send your study plans and we’ll help you understand your next steps.
            </p>

            <div className="space-y-4 text-slate-300">

              <p>📍 {brand.location}</p>

              <p>📧 {brand.email}</p>

              <p>📞 {brand.phone}</p>

            </div>

          </div>

          <div className="bg-white text-slate-900 rounded-3xl p-8">

            <form className="space-y-4">

              <input
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-slate-300"
              />

              <input
                placeholder="Email"
                className="w-full p-4 rounded-xl border border-slate-300"
              />

              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full p-4 rounded-xl border border-slate-300"
              ></textarea>

              <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-slate-400 py-10 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h3 className="text-2xl font-bold text-white mb-3">
            {brand.name}
          </h3>

          <p>
            Student consultancy and education support based in Australia.
          </p>

          <p className="mt-6 text-sm">
            © 2026 {brand.name}. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}
