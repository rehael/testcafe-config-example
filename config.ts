const environmentVariableName = 'env';
const defaultEnvironmentName = 'dev';
const environmentConfigurationFileName = 'environments.json';

const getArgOrEnv = (argName, defaultValue) => {
  let arg = process.argv.find(arg => arg.startsWith(`--${argName}=`));

  return arg?.split('=')[1] ?? process.env[environmentVariableName] ?? defaultValue;
};

export const getEnv = () => getArgOrEnv(environmentVariableName, defaultEnvironmentName);

export const getConfig = () => {
  const fs = require('fs');
  const env = getEnv();

  return JSON.parse(fs.readFileSync(environmentConfigurationFileName, 'utf8'))[env];
};
