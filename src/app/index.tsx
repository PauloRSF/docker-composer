import { Page, PageContent, Main } from 'grommet';

import { Header } from '../components/header';
import { ServicesList } from '../components/services-list';

export const App = () => (
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
