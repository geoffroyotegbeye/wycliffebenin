// Configuration centralisée des styles pour uniformiser le design

export const borderRadius = {
  card: '12px',
  button: '8px',
  input: '8px',
  badge: '9999px', // full rounded
  small: '6px',
  large: '16px',
} as const;

export const shadows = {
  card: '0 2px 8px rgba(0, 0, 0, 0.08)',
  cardHover: '0 8px 24px rgba(0, 0, 0, 0.12)',
  elevated: '0 12px 32px rgba(0, 0, 0, 0.15)',
  button: '0 4px 12px rgba(255, 102, 0, 0.2)',
  none: 'none',
} as const;

export const transitions = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  verySlow: '500ms',
} as const;

export const spacing = {
  section: '5rem', // 80px
  sectionMobile: '3rem', // 48px
  card: '1.5rem', // 24px
  element: '1rem', // 16px
} as const;

export const colors = {
  primary: {
    DEFAULT: '#ff6600',
    50: '#fff5eb',
    100: '#ffe5cc',
    500: '#ff6600',
    600: '#cc5200',
    700: '#993d00',
  },
  secondary: {
    DEFAULT: '#001f5f',
    50: '#e6eaf2',
    100: '#ccd5e5',
    500: '#001f5f',
    600: '#001940',
    700: '#001330',
  },
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
} as const;

// Classes Tailwind réutilisables
export const cardClasses = 'bg-white rounded-card shadow-card hover:shadow-card-hover transition';
export const buttonPrimaryClasses = 'bg-primary text-white px-6 py-3 rounded-button font-semibold hover:bg-primary-600 transition shadow-lg';
export const buttonSecondaryClasses = 'bg-secondary text-white px-6 py-3 rounded-button font-semibold hover:bg-secondary-600 transition';
export const buttonOutlineClasses = 'border-2 border-primary text-primary px-6 py-3 rounded-button font-semibold hover:bg-primary hover:text-white transition';
export const inputClasses = 'w-full px-4 py-3 border-2 border-gray-200 rounded-button focus:border-primary focus:outline-none transition';
export const badgeClasses = 'inline-block px-3 py-1 rounded-full text-xs font-medium';
