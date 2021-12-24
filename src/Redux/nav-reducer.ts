type nav_item = {
    item: string
    link: string
}
let initialState = {
    nav_items: [
        { item: "Profile", link: "/profile"},
        { item: "Users", link: "/users"},
        { item: "Messages", link: "/messages"},
        { item: "News", link: "/news"},
        { item: "Music", link: "/music"},
        { item: "Settings", link: "/settings"},
    ] as Array<nav_item>,
}

const navReducer = (state = initialState, action:any) => {
    return state
}


export default navReducer;