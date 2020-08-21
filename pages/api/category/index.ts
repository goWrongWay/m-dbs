import { NextApiRequest, NextApiResponse } from 'next'
import { sampleCategory } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.status(200).json(sampleCategory)
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler
