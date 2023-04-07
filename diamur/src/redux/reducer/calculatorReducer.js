import {CALCULATOR_ACTION_TYPES} from '../action/actionsType';

const initialState = {
    tileJointList: {
        loading: false,
        data: null,
        error: null,
    },
    mortelList: {
        loading: false,
        data: null,
        error: null,
    },
    mortarJointList: {
        loading: false,
        data: null,
        error: null,
    },
    tileAdhesiveList: {
        loading: false,
        data: null,
        error: null,
    },
};
const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        //Tilejoint list reducer
        case CALCULATOR_ACTION_TYPES.TILE_JOINT_REQUEST:
            return {
                ...state,
                tileJointList: {
                    ...state.tileJointList,
                    data: null,
                    loading: true,
                    error: null,
                },
            };
        case CALCULATOR_ACTION_TYPES.TILE_JOINT_SUCCESS:
            return {
                ...state,
                tileJointList: {
                    ...state.tileJointList,
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case CALCULATOR_ACTION_TYPES.TILE_JOINT_FAILURE:
            return {
                ...state,
                tileJointList: {
                    ...state.tileJointList,
                    data: null,
                    loading: false,
                    error: action.payload,
                },
            };
            //Mortel list reducer
            case CALCULATOR_ACTION_TYPES.MORTEL_LIST_REQUEST:
                return {
                    ...state,
                    mortelList: {
                        ...state.mortelList,
                        data: null,
                        loading: true,
                        error: null,
                    },
                };
            case CALCULATOR_ACTION_TYPES.MORTEL_LIST_SUCCESS:
                return {
                    ...state,
                    mortelList: {
                        ...state.mortelList,
                        data: action.payload,
                        loading: false,
                        error: null,
                    },
                };
            case CALCULATOR_ACTION_TYPES.MORTEL_LIST_FAILURE:
                return {
                    ...state,
                    mortelList: {
                        ...state.mortelList,
                        data: null,
                        loading: false,
                        error: action.payload,
                    },
                };
                //mortar joint reducer
                case CALCULATOR_ACTION_TYPES.MORTEL_JOINT_REQUEST:
            return {
                ...state,
                mortarJointList: {
                    ...state.mortarJointList,
                    data: null,
                    loading: true,
                    error: null,
                },
            };
        case CALCULATOR_ACTION_TYPES.MORTEL_JOINT_SUCCESS:
            return {
                ...state,
                mortarJointList: {
                    ...state.mortarJointList,
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case CALCULATOR_ACTION_TYPES.MORTEL_JOINT_FAILURE:
            return {
                ...state,
                mortarJointList: {
                    ...state.mortarJointList,
                    data: null,
                    loading: false,
                    error: action.payload,
                },
            };
            //tile adhesive reducer
            case CALCULATOR_ACTION_TYPES.TILE_ADHESIVE_REQUEST:
            return {
                ...state,
                tileAdhesiveList: {
                    ...state.tileAdhesiveList,
                    data: null,
                    loading: true,
                    error: null,
                },
            };
        case CALCULATOR_ACTION_TYPES.TILE_ADHESIVE_SUCCESS:
            return {
                ...state,
                tileAdhesiveList: {
                    ...state.tileAdhesiveList,
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };
        case CALCULATOR_ACTION_TYPES.TILE_ADHESIVE_FAILURE:
            return {
                ...state,
                tileAdhesiveList: {
                    ...state.tileAdhesiveList,
                    data: null,
                    loading: false,
                    error: action.payload,
                },
            };
        default:
            return state;
    }
};

export default calculatorReducer;
