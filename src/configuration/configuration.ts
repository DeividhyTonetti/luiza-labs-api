export interface DatabaseConfig {
	port: number
	host: string
	user: string
	password: string
	database: string
	url: string
}

export interface SwaggerConfig {
	title: string
	description: string
	version: string
	tag: string
	url: string
}

export const PRODUCT_LUIZA_LABS_ENDPOINT = 'http://challenge-api.luizalabs.com/api/product/'