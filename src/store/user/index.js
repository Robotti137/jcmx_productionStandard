import {
    getUsers
} from "@/api";
import {
    formatTime
} from '@/utils/time'
export default {
    namespaced: true,
    state: {
        userList: [],
        pagination: {},
        rows: 10,
        currentPage: 1,
        search: {}
    },
    mutations: {
        setUserList(state, value) {
            state.userList = value;
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
        getUserList({
            commit
        }) {
            let {
                currentPage,
                rows,
                search
            } = this.state.user;
            getUsers({
                currentPage,
                rows,
                search
            }).then(data => {
                if (data.status === 1) {
                    data.list.forEach((item) => {
                        item.create_time = formatTime(new Date(item.create_time)).substring(0, 16);
                    });
                    commit('setUserList', data.list);
                    commit('setPagination', data.pagination);
                }
            })
        }
    }
}