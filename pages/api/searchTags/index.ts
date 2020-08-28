import { NextApiRequest, NextApiResponse } from 'next'
import { sampleSearchTags } from '../../../utils/sample-data'
import apiOutput from '../../../utils/apiOutput'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!Array.isArray(sampleSearchTags)) {
            throw new Error('Cannot find user data')
        }

        res.status(200).json(apiOutput(sampleSearchTags))
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler
