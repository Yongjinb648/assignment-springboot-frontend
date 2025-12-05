import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api/guitars',
})

export const getGuitarList = async ({ sort = 'priceAsc', keyword = '' } = {}) => {
    const res = await api.get('', {
        params: {
            sort,
            keyword: keyword || undefined,
        },
    })
    return res.data
}

export const getGuitarDetail = async (id) => {
    const res = await api.get(`/${id}`)
    return res.data
}
