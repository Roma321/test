function checkSyntax(str) {
    stack = []
    m = {
        '(': ')',
        '<': '>',
        '[': ']',
        '{': '}'
    }
    const closingSymbols = Object.values(m)
    console.log(closingSymbols)
    for (let c of str) {
        if (c in m) {
            stack.push(c)
        } else if (closingSymbols.includes(c)) {
            if (m[stack.at(-1)] == c) {
                stack.pop()
            } else return 1
        }
    }
    // console.log(stack)
    if (stack.length == 0) return 0
    return 1
}
console.log(checkSyntax("---(++++)----") == 0,
    checkSyntax("") == 0,
    checkSyntax("before ( middle []) after ") == 0,
    checkSyntax(") (") == 1,
    checkSyntax("} {") == 1,
    checkSyntax("<(   >)") == 1,
    checkSyntax("(  [  <>  ()  ]  <>  )") == 0,
    checkSyntax("   (      [)") == 1
)