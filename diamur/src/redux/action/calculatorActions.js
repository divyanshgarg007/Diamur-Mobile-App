import { CALCULATOR_ACTION_TYPES } from './actionsType';
import * as calculatorServices from '../../services/calculatorServices'
const tileJointRequest = () => {
    return {
        type: CALCULATOR_ACTION_TYPES.TILE_JOINT_REQUEST,
    }
}

const tileJointSuccess = (data) => {
    return {
        type: CALCULATOR_ACTION_TYPES.TILE_JOINT_SUCCESS,
        payload: data,
    }
}

const tileJointFailure = (error) => {
    return {
        type: CALCULATOR_ACTION_TYPES.TILE_JOINT_FAILURE,
        payload: error,
    }
}

export const tileJointAction = () =>
    async (dispatch) => {
        
        dispatch(tileJointRequest())
        try {
            const responseData = await calculatorServices.tileJoint()
            if (responseData?.status === 'success') {
                dispatch(tileJointSuccess(responseData))
            } else {
                dispatch(tileJointFailure(responseData.errors))
            }
        } catch (error) {
            dispatch(tileJointFailure(error?.response?.data))
        }
    }
//Mortel Calculator list
const mortelListRequest = () => {
    return {
        type: CALCULATOR_ACTION_TYPES.MORTEL_LIST_REQUEST,
    }
}

const mortelListSuccess = (data) => {
    return {
        type: CALCULATOR_ACTION_TYPES.MORTEL_LIST_SUCCESS,
        payload: data,
    }
}

const mortelListFailure = (error) => {
    return {
        type: CALCULATOR_ACTION_TYPES.MORTEL_LIST_FAILURE,
        payload: error,
    }
}

export const mortelListAction = () =>
    async (dispatch) => {
        
        dispatch(mortelListRequest())
        try {
            const responseData = await calculatorServices.mortelList()
            if (responseData?.status === 'success') {
                dispatch(mortelListSuccess(responseData))
            } else {
                dispatch(mortelListFailure(responseData.errors))
            }
        } catch (error) {
            dispatch(mortelListFailure(error?.response?.data))
        }
    }
//Mortar joint action 
const mortelJointRequest = () => {
    return {
        type: CALCULATOR_ACTION_TYPES.MORTEL_JOINT_REQUEST,
    }
}

const mortelJointSuccess = (data) => {
    return {
        type: CALCULATOR_ACTION_TYPES.MORTEL_JOINT_SUCCESS,
        payload: data,
    }
}

const mortelJointFailure = (error) => {
    return {
        type: CALCULATOR_ACTION_TYPES.MORTEL_JOINT_FAILURE,
        payload: error,
    }
}

export const mortelJointAction = () =>
    async (dispatch) => {
        
        dispatch(mortelJointRequest())
        try {
            const responseData = await calculatorServices.mortelJoint()
            if (responseData?.status === 'success') {
                dispatch(mortelJointSuccess(responseData))
            } else {
                dispatch(mortelJointFailure(responseData.errors))
            }
        } catch (error) {
            dispatch(mortelJointFailure(error?.response?.data))
        }
    }
//Tile adhesive action
const tileAdhesiveRequest = () => {
    return {
        type: CALCULATOR_ACTION_TYPES.TILE_ADHESIVE_REQUEST,
    }
}

const tileAdhesiveSuccess = (data) => {
    return {
        type: CALCULATOR_ACTION_TYPES.TILE_ADHESIVE_SUCCESS,
        payload: data,
    }
}

const tileAdhesiveFailure = (error) => {
    return {
        type: CALCULATOR_ACTION_TYPES.TILE_ADHESIVE_FAILURE,
        payload: error,
    }
}

export const tileAdhesiveAction = () =>
    async (dispatch) => {
        
        dispatch(tileAdhesiveRequest())
        try {
            const responseData = await calculatorServices.tileAdhesive()
            if (responseData?.status === 'success') {
                dispatch(tileAdhesiveSuccess(responseData))
            } else {
                dispatch(tileAdhesiveFailure(responseData.errors))
            }
        } catch (error) {
            dispatch(tileAdhesiveFailure(error?.response?.data))
        }
    }