import axios from 'axios'

const API_URL = '/goals/'

const createGoal = async(goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL+"create", goalData, config)

    return response.data
}

const getGoals = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL+"getAll", config)

    return response.data
}

const goalService = {
    createGoal,
    getGoals,
}

export default goalService