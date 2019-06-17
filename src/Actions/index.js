import axios from '../Api/RestApi';

export const fetchPost = () => async (dispatch) => {
    const post = await  axios.get('/posts')
    dispatch({
        type : 'FETCH_REQUEST',
        payload: post
    })
}