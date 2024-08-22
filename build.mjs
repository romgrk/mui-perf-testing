#!/usr/bin/env zx

$.verbose = true

// Build packages

await $`cd ~/src/material-ui && pnpm run release:build`


// Copy here

const packages =
  fs.readdirSync('/home/romgrk/src/material-ui/packages')
    .filter(name => name.startsWith('mui-') && !name.includes('macros') && !name.includes('joy'))

console.log(packages)

await $`mkdir -p ./node_modules/@mui`

for (const name of packages) {
  const sourcePath = `/home/romgrk/src/material-ui/packages/${name}`
  const data = JSON.parse(fs.readFileSync(`${sourcePath}/package.json`))
  const packageName = data.name

  const targetPath = `./node_modules/${packageName}`

  await $`rm -rf ${targetPath}`
  await $`cp -r ${sourcePath}/build ${targetPath}`
}


// Build

await $`pnpm run build`
