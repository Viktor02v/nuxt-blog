export interface BlogCard{
	id:string,
	foto1_url:string,
	about:string,
	description1:string,
	foto2_url:string,
	description2:string,
	creator:{
		name: string,
		email: string
	},
	$createdAt: string,
	title:string,
}
