import constants from "./constants"
const { SET_JOB, ADD_JOB, REMOVE_JOB } = constants
export const initState = {
    job: '',
    jobs: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return { ...state, job: action.payload }
        case ADD_JOB:
            return { ...state, jobs: [...state.jobs, action.payload] }

        case REMOVE_JOB: {
            const newJOB = [...state.jobs]
            newJOB.splice(action.payload, 1)
            return { ...state, jobs: newJOB }
        }
        default:
            throw new Error("something wrong")
    }
}

export default reducer