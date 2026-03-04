import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-100 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-xl font-normal tracking-widest text-neutral-900 uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Applied Korea
          </h2>
          <p className="text-sm text-neutral-400 max-w-xs font-light">
            Connecting creators and brands through data-driven commerce solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">Platform</h3>
            <NavLink to="/how-it-works" className="text-sm text-neutral-500 hover:text-neutral-900">How it works</NavLink>
            <NavLink to="/creators" className="text-sm text-neutral-500 hover:text-neutral-900">Creators</NavLink>
            <NavLink to="/brands" className="text-sm text-neutral-500 hover:text-neutral-900">Brands</NavLink>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">Support</h3>
            <NavLink to="/guidelines" className="text-sm text-neutral-500 hover:text-neutral-900">Guidelines</NavLink>
            <NavLink to="/faq" className="text-sm text-neutral-500 hover:text-neutral-900">FAQ</NavLink>
            <NavLink to="/contact" className="text-sm text-neutral-500 hover:text-neutral-900">Contact</NavLink>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">Legal</h3>
            <NavLink to="/terms" className="text-sm text-neutral-500 hover:text-neutral-900">Terms</NavLink>
            <NavLink to="/privacy" className="text-sm text-neutral-500 hover:text-neutral-900">Privacy</NavLink>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-neutral-300">
          © {new Date().getFullYear()} Applied Korea Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
