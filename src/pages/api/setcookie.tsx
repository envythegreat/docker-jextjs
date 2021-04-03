import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
export default (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req.body.data)
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(
      "mytest",
      JSON.stringify(req.body),
      {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      }
    )
  )
  res.statusCode = 200
  res.json({ success: true })
}