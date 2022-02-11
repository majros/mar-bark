import axios from 'axios'

export default axios.create({
    baseURL: 'https://vacancies-15604-default-rtdb.europe-west1.firebasedatabase.app/'
})