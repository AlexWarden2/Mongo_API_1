const express = require('express')
const { 
    createCat, getCat, getCats, deleteCat, updateCat
} = require('../controllers/catController')

const router = express.Router()

router.get('/', getCats)
router.get('/:id', getCat)
router.post('/', createCat)
router.delete('/:id',deleteCat)
router.patch('/:id', updateCat)

module.exports = router
