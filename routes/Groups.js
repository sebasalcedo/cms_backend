/*
 * path: '/api/v1.0/groups/'
 */

const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validateToken');

const {
  deleteGroups,
  getGroups,
  registerGroups,
  updateGroup,
  filterGroupsLines,
  getGruopsById,
  

} = require('../controllers/GroupsControllers');

const router = Router();

router.get('/:id', [validateJWT], getGruopsById);

router.get('/', [validateJWT], getGroups);

router.post(
  '/',
  [
    validateJWT,
    check('name', 'name is required').not().isEmpty(),
    check('idLines', 'line is required').not().isEmpty(),
    check('user', 'user is required').not().isEmpty(),
    validateFields,
  ],
  registerGroups
);

router.put(
  '/:id',
  [
    validateJWT,
    check('name', 'name is required').not().isEmpty(),
    check('idLines', 'line is required').not().isEmpty(),
    check('user', 'user is required').not().isEmpty(),
    validateFields,
  ],
  updateGroup
);


router.delete('/:id/:grupo', [validateJWT], deleteGroups);


router.get('/filterGroups/:id',[validateJWT], filterGroupsLines)

module.exports = router;
