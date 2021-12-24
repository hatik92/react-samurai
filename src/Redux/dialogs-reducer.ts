const ADD_MESSAGE = "ADD_MESSAGE";
// const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
type Users = {
    id:number
    name:string
}
type Messages = {
    id:number
    message:string
}
let initialState = {
    users: [
        { id: 1, name: "Dimich" },
        { id: 2, name: "Tigran" },
        { id: 3, name: "Armine" },
        { id: 4, name: "Hranto" },
        { id: 5, name: "Lyova" }
    ] as Array<Users>,
    messages: [
        {id: 1, message: "hi" },
        {id: 2, message: "how are you?" },
        {id: 3, message: "good, thanks" },
        {id: 4, message: "yo" },
        {id: 5, message: "yo" },
        {id: 6, message: "yo" },
    ] as Array<Messages>,
}

const dialogsReducer = (state = initialState, action: any) => {
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
type SendMessageActionType = {
    type: typeof ADD_MESSAGE
    text: string
}
export const sendMessage = (text:string): SendMessageActionType => ({type: ADD_MESSAGE, text})

export default dialogsReducer;