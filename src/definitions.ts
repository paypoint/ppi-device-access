export interface PPIDeviceAccessPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
