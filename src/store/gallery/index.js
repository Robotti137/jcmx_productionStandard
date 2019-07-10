import {
    getImages
} from "@/api"
export default {
    namespaced: true,
    state: {
        imageList: [],
        pagination: {},
        rows: 10,
        currentPage: 1,
        search: {}
    },
    mutations: {
        setImageList(state, value) {
            state.imageList = value;
        },
        setPagination(state, value) {
            state.pagination = value;
        },
        setRows(state, value) {
            state.rows = value;
        },
        setCurrentPage(state, value) {
            state.currentPage = value;
        },
        setSearch(state, value) {
            state.search = value;
        }
    },
    actions: {
        getImageList({
            commit
        }) {
            let {
                currentPage,
                rows,
                search,
                imageList
            } = this.state.gallery;
            getImages({
                currentPage,
                rows,
                search
            }).then(data => {
                if (data.status === 1) {
                    let list = [...imageList, ...data.list];
                    commit('setImageList', list);
                    commit('setPagination', data.pagination);
                }
            })
        }
    }
}