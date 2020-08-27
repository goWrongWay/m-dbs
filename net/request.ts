const request = async (url: string) => {
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data
    } catch (e) {
        console.log(e, 'net')
    }
}

export default request
