module.exports = {
	title: 'Oswald Labs Help',
	ga: 'UA-79176349-12',
	themeConfig: {
		search: false,
		sidebar: {
			'/usage-guidelines/': [
				'/usage-guidelines/',
				'/usage-guidelines/modes',
				'/usage-guidelines/browsers',
				'/usage-guidelines/do-not-track',
				'/usage-guidelines/cookies'
			],
			'/developers/': [
				'/developers/',
				'/developers/installation',
				'/developers/api',
				'/developers/widget',
				'/developers/events',
				'/developers/tracking',
				'/developers/modes',
				'/developers/integrations',
				'/developers/embeds',
				'/developers/billing'
			],
		},
	  nav: [
			{ text: 'Usage Guidelines', link: '/usage-guidelines/' },
			{ text: 'Developer Documentation', link: '/developers/' },
			{ text: 'Changelog', link: 'https://opensource.oswaldlabs.com/changelog/' },
			{ text: 'Oswald Labs Platform', link: 'https://oswaldlabs.com/platform/' }
	  ]
	}
  }