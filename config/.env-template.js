const envBuild = {
  'rest-server': [
    'DEBUG=TRUE',
    'NODE_ENV=test',
    'PORT=3000',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
  ],
  'smtp-server': [
    'DEBUG=TRUE',
    'NODE_ENV=test',
    'PORT=8080',
    'PASSWORD=',
    'EMAIL=',
    'SECRET_KEY=',
    'LOCAL_USER=root',
    'LOCAL_HOST=localhost',
    'AWS_USER=',
    'AWS_HOST=',
    'AWS_PASSWORD=',
    'AWS_PORT=',
  ],
};

module.exports = envBuild;