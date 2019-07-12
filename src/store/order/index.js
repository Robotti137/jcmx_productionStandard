export default {
    namespaced: true,
    state: {
        imgListdialogVisible: false,
        type: "",
        obj: {}
    },
    mutations: {
        setImgListdialogVisible(state, value) {
            state.imgListdialogVisible = value;
        },
        setType(state, value) {
            state.type = value;
        },
        setObj(state, value) {
            state.obj = value;
        }
    },
    actions: {}
}