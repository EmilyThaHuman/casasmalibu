import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import alichemistLogo from '../assets/alichemist.svg'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className={`p-2 rounded-xl transition-colors ${
              isScrolled ? 'bg-white' : 'bg-white/90'
            }`}>
              <img 
                src={alichemistLogo} 
                alt="Alichemist" 
                className="h-8 w-auto"
              />
            </div>
            <span className={`text-2xl font-bold ${
              isHomePage
                ? `transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`
                : 'text-blue-600'
            }`}>
              Casas Malibu
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" current={location.pathname} isScrolled={isScrolled} isHomePage={isHomePage}>Home</NavLink>
            <NavLink to="/properties" current={location.pathname} isScrolled={isScrolled} isHomePage={isHomePage}>Properties</NavLink>
            <NavLink to="/amenities" current={location.pathname} isScrolled={isScrolled} isHomePage={isHomePage}>Amenities</NavLink>
            <NavLink to="/contact" current={location.pathname} isScrolled={isScrolled} isHomePage={isHomePage}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isHomePage
                ? `transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`
                : 'text-blue-600'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg mt-2">
              <MobileNavLink to="/" current={location.pathname}>Home</MobileNavLink>
              <MobileNavLink to="/properties" current={location.pathname}>Properties</MobileNavLink>
              <MobileNavLink to="/amenities" current={location.pathname}>Amenities</MobileNavLink>
              <MobileNavLink to="/contact" current={location.pathname}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

const NavLink = ({ to, children, current, isScrolled, isHomePage }) => (
  <Link
    to={to}
    className={`${
      current === to
        ? 'font-semibold '
        : ''
    }${
      isHomePage
        ? `transition-colors ${
            isScrolled 
              ? 'text-gray-600 hover:text-blue-600' 
              : 'text-white/90 hover:text-white'
          }`
        : 'text-blue-600 hover:text-blue-800'
    }`}
  >
    {children}
  </Link>
)

const MobileNavLink = ({ to, children, current }) => (
  <Link
    to={to}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      current === to
        ? 'bg-blue-600 text-white'
        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
    }`}
  >
    {children}
  </Link>
)

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  current: PropTypes.string.isRequired,
  isScrolled: PropTypes.bool.isRequired,
  isHomePage: PropTypes.bool.isRequired,
}

MobileNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  current: PropTypes.string.isRequired,
}

export default Navbar