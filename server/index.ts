import express from 'express'
import { renderPage } from 'vite-plugin-ssr/server'

const app = express()

// Static assets
app.use(express.static('dist/client'))

// Handle all requests
app.get('*', async (req, res, next) => {
  const pageContextInit = { urlOriginal: req.originalUrl }
  const pageContext = await renderPage(pageContextInit)
  
  // For pages marked with doNotSSR
  if (!pageContext.httpResponse) {
    return res.sendFile('dist/client/index.html')
  }
  
  const { body, statusCode, contentType } = pageContext.httpResponse
  res.status(statusCode).type(contentType).send(body)
})

const port = 3000
app.listen(port)
