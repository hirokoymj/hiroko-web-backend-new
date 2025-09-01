import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  //   schema: './src/schema.graphql',
  schema: 'http://localhost:4000/',
  generates: {
    './src/types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;
