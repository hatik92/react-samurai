import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'c77719ea-5d7e-4119-b6bf-2b701a225953'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    profilePage(id) {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
    profileStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, {status}).then(response => response.data)
    },
    savePhoto(imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}
export const authAPI = {
    authUser() {
        return instance.get(`auth/me`)
    },
    loginUser(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logoutUser() {
        return instance.delete(`auth/login`)
    },

}
