/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
		textShadow: {
			sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
			md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
			lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
		 },
		colors:{
			background: "var(--background)",
			secondary:"var(--secondary)",
			sidebarBg: "var(--sidebar-bg)",
			colorSidebar: "var(--hoverSideBar)",
			title: "var(--title)",
		},
		fontSize:{
			base:"var(--base)",
		}
    },
  },
  plugins: [
	function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      })
	},
  ],
}