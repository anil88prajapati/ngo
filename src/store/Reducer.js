
const reducer = (state, action) => {
    switch (action.type) {
        case 'RESIZE':
            return { ...state, currentScreenSize: action.payload }
        default:
            return { ...state }
    }
}
export default reducer