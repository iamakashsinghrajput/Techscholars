import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Techscholars, our mission, vision, and the team dedicated to your success.',
};

const teamMembers = [
  { name: 'Akash Singh R', role: 'CEO & Founder', imageUrl: '/images/team-placeholder-1.jpg', bio: 'Visionary leader with 20+ years in tech innovation.' },
  { name: 'ASR', role: 'Chief Technology Officer', imageUrl: '/images/team-placeholder-2.jpg', bio: 'Expert in scalable architectures and emerging technologies.' },
  { name: 'Akash Singh Rajput', role: 'Head of Design & UX', imageUrl: '/images/team-placeholder-3.jpg', bio: 'Passionate about creating intuitive and impactful user experiences.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-gray-800 text-white py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/TechscholarsTeam.png"
            alt="Techscholars Team Collaboration"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">About Techscholars</h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Driving innovation and empowering the future of technology, one solution at a time.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To empower businesses and individuals with cutting-edge technology solutions and comprehensive educational programs, fostering innovation, growth, and success in an ever-evolving digital world.
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a globally recognized leader in technology services and education, known for our expertise, commitment to excellence, and transformative impact on our clients and community.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                 <Image src="/images/TechscholarsTeam2.png" alt="Techscholars working on a project" fill style={{objectFit: 'cover'}}/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {['Innovation', 'Integrity', 'Collaboration', 'Excellence'].map(value => (
                    <div key={value} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-3xl text-red-600 mb-3">
                            {value === 'Innovation' && '💡'}
                            {value === 'Integrity' && '🛡️'}
                            {value === 'Collaboration' && '🤝'}
                            {value === 'Excellence' && '⭐'}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{value}</h3>
                    </div>
                ))}
            </div>
        </div>
      </section>


      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Leadership</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-slate-50 p-6 rounded-lg shadow-lg text-center">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 shadow-md">
                    <Image src={member.imageUrl} alt={member.name} fill style={{objectFit: 'cover'}}/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-red-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Innovate With Us?</h2>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
                Whether you&apos;re looking for expert tech solutions or want to advance your skills, Techscholars is your partner for success.
            </p>
            <div className="space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                <Link
                    href="/services"
                    className="inline-block px-8 py-3 border-2 border-white text-base font-semibold rounded-md text-white hover:bg-white hover:text-red-600 transition-colors"
                >
                    Explore Our Services
                </Link>
                <Link
                    href="/contact"
                    className="inline-block px-8 py-3 border border-transparent text-base font-semibold rounded-md text-red-600 bg-white hover:bg-red-50 transition-colors"
                >
                    Contact Us Today
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}