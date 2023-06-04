const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem, activateItem } = require("../controllers/deportes");


router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', createItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

router.put('/activate/:id', activateItem);


module.exports = router