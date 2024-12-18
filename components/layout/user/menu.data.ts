export interface MenuData {
	name:string,
	icon:string,
	url:string,
}

export const MENU_DATA:MenuData[] = [
	{
		name:'Profile',
		icon:'radix-icons:dashboard',
		url:'/',
	},
	{
		name:'Create',
		icon:'line-md:file-plus',
		url:'/user/create-blog',
	},
	{
		name:'All Blogs',
		icon:'line-md:list',
		url:'/blogs',
	},
	{
		icon: 'line-md:edit',
		name:'Edit',
		url:'/editing'
	},
	{
		icon: 'fluent:person-feedback-48-regular',
		name:'Feedback',
		url:'/feedback'
	},
	{
		icon: 'eos-icons:rotating-gear',
		name:'Settings',
		url:'/settings'
	},
	{
		icon: 'radix-icons:question-mark',
		name:'Help center',
		url:'/help'
	}
]