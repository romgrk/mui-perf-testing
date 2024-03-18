#!/bin/bash
set -euf
set -o pipefail

# Clean

rm -rf ~/.config/yarn/link/@mui


# Build grid packages

cd ~/src/mui-x
yarn release:build


# Link grid packages

cd ~/src/mui-x/packages/x-data-grid/build
yarn link

cd ~/src/mui-x/packages/x-data-grid-pro/build
yarn link @mui/x-data-grid
yarn link

cd ~/src/mui-x/packages/x-data-grid-premium/build
yarn link @mui/x-data-grid
yarn link @mui/x-data-grid-pro
yarn link

cd ~/src/mui-x/packages/x-data-grid-generator/build
yarn link @mui/x-data-grid
yarn link @mui/x-data-grid-pro
yarn link @mui/x-data-grid-premium
yarn link



# Link here

cd ~/src/grid-perf-testing

yarn link @mui/x-data-grid
yarn link @mui/x-data-grid-pro
yarn link @mui/x-data-grid-premium
yarn link @mui/x-data-grid-generator


# Build

yarn build
