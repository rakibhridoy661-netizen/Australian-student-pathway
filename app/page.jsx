export default function Home() {
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
      desc: 'Support with application forms, documents, offer letters, CoE steps, and student communication.',
    },
    {
      icon: '🇦🇺',
      title: 'Student Visa Preparation',
      desc: 'General support with documents, study plans, and understanding common student visa requirements.',
    },
    {
      icon: '🍽️',
      title: 'Hospitality & Cookery Pathways',
      desc: 'Guidance for commercial cookery, hospitality management, chef pathways, and career planning.',
    },
    {
      icon: '🏠',
      title: 'Settlement Support',
      desc: 'Help with accommodation tips, student life, transport, part-time job preparation, and local support.',
    },
    {
      icon: '🗣️',
      title: 'English & PTE Guidance',
      desc: 'Help students understand English course options, PTE preparation, and study improvement plans.',
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

  const steps = [
    'Free first discussion',
    'Check your study goal',
    'Shortlist suitable courses',
    'Prepare documents',
    'Apply to college/university',
    'Support until enrolment',
  ];

  const faqs = [
    {
      q: 'Do you guarantee visas?',
      a: 'No. Visa decisions are made by the Australian Government. We provide education and document support only.',
    },
    {
      q: 'Can you help choose a course?',
      a: 'Yes. We can help compare courses, fees, locations, intakes, and future study goals.',
    },
    {
      q: 'Are you a migration agent?',
      a: 'This website is for student consultancy and education support. For legal migration advice, students should speak with a registered migration agent.',
    },
    {
      q: 'Can I contact through WhatsApp?',
      a: 'Yes. Click the WhatsApp button and send your name, current visa status, preferred course, and intake.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-bold text-xl">A</div>
            <div>
              <h1 className="font-bold text-lg leading-tight">{brand.name}</h1>
              <p className="text-xs text-slate-500">Student Consultancy</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#courses" className="hover:text-blue-700">Courses</a>
            <a href="#process" className="hover:text-blue-700">Process</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
            <a href="#contact" className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-sky-500 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_white,_transparent_35%)]"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <p className="inline-flex bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm mb-6">Sydney-based student support for Australia 🇦🇺</p>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Start Your Australian Study Journey With Confidence
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              We help international students choose suitable courses, apply to colleges, prepare documents, and understand study pathways in Australia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-blue-800 px-7 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition">Book Free Consultation</a>
              <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="border border-white/60 px-7 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-800 transition">WhatsApp Now</a>
            </div>
            <p className="mt-6 text-sm text-blue-100">No fake guarantees. Honest education support only.</p>
          </div>

          <div className="bg-white text-slate-900 rounded-3xl p-7 md:p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Quick Student Enquiry</h3>
            <p className="text-slate-600 mb-6">Fill this form and we’ll contact you.</p>
            <form className="space-y-4" action={`mailto:${brand.email}`} method="post" encType="text/plain">
              <input name="Name" required placeholder="Full Name" className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input name="Email" type="email" required placeholder="Email Address" className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input name="Phone" placeholder="Phone / WhatsApp" className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <select name="Interested Course" className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Choose interested course</option>
                {courses.map((course) => <option key={course}>{course}</option>)}
              </select>
              <textarea name="Message" rows="4" placeholder="Tell us your current situation" className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition">Submit Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><h3 className="text-3xl font-extrabold text-blue-700">Sydney</h3><p className="text-slate-600">Based Support</p></div>
          <div><h3 className="text-3xl font-extrabold text-blue-700">6+</h3><p className="text-slate-600">Service Areas</p></div>
          <div><h3 className="text-3xl font-extrabold text-blue-700">Fast</h3><p className="text-slate-600">Response</p></div>
          <div><h3 className="text-3xl font-extrabold text-blue-700">Honest</h3><p className="text-slate-600">Guidance</p></div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-bold mb-2">OUR SERVICES</p>
            <h2 className="text-4xl font-extrabold mb-4">How We Help Students</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Clear support for students who want to study, settle, and grow in Australia.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-3xl p-7 shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-2xl transition">
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-700 font-bold mb-2">POPULAR PATHWAYS</p>
            <h2 className="text-4xl font-extrabold mb-6">Courses Students Commonly Ask About</h2>
            <p className="text-slate-600 text-lg mb-8">We can help you understand course options, fees, intake dates, study duration, and general career direction.</p>
            <a href="#contact" className="inline-block bg-blue-700 text-white px-7 py-4 rounded-2xl font-bold hover:bg-blue-800">Ask About Courses</a>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {courses.map((course) => (
              <div key={course} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 font-bold hover:border-blue-400 transition">📘 {course}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-700 font-bold mb-2">SIMPLE PROCESS</p>
            <h2 className="text-4xl font-extrabold">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={step} className="bg-white rounded-3xl p-7 shadow border border-slate-100">
                <div className="h-12 w-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-bold mb-5">{index + 1}</div>
                <h3 className="text-xl font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">Need Help Choosing Your Study Path?</h2>
          <p className="text-blue-100 text-lg mb-8">Send your details and we will guide you step by step.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="bg-white text-blue-800 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">Message on WhatsApp</a>
            <a href={`mailto:${brand.email}`} className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-800 transition">Email Us</a>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-700 font-bold mb-2">FAQ</p>
            <h2 className="text-4xl font-extrabold">Common Questions</h2>
          </div>
          <div className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sky-300 font-bold mb-2">CONTACT US</p>
            <h2 className="text-4xl font-extrabold mb-6">Book Your Free First Discussion</h2>
            <p className="text-slate-300 text-lg mb-8">Send your current situation, preferred course, and study goal. We will reply with the next steps.</p>
            <div className="space-y-4 text-slate-300">
              <p>📍 {brand.location}</p>
              <p>📧 {brand.email}</p>
              <p>📞 {brand.phone}</p>
            </div>
          </div>
          <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Student Details</h3>
            <form className="space-y-4" action={`mailto:${brand.email}`} method="post" encType="text/plain">
              <input name="Name" required placeholder="Full Name" className="w-full p-4 rounded-xl border border-slate-300" />
              <input name="Email" type="email" required placeholder="Email Address" className="w-full p-4 rounded-xl border border-slate-300" />
              <input name="Phone" placeholder="Phone / WhatsApp" className="w-full p-4 rounded-xl border border-slate-300" />
              <input name="Current Location" placeholder="Current Location / Country" className="w-full p-4 rounded-xl border border-slate-300" />
              <textarea name="Message" rows="5" placeholder="What do you need help with?" className="w-full p-4 rounded-xl border border-slate-300"></textarea>
              <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800">Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-slate-400 py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">{brand.name}</h3>
            <p>Student consultancy and education support based in Australia.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Quick Links</h4>
            <div className="space-y-2">
              <p><a href="#services" className="hover:text-white">Services</a></p>
              <p><a href="#courses" className="hover:text-white">Courses</a></p>
              <p><a href="#contact" className="hover:text-white">Contact</a></p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Important Disclaimer</h4>
            <p className="text-sm leading-relaxed">We provide education consultancy and general student support. We do not guarantee visa outcomes. For legal migration advice, speak with a registered migration agent.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-800 text-sm">
          © 2026 {brand.name}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
