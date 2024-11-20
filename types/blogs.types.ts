export interface BaseField{
	$createdAt: string
	$id:string
}

export interface Creator extends BaseField{
	name: string
	email:string
	avatar_utl:string
}

export interface Comment extends BaseField{
	text:string
}

export interface Blog extends BaseField {
	comments: Comment[],
	creators:Creator,
	foto1:string,
	description1:string,
	foto2:string,
	description2:string,
	$createdAt: string,
}