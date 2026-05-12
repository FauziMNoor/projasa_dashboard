import { CONFIG } from 'src/global-config';

import { CustomerListView } from 'src/sections/customer/view';

// ----------------------------------------------------------------------

const metadata = { title: `Data Pelanggan - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>
      <CustomerListView />
    </>
  );
}
