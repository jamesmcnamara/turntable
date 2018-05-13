const config = require('config')

const winston = require('winston')

const log = new winston.Logger({
  level: config.log.level
})

// Logger Transports

// Console
const consoleEnabled = config.log.console.enabled
if (consoleEnabled) {
  log.add(winston.transports.Console, {
    colorize: 'all',
    timestamp: true,
    prettyPrint: true,
    depth: config.log.depth, // prevent unlimited
    humanReadableUnhandledException: true,
    formatter: undefined // formatter function
  })
}

// Misc log functions

/* istanbul ignore next */
log.printConfig = () => {
  log.debug('Printing config.', config)
}

module.exports = log
