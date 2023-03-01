import E from 'express'
const A = E()
const p = 3000
const h = '127.0.0.1'

A.get('/', (req,res) => {
    res.send('<h1>Ana Sayfa</h1>')
})
A.listen(p,h, () => {
    console.log(`Uygulama http://${h}:${p} adresinde çalıştı.`)
})
