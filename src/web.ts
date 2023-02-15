import { WebPlugin } from '@capacitor/core';

import type { PPIDeviceAccessPlugin } from './definitions';

export class PPIDeviceAccessWeb
  extends WebPlugin
  implements PPIDeviceAccessPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
