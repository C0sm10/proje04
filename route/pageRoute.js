import E  from 'express'
import * as pageCont from '../cont/pageCont.js'

const router = E.Router()

router.route('/').get(pageCont.getIndexPage)
router.route('/about').get(pageCont.getAboutPage)

export default router