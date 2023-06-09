import { Meta } from '@storybook/react';

import CategoryHero from '../../components/Products/CategoryHero';

export default {
  title: 'Components/Products/CategoryHero',
  component: CategoryHero,
} as Meta<typeof CategoryHero>;

export const Default = {
  args: {
    category: {
      ccid: 'PSAY',
      name: 'Yoga',
      url_path: '/shop/categories/PSAY/activities/yoga',
      parent_ccid: 'PSA0',
      title: 'Yoga',
      desc: '',
      image_url:
        'https://ch.sitecoredemo.com/api/public/content/67343efa0406425da5260603a1c58435?v=33640253',
    },
  },
};
