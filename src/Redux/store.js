import dialogsReducer from "./dialogs-reducer";
import imagesReducer from "./images-reducer";
import navReducer from "./nav-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        nav: {
            nav_items: [
                { item: "Profile", link: "/profile"},
                { item: "Messages", link: "/messages"},
                { item: "News", link: "/news"},
                { item: "Music", link: "/music"},
                { item: "Settings", link: "/settings"},
            ],
        },
        dialogs: {
            users: [
                { name: "Dimich", id: 1 },
                { name: "Tigran", id: 2 },
                { name: "Armine", id: 3 },
                { name: "Hranto", id: 4 },
                { name: "Lyova", id: 5 }
            ],
            messages: [
                { message: "hi" },
                { message: "how are you?" },
                { message: "good, thanks" },
                { message: "yo" },
                { message: "yo" },
                { message: "yo" },
            ],
            newMessageText: ""
        },
        profile: {
            posts: [
                { id:1, like:24, post: "hello!" },
                { id:2, like:21, post: "how are you?" },
                { id:3, like:53, post: "good!" },
                { id:4, like:12, post: "anh how are you?!" },
                { id:5, like:1, post: "yoo!" },
                { id:6, like:9, post: "chuvaaaaak!" },
                { id:7, like:7, post: "this is fineeee!" },
            ],
            newPostText: "it-kamasutra.com"
        },
        images: {
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/600px-DC_Comics_logo.png"
        }
    },
    getState() {
        return this._state
    },
    _renderEntireTree() {
        alert("state is changed")
    },
    subscribe(obst) {
        this._renderEntireTree = obst
    },
    dispatch (action) {
        profileReducer(this._state.profile, action)
        dialogsReducer(this._state.dialogs, action)
        this._renderEntireTree(this._state)
    }
}





export default store;