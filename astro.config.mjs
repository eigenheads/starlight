import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMermaid from "rehype-mermaid";
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
	markdown: {
		rehypePlugins: [rehypeRaw, rehypeMermaid],
	},
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
				linkedin: 'https://www.linkedin.com/company/astroinc',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
