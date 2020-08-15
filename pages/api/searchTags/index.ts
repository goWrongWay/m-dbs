import { NextApiRequest, NextApiResponse } from 'next'
import { sampleSearchTags } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!Array.isArray(sampleSearchTags)) {
            throw new Error('Cannot find user data')
        }

        res.status(200).json(sampleSearchTags)
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler
