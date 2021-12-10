
let defaultState = {
    nav_items: [
        { item: "Profile", link: "/profile"},
        { item: "Users", link: "/users"},
        { item: "Messages", link: "/messages"},
        { item: "News", link: "/news"},
        { item: "Music", link: "/music"},
        { item: "Settings", link: "/settings"},
    ],
}

const navReducer = (state = defaultState, action) => {
    return state
}


export default navReducer;