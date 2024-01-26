#!/bin/bash
if [[ $1 == 'prod' ]]
then
  sed -i 's/handpoint.io/handpoint.com/g' docusaurus.config.js
  sed -i "s/tmsdoc.handpoint.io/tmsdoc.handpoint.com/g" docusaurus.config.js
  sed -i 's/includeCurrentVersion: true, \/\/ dev/includeCurrentVersion: false, \/\/ dev/g' docusaurus.config.js
  sed -i "s/organizationName: 'tmsapidev'/organizationName: 'tmsapiprod'/g" docusaurus.config.js
  sed -i "s/projectName: 'tmsapidev.github.io'/projectName: 'tmsapiprod.github.io'/g" docusaurus.config.js
  sed -i 's/tmsdoc.handpoint.com/tmsdoc.handpoint.com/g' static/CNAME
else
  sed -i 's/handpoint.com/handpoint.io/g' docusaurus.config.js
  sed -i "s/tmsdoc.handpoint.com/tmsdoc.handpoint.io/g" docusaurus.config.js
  sed -i 's/includeCurrentVersion: false, \/\/ dev/includeCurrentVersion: true, \/\/ dev/g' docusaurus.config.js
  sed -i "s/organizationName: 'tmsapiprod'/organizationName: 'tmsapidev'/g" docusaurus.config.js
  sed -i "s/projectName: 'tmsapiprod.github.io'/projectName: 'tmsapidev.github.io'/g" docusaurus.config.js
  sed -i 's/tmsdoc.handpoint.com/tmsdoc.handpoint.io/g' static/CNAME
fi