/*
 * 开启preview模式，通过setPreviewData设置你的cookie 验证信息
 *
 * */
import { NextApiRequest, NextApiResponse } from 'next'
export default (_req: NextApiRequest, res: NextApiResponse) => {
    res.setPreviewData({})
    res.end('Preview mode enabled')
}
