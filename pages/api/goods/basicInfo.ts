import { NextApiRequest, NextApiResponse } from 'next'
import { sampleGoodsBasicInformation } from '../../../utils/sample-data'
import apiOutput from '../../../utils/apiOutput'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log(_req.query.id, 23)
        res.status(200).json(apiOutput(sampleGoodsBasicInformation))
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler
