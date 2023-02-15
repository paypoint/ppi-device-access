import { registerPlugin } from '@capacitor/core';

import type { PPIDeviceAccessPlugin } from './definitions';

const PPIDeviceAccess = registerPlugin<PPIDeviceAccessPlugin>(
  'PPIDeviceAccess',
  {
    web: () => import('./web').then(m => new m.PPIDeviceAccessWeb()),
  },
);

export * from './definitions';
export { PPIDeviceAccess };
