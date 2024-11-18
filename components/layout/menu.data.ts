export interface MenuData {
	name:string,
	icon:string,
	url:string,
}

export const MENU_DATA:MenuData[] = [
	{
		name:'Home',
		icon:'radix-icons:dashboard',
		url:'/',
	},
	{
		name:'Customers',
		icon:'fluent:receipt-28-regular',
		url:'/customers',
	},
	{
		name:'Payments',
		icon:'ph:contactless-payment',
		url:'/payments',
	},
	{
		name:'Products',
		icon:'ep:goods',
		url:'/products',
	},
	{
		icon: 'mingcute:group-line',
		name:'Orders',
		url:'/orders'
	},
	{
		icon: 'fluent:person-feedback-48-regular',
		name:'Feedback',
		url:'/feedback'
	},
	{
		icon: 'radix-icons:gear',
		name:'Settings',
		url:'/settings'
	},
	{
		icon: 'radix-icons:question-mark',
		name:'Help center',
		url:'/help'
	}
]