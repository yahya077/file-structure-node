const router = require('express').Router();
const AuthController = require('../../app/http/controllers/client/AuthController');
const AuthMiddleware = require('../../app/http/middleware/AuthMiddleware');
const validate = require('../../app/providers/ValidatorServiceProvider');
const err = require('../../app/helpers/ValidationErrorResponse');
const jwt = require('../../app/http/middleware/jwt');



router.post('/login', validate.login(), err.checkValidationError, jwt.encode,AuthController.login);

router.post('/register', validate.register(), err.checkValidationError, AuthMiddleware.register, AuthController.register);






module.exports = router;