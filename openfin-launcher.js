const openfinLauncher = require('openfin-launcher')

const launcher = () => {
  openfinLauncher
    .launchOpenFin({ configPath: 'http://localhost:8000/openfin.json' })
    .then(() => { console.log('Successfully launched') })
    .catch(console.error)
}

launcher()