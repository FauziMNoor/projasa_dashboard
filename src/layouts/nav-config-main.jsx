
import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  {
    title: 'Dashboard',
    path: CONFIG.auth.redirectPath,
    icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" />,
  },
];
