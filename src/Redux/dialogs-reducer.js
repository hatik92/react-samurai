const ADD_MESSAGE = "ADD_MESSAGE";
// const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

let defaultState = {
    users: [
        { name: "Dimich", id: 1 },
        { name: "Tigran", id: 2 },
        { name: "Armine", id: 3 },
        { name: "Hranto", id: 4 },
        { name: "Lyova", id: 5 }
    ],
    messages: [
        {id: 1, message: "hi" },
        {id: 2, message: "how are you?" },
        {id: 3, message: "good, thanks" },
        {id: 4, message: "yo" },
        {id: 5, message: "yo" },
        {id: 6, message: "yo" },
    ],
}

const dialogsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            console.log("AAA");
            let newMessage = action.text
            return {
                ...state,
                messages: [ ...state.messages, {id: 7, message: newMessage }]
            }
        default:
            return state
    }
}

export const sendMessage = (text) => ({type: ADD_MESSAGE, text})

export default dialogsReducer;