// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Talento local logo',
		text: 'Talento local.'
	},
	navItems: [
		{ name: 'Inicio', link: '/' },
		{ name: 'Somos', link: '/about-us' },
		{ name: 'Servicios', link: '/services' },
		{ name: 'Oportunidades', link: '/opportunities' },
		// { name: 'Pricing', link: '/pricing' },
		// { name: 'Modulos', link: '/features' },
		{
			name: 'Recursos',
			link: '#',
			submenu: [
				{ name: 'Blog', link: '/blog' },
				// { name: 'Changelog', link: '/changelog' },
				{ name: 'FAQ', link: '/faq' },
				// { name: 'Terms', link: '/terms' }
			]
		},
		{ name: 'Contacto', link: '/contact' }
	],
	navActions: [{ name: 'Iniciar sesión', link: '/', style: 'primary', size: 'lg' }]
}
