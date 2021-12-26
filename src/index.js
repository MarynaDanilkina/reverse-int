module.exports = function reverse (n) {
    let str = String(n)
    const str1 = str.replace(/-/g,'')
    const arr = Array.from(str1)
    const rev = arr.reverse()
    const str2 =rev.join('')
    const result = Number(str2)
    return result
}
