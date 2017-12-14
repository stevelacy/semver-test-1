const semver = require('semver')

const out0 = semver.inc('3.0.0-alpha.beta.5.4', 'prerelease', 'alpha.beta')
console.log(out0)

const out1 = semver.inc('3.0.0-alpha.beta.5.4', 'prerelease')
console.log(out1)
