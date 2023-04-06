import type SDK from '@nestia/sdk';

export const NESTIA_CONFIG: SDK.INestiaConfig = {
  input: 'src/controllers',
  output: 'src/sdk',
  swagger: {
    output: 'dist/swagger.json',
  },
};

export default NESTIA_CONFIG;
