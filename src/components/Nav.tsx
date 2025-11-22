import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationData } from '../data/navigationData';
import type { NavItem } from '../data/navigationData';

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
    setOpenNestedSubmenu(null);
  };

  const toggleNestedSubmenu = (label: string) => {
    setOpenNestedSubmenu(openNestedSubmenu === label ? null : label);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/accueil" className="text-2xl font-bold" style={{ color: '#001f5f' }}>
              Wycliffe BENIN
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1">
            {navigationData.map((item, index) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.link}
                  className="px-3 py-2 text-sm font-medium transition-colors rounded-md"
                  style={{ color: '#001f5f' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff6600';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#001f5f';
                  }}
                >
                  {item.label}
                </Link>

                {/* Dropdown Level 1 */}
                {item.children && item.children.length > 0 && (
                  <div 
                    className={`absolute mt-0 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-4 py-2 ${
                      index >= navigationData.length - 2 ? 'right-0' : 'left-0'
                    }`} 
                    style={{ borderTopColor: '#ff6600' }}
                  >
                    {item.children.map((child) => (
                      <div key={child.label} className="relative group/nested">
                        <Link
                          to={child.link}
                          className="block px-4 py-2 text-sm transition-colors hover:bg-opacity-10"
                          style={{ color: '#001f5f' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#ff6600';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#001f5f';
                          }}
                        >
                          {child.label}
                          {child.hasSubmenu && child.children && child.children.length > 0 && (
                            <span className="float-right">›</span>
                          )}
                        </Link>

                        {/* Dropdown Level 2 (Nested) */}
                        {child.hasSubmenu && child.children && child.children.length > 0 && (
                          <div className="absolute left-full top-0 ml-1 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 border-t-4 py-2" style={{ borderTopColor: '#ff6600', zIndex: 100 }}>
                            {child.children.map((grandchild) => (
                              <Link
                                key={grandchild.label}
                                to={grandchild.link}
                                className="block px-4 py-2 text-sm transition-colors"
                                style={{ color: '#001f5f' }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#ff6600';
                                  e.currentTarget.style.color = '#ffffff';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = '#001f5f';
                                }}
                              >
                                {grandchild.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
              style={{ color: '#001f5f' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff6600';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#001f5f';
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navigationData.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.link}
                    className="flex-1 block px-3 py-2 text-base font-medium rounded-md"
                    style={{ color: '#001f5f' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff6600';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#001f5f';
                    }}
                    onClick={() => {
                      if (!item.children || item.children.length === 0) {
                        setMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="px-3 py-2"
                      style={{ color: '#001f5f' }}
                    >
                      <svg
                        className={`h-5 w-5 transform transition-transform ${
                          openSubmenu === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile Submenu Level 1 */}
                {openSubmenu === item.label && item.children && item.children.length > 0 && (
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <div key={child.label}>
                        <div className="flex items-center justify-between">
                          <Link
                            to={child.link}
                            className="flex-1 block px-3 py-2 text-sm rounded-md"
                            style={{ color: '#001f5f' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#ff6600';
                              e.currentTarget.style.color = '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#001f5f';
                            }}
                            onClick={() => {
                              if (!child.hasSubmenu || !child.children || child.children.length === 0) {
                                setMobileMenuOpen(false);
                              }
                            }}
                          >
                            {child.label}
                          </Link>
                          {child.hasSubmenu && child.children && child.children.length > 0 && (
                            <button
                              onClick={() => toggleNestedSubmenu(child.label)}
                              className="px-3 py-2"
                              style={{ color: '#001f5f' }}
                            >
                              <svg
                                className={`h-4 w-4 transform transition-transform ${
                                  openNestedSubmenu === child.label ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                          )}
                        </div>

                        {/* Mobile Submenu Level 2 */}
                        {openNestedSubmenu === child.label &&
                          child.children &&
                          child.children.length > 0 && (
                            <div className="pl-4 space-y-1">
                              {child.children.map((grandchild) => (
                                <Link
                                  key={grandchild.label}
                                  to={grandchild.link}
                                  className="block px-3 py-2 text-sm rounded-md"
                                  style={{ color: '#001f5f' }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ff6600';
                                    e.currentTarget.style.color = '#ffffff';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#001f5f';
                                  }}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {grandchild.label}
                                </Link>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
