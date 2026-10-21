// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlighBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
  site: 'https://marekkison.github.io',
  integrations: [
    starlight({
      title: 'My Docs',
      description: 'My blog about programming and technology.',
      plugins: [starlighBlog()],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/marekkison/',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
});
