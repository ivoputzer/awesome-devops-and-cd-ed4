import {createServer} from 'http'

export default function requestHandler (req, res) {
  res.end(JSON.stringify(process.env))
}
