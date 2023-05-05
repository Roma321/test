function parseUrl(url) {
    arr = url.split('/')
    res = {}
    res.href = url
    res.protocol = arr[0]
    res.host = arr[2]
    res.origin = `${arr[0]}//${arr[2]}`
    res.port = arr[2].split(':')[1]
    res.hash = `#${arr.at(-1).split('#')[1]}`
    res.hostName = arr[2].split(':')[0]
    s = '/'
    for (let i = 3; i < arr.length; i++) {
        if (arr[i].includes('?')) {
            s += arr[i].split('?')[0]
            break
        }
        s+=`${arr[i]}/`
    }
    res.path = s
    return res
}

let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')
console.log(a)