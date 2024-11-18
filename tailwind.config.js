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
		colors:{
			background: "var(--background)",
			sidebarBg: "var(--sidebar-bg)",
			colorSidebar: "var(--hoverSideBar)"
		},
		fontSize:{
			base:"var(--base)",
		}
    },
  },
  plugins: [],
}