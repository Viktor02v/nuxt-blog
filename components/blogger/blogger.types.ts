export interface BlogCard{
	id:string,
	title:string,
	about:string,
	foto1_url:string,
	description1:string,
	foto2_url:string,
	description2:string,
	creator:{
		name: string,
		email: string,
	},
	$createdAt: string,
}
