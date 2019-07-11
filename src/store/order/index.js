export default {
    namespaced: true,
    state: {
        imgListdialogVisible: false,
        type: "",
        imageName: ""
    },
    mutations: {
        setImgListdialogVisible(state, value) {
            state.imgListdialogVisible = value;
        },
        setType(state, value) {
            state.type = value;
        },
        setImageNmae(state, value) {
            state.imageName = value;
        }
    },
    actions: {}
}