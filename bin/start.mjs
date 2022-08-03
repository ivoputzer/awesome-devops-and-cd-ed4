import {createServer} from 'http'
import requestHandler from '../index.mjs'

createServer(requestHandler)
  .listen(80, () => {
    console.log('http listening on http://127.0.0.1:80')
  })
