// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

const currentYear = new Date().getFullYear();

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Talento Local.',
		aboutText:
			'Una plataforma de empleo local diseñada con precisión, responsiva y accesible. Conéctate con talento local y gestiona ofertas laborales de manera eficiente en tu proyecto con Talento Local.',
		logo: {
			src: '/logo-talento-local.svg',
			alt: 'Talento local logo',
			text: 'Talento Local.'
		}
	},
	footerColumns: [
		{
			category: 'Producto',
			subCategories: [
				{
					subCategory: 'Modulos',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				// {
				// 	subCategory: 'Pricing',
				// 	subCategoryLink: '/pricing'
				// },
				// {
				// 	subCategory: 'Changelog',
				// 	subCategoryLink: '/changelog'
				// },
				{
					subCategory: 'Terminos y condiciones',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'Nosotros',
			subCategories: [
				{
					subCategory: 'Somos',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Noticias',
					subCategoryLink: '/blog'
				},
				// {
				// 	subCategory: 'Careers',
				// 	subCategoryLink: '/blog'
				// }
			]
		},
		{
			category: 'Hablanos',
			subCategories: [
				{
					subCategory: 'Contacto',
					subCategoryLink: '/contact'
				},
				// {
				// 	subCategory: 'Support',
				// 	subCategoryLink: '/contact'
				// },
				// {
				// 	subCategory: 'Join us',
				// 	subCategoryLink: '/contact'
				// }
			]
		}
	],
	subFooter: {
		copywriteText: `© Talento local ${currentYear}`
	}	
}
