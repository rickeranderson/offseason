const packageJson = require('../../version.json');

export const environment = {
  production: true,
  appVersion: packageJson.version,
  lastBuild: packageJson.lastBuild,
  apiBaseUrl: 'https://offseason-prd.azurewebsites.net/api/'
};
