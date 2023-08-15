import { AUTH_TYPE } from "../action/authAction";
const initialState = {
    isIntroSliderDone: false,
    userInfo: {},
    isAuthenticated: false,
    isAdmin: false
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AUTH_TYPE.INTROSLIDER: {
            return {
                isIntroSliderDone: true
            }
        }
        case AUTH_TYPE.GET_USER_DETAILS: {
            const data = action.payload
            return {
                ...state,
                isAuthenticated: true,
                userInfo: data,
                isAdmin: data?.roleId == 2 ? true : false
            }
        }
        case AUTH_TYPE.LOGOUT: {
            return {
                userInfo: {},
                isAuthenticated: false,
                isAdmin: false,
                isIntroSliderDone: true
            }
        }
        default:
            return state;
    }
};
export default authReducer;
