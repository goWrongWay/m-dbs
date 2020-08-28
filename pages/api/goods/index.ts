import { NextApiRequest, NextApiResponse } from 'next'
import { sampleGoodsData } from '../../../utils/sample-data'
import apiOutput from '../../../utils/apiOutput'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!Array.isArray(sampleGoodsData)) {
            throw new Error('Cannot find goods data')
        }

        res.status(200).json(apiOutput(sampleGoodsData))
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler
