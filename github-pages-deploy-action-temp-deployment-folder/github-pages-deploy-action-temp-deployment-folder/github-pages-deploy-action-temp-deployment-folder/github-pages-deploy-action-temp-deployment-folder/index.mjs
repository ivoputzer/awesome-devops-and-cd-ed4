import {createServer} from 'http'

createServer(requestHandler)
  .listen(80, () => {
    console.log('http listening on http://127.0.0.1:80')
  })

export default function requestHandler (req, res) {
  res.end(JSON.stringify(process.env))
}
