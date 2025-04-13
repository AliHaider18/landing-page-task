import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa"; // You'll need to install react-icons

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1 text-center md:text-left space-y-6">
            <img
              src="images/logos/footer-logo.webp"
              alt="Logo"
              className="h-10 mx-auto md:mx-0"
            />{" "}
            <p className="text-gray-600 text-sm">
              Experience The Convenience Of Recovery Delivered, Your Trusted
              Source For Online Medication Delivery. We Bring The Pharmacy To
              Your Doorstep, Ensuring Fast, Discreet, And Reliable Service.
              Whether You're Managing A Chronic Condition Or Need A One-Time
              Prescription Filled, We Make The Process Simple And Hassle-Free
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 text-center md:text-left">
            <h3 className="text-xl font-medium text-teal-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/owners"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Owners
                </a>
              </li>
              <li>
                <a
                  href="/tenants"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Tenants
                </a>
              </li>
              <li>
                <a
                  href="/properties"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Properties
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="md:col-span-1 text-center md:text-left">
            <h3 className="text-xl font-medium text-teal-500 mb-4">
              Other Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/medications"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Online Medications
                </a>
              </li>
              <li>
                <a
                  href="/download"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Download App
                </a>
              </li>
              <li>
                <a
                  href="/treatment"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Start Treatment
                </a>
              </li>
              <li>
                <a
                  href="/urgent-care"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  Online Urgent Care
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-600 hover:text-teal-500 transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div className="md:col-span-1 text-center md:text-left">
            <h3 className="text-xl font-medium text-teal-500 mb-4">Contact</h3>
            <p className="mb-6">
              <a
                href="tel:1-866-757-9868"
                className="text-gray-600 hover:text-teal-500 transition"
              >
                1-866-757-9868
              </a>
            </p>

            <h3 className="text-xl font-medium text-teal-500 mb-4">
              Social Media
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-600 hover:text-teal-500 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-teal-500 transition"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-600 hover:text-teal-500 transition"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 text-center md:text-left">
          <p>©2024 - Recovery Delivered | All Right Reserved</p>
          <p className="mt-2 md:mt-0">Designed And Developed By Ropstam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
