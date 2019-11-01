var beefy = require('beefy')
  , http = require('http')


http.createServer(beefy({
    entries: ['entry.ts']
  , cwd: __dirname
  , live: true
  , quiet: false
  , bundlerFlags: ['-t', 'brfs', '-p', 'tsify']
  , unhandled: on404
})).listen(8080)

function on404(req, resp) {
  resp.writeHead(404, {})
  resp.end('sorry folks!')
}
