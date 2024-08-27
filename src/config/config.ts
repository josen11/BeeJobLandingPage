// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Talento Local. Plataforma de Empleo y Gestión Laboral',
	siteDescription:
		'Talento Local es una plataforma que conecta empresas con talento local, especializada en crear oportunidades laborales y mejorar la empleabilidad.',
	ogImage: '/og.png',
	logo: {
		src: '/logo-talento-local.svg',
		alt: 'Talento Local. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
