import { ImageResponse } from '@vercel/og/dist/index.edge';
// import OGImage from './OGImage.tsx';
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

export default eventHandler((event) => {
  // defaultContentType(event, 'text/html')
  // defaultContentType(event, 'image/png')
  // setResponseHeader(event, 'Cache-Control', 'public,max-age=31536000')

  const response = new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        👋 Hello world
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )

  return sendWebResponse(event, response)
})
