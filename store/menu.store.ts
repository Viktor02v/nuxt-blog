export const useMenuStore = defineStore('menu',{
	state:() => ({
		isMenuOpen: false
	}),
	actions:{
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen; 
		},
	}
})