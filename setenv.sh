#!/bin/bash
if [[ $1 == 'prod' ]]
then
  sed -i 's/handpoint.io/handpoint.com/g' docusaurus.config.js
  sed -i "s/tmsdoc.handpoint.io/tmsdoc.handpoint.com/g" docusaurus.config.js
  sed -i 's/includeCurrentVersion: true, \/\/ dev/includeCurrentVersion: false, \/\/ dev/g' docusaurus.config.js
  sed -i "s/organizationName: 'handpointdev'/organizationName: 'handpoint'/g" docusaurus.config.js
  sed -i "s/projectName: 'handpointdev.github.io'/projectName: 'handpoint.github.io'/g" docusaurus.config.js
  sed -i 's/tmsdoc.handpoint.com/tmsdoc.handpoint.com/g' static/CNAME
else
  sed -i 's/handpoint.com/handpoint.io/g' docusaurus.config.js
  sed -i "s/tmsdoc.handpoint.com/tmsdoc.handpoint.io/g" docusaurus.config.js
  sed -i 's/includeCurrentVersion: false, \/\/ dev/includeCurrentVersion: true, \/\/ dev/g' docusaurus.config.js
  sed -i "s/organizationName: 'handpoint'/organizationName: 'handpointdev'/g" docusaurus.config.js
  sed -i "s/projectName: 'handpoint.github.io'/projectName: 'handpointdev.github.io'/g" docusaurus.config.js
  sed -i 's/tmsdoc.handpoint.com/tmsdoc.handpoint.io/g' static/CNAME
fi