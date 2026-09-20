import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2 flex flex-col items-center text-center md:items-start md:text-left">
    <div className="mb-4 flex items-center justify-center md:justify-start">
        <img src={logo} alt="Dev Stack" />
    </div>
    
    <p className="max-w-md text-sm leading-6 text-slate-400">
        Curated tools, technologies, and resources for developers
        building modern software.
    </p>
    
    <div className="mt-5 flex items-center justify-center md:justify-start gap-3 text-sm font-medium text-slate-500">
        <a href="#" className="transition hover:text-gray-900">GitHub</a>
        <span>•</span>
        <a href="#" className="transition hover:text-gray-900">Twitter</a>
        <span>•</span>
        <a href="#" className="transition hover:text-gray-900">LinkedIn</a>
    </div>
</div>

          <div className="hidden md:block">
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-800">
              PRODUCT
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-gray-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-800">
              COMPANY
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-gray-700">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-800">
              LEGAL
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-gray-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-row justify-between items-center gap-4 border-t border-gray-100 pt-7 text-[10px] sm:text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-3 sm:gap-6">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;