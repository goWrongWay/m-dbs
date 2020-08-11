import { useRouter } from 'next/router'

function useURL() {
    const { pathname, asPath } = useRouter()
    let query = paramsToString(asPath)
    return { pathname, query, asPath }
}

export default useURL

function paramsToString(hash: string) {
    let url = hash
    let obj: any = {}
    let keyValue = []
    let key = '',
        value = ''
    let paraString = url.substring(url.indexOf('?') + 1, url.length).split('&')
    for (let i in paraString) {
        keyValue = paraString[i].split('=')
        key = keyValue[0]
        value = keyValue[1]
        obj[key] = value
    }
    return obj
}
