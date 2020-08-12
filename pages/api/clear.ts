import { NextApiRequest, NextApiResponse } from 'next'
export default (_req: NextApiRequest, res: NextApiResponse) => {
    // Clears the preview mode cookies.
    // This function accepts no arguments.
    res.clearPreviewData()
    // ...
    res.end('clear prevew data')
}
