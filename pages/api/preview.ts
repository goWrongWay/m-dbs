/*
 * 开启preview模式，通过setPreviewData设置你的测试数据
 * 定义一些json数据 并引入，将这些数据返回。
 * */
import { NextApiRequest, NextApiResponse } from 'next'
export default (_req: NextApiRequest, res: NextApiResponse) => {
    res.setPreviewData({ a: 1 })
    res.end('Preview mode enabled')
}
