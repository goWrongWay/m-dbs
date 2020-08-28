import { NextApiRequest, NextApiResponse } from 'next'
import { sampleCategory } from '../../../utils/sample-data'
import apiOutput from '../../../utils/apiOutput'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        let s = apiOutput(sampleCategory)
        console.log(s, 666)
        res.status(200).json(apiOutput(sampleCategory))
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler
