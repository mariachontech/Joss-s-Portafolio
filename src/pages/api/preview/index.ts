import type { NextApiRequest, NextApiResponse } from 'next'


export default function preview(req: NextApiRequest, res: NextApiResponse){
    console.log("hola perros");
    
    res.setPreviewData({})
    res.writeHead(307,{Location:'/'})
    res.end()
}