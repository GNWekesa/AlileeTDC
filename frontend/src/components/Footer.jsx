export default function Footer() {
  return (
    <footer className="bg-[#001C6C] text-white py-10 px-6 font-[Garamond,serif]">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <p className="text-lg mb-2 text-white/90">
          Our mission is to provide transformational education and opportunity to all learners.
        </p>
        <p className="text-sm text-white/80">
          Alilee Transformed is a dedicated educational platform.{" "}
          <a
            href="mailto:alileetransformedltd@gmail.com"
            className="text-[#DA70D6] underline hover:text-pink-400"
          >
            Email us
          </a>{" "}
          to get involved!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-left text-sm">
        {/* About */}
        <div>
          <h4 className="text-[#DA70D6] font-semibold mb-2">About</h4>
          <ul className="space-y-1">
            <li>Our Story</li>
            <li>Our Team</li>
            <li>Vision & Mission</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#DA70D6] font-semibold mb-2">Contact</h4>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>Support</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-[#DA70D6] font-semibold mb-2">Courses</h4>
          <ul className="space-y-1">
            <li>Math: Primary to College</li>
            <li>Science</li>
            <li>Entrepreneurship</li>
            <li>Life Skills</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-[#DA70D6] font-semibold mb-2">Follow Us</h4>
          <div className="flex flex-col space-y-1">
            <a
              href="https://www.facebook.com/alileetransformed"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#DA70D6]"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/alilee_transformed/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#DA70D6]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-white/60 text-xs mt-10 border-t border-[#7b3f00] pt-4">
        <p>© 2025 Alilee Transformed Ltd. All rights reserved.</p>
        <p className="mt-1">
          <a href="#" className="text-[#DA70D6] mx-1 hover:underline">
            Terms
          </a>
          |
          <a href="#" className="text-[#DA70D6] mx-1 hover:underline">
            Privacy
          </a>
          |
          <a href="#" className="text-[#DA70D6] mx-1 hover:underline">
            Accessibility
          </a>
        </p>
      </div>
    </footer>
  );
}
