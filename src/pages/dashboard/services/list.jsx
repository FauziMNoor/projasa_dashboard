import { CONFIG } from 'src/global-config';

import { ServiceListView } from 'src/sections/service/view';

// ----------------------------------------------------------------------

const metadata = { title: `Layanan Jasa - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>
      <ServiceListView />
    </>
  );
}
