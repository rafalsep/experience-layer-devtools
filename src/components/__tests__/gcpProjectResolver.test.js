import { resolveGcpProject } from '../gcpProjectResolver';

test('Should return dw dev project', () => {
  expect(resolveGcpProject({ url: 'https://develop.sab-dev-ts-dw-explyr-8756.dev.sabre-gcp.com/graphql?downlineEnv=cert' })).toEqual('sab-dev-ts-dw-explyr-8756');
});

test('Should return dw cert int project', () => {
  expect(resolveGcpProject({ url: 'https://dw.el.certint.sabre.com/api/graphql' })).toEqual('sab-certpci-int-ts-dw-el-4147');
});

test('Should return dw cert project', () => {
  expect(resolveGcpProject({ url: 'https://dx-dw-cert.sabre.com/api/graphql' })).toEqual('sab-certpci-ts-dw-el-6522');
});

test('Should return dw prod project', () => {
  expect(resolveGcpProject({ url: 'https://dx-dw.sabre.com/api/graphql' })).toEqual('sab-prodpci-ts-dw-el-4951');
});
