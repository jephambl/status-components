const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    'react-native': 'react-native-web'
  };
  return config;
};