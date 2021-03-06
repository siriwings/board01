import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
     login: {
         name:'',
        status: 'INIT',
        errors: {
            summary: '',
            email: '',
            name: '',
            password: ''
        },
    }, register: {
        status: 'INIT',
        errors: {
            summary: '',
            email: '',
            name: '',
            password: ''
        }
    }
};

export default function authentication(state, action) {
    if (typeof state === "undefined")
        state = initialState;

    switch (action.type) {
        /* LOGIN */
        case types.AUTH_LOGIN:
            return update(state, {
                login: {
                    status: {$set: 'WAITING'}
                }
            });
        case types.AUTH_LOGIN_SUCCESS:
            return update(state, {
                login: {
                    status: {$set: 'SUCCESS'},
                    name: {$set: action.username}
                }
            });
        case types.AUTH_LOGIN_FAILURE:
            return update(state, {
                login: {
                    status: {$set: 'FAILURE'}
                }
            });

            /*REGISTER*/
        case types.AUTH_REGISTER:
            return update(state, {
                register: {
                    status: {$set: 'WAITING'}
                }
            });
        case types.AUTH_REGISTER_SUCCESS:
            return update(state, {
                register: {
                    status: {$set: 'SUCCESS'}
                }
            });
        case types.AUTH_REGISTER_FAILURE:
            return update(state, {
                register: {
                    status: {$set: 'FAILURE'},
                    errors: {
                        summary: {$set: action.errorMessage},
                        email: {$set: action.errorEmail},
                        password: {$set: action.errorPassword},
                        name: {$set: action.errorName}
                    }
                }
            });

        /* LOGOUT */
        case types.AUTH_LOGOUT:
            return update(state, {
                login: {
                    status: {$set: 'INIT'}
                }
            });
        default:
            return state;
    }
}


