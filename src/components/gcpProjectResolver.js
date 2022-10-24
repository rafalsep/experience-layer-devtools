const resolveGcpProject = request => {
  const { hostname } = new URL(request.url);
  if (hostname.includes('sab-dev-ts-dw-explyr-8756')) {
    return 'sab-dev-ts-dw-explyr-8756';
  }
  if (hostname.includes('dw.el.certint.sabre.com')) {
    return 'sab-certpci-int-ts-dw-el-4147';
  }
  if (hostname.includes('dx-dw-cert.sabre.com')) {
    return 'sab-certpci-ts-dw-el-6522';
  }
  if (hostname.includes('dx-dw.sabre.com')) {
    return 'sab-prodpci-ts-dw-el-4951';
  }
  if (hostname.includes('sab-dev-ts-dx-explyr-5321')) {
    return 'sab-dev-ts-dx-explyr-5321';
  }
  if (hostname.startsWith('dx.dx')) {
    if (hostname.includes('dev')) {
      return 'sab-dev-ts-dx-explyr-5321';
    }
    if (hostname.includes('cert')) {
      return 'sab-certpci-ts-dx-el-1274';
    }
    return 'sab-prodpci-ts-dx-el-5561';
  }
  return undefined;
};

export { resolveGcpProject };
