import { Page, PageContent, Main } from 'grommet';

import { Header } from '../components/header';
import { ServicesList } from '../components/services-list';

const services = [
  {
    name: 'Postgres',
    image: {
      tag: 'postgres:bullseye-14',
      icon: 'https://d1q6f0aelx0por.cloudfront.net/product-logos/library-postgres-logo.png',
    },
  },
  {
    name: 'Redis',
    image: {
      tag: 'redis:6.2.7-alpine',
      icon: 'https://d1q6f0aelx0por.cloudfront.net/product-logos/library-redis-logo.png',
    },
  },
];

export const HomePage = () => (
  <Page fill>
    <Header />
    <PageContent fill>
      <Main
        fill
        justify="center"
        direction="row"
        pad={{ vertical: 'xlarge', horizontal: 'medium' }}
      >
        <ServicesList width={{ max: '500px' }} services={[]} />
      </Main>
    </PageContent>
  </Page>
);
