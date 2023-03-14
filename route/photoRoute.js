import E  from 'express'
import * as photoCont from '../cont/photoCont.js'

const router = E.Router()

router
.route('/')
.post(photoCont.createPhoto)
.get(photoCont.getAllPhoto)

export default router