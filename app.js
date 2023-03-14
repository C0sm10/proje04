import E from 'express'
import D from'dotenv'
import C from './db.js'
import pageRoute from './route/pageRoute.js'
import photoRoute from './route/photoRoute.js'

D.config()
const A = E()
C()

const p = process.env.p
const h = process.env.h

A.set('views', 'views')
A.set('view engine', 'pug')
A.use(E.static ('pub'))
A.use(E.json())

A.use('/', pageRoute)
A.use('/about', pageRoute)
A.use('/photo', photoRoute)


A.listen(p,h, () => {
    console.log(`Uygulama http://${h}:${p} adresinde çalıştı.`)
})
