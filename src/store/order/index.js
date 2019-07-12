import {
    getOrder
} from "@/api";
import {
    formatTime
} from '@/utils/time'
export default {
    namespaced: true,
    state: {
        imgListdialogVisible: false,
        type: "",
        obj: {},
        orderList: [],
        search: {},
        rows: 10,
        currentPage: 1,
        pagination: {},
        orderUpdateDialogVisible: false,
        order: {
            documentNumber: "",
            projectName: "",
            orderDate: "",
            completeDate: "",
            projectPrincipal: "",
            projectPlanner: "",
            salesman: "",
            projectAddress: "",
            projectSandTable: {
                number: 0,
                landscape: "",
                building: "",
                externalDimensions: "",
                innerDimension: ""
            },
            liftingEquipment: {
                number: 0,
                type: ""
            }, //升降设备
            other: {
                number: "",
                landscape: "",
                building: "",
                externalDimensions: "",
                innerDimension: ""
            },
            productionType: "",
            modelBase: {
                projectSandTableType: [],
                referenceMap: "",
                marbleType: "",
                footLineLighting: "",
                description: ""
            },
            buildingProduction: {
                facade: {
                    referenceMap: "",
                    type: "",
                    description: ""
                },
                abs: "",
                innerFacade: {
                    referenceMap: "",
                    type: "",
                    internalLight: "",
                    contourLight: "",
                    description: ""
                },
                businessFacade: {
                    referenceMap: "",
                    type: "",
                    description: ""
                }
            },
            landscapeProduction: {
                landscapePerformance: "",
                gardenScenery: "",
                landscapeRoad: {
                    referenceMap: "",
                    type: "",
                    description: ""
                },
                terrainPerformance: "",
                landscapeLight: [],
                WaterPerformanceLight: {
                    referenceMap: "",
                    type: "",
                    description: ""
                },
                crystalPerformanceLight: [],
                buildingBlock: {
                    referenceMap: "",
                    description: ""
                }
            }
        }
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
        },
        setOrderList(state, value) {
            state.orderList = value;
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
        },
        setOrderUpdateDialogVisible(state, value) {
            state.orderUpdateDialogVisible = value;
        },
        setOrder(state, value) {
            state.order = JSON.parse(JSON.stringify(value));
        }
    },
    actions: {
        getOrderList({
            commit
        }) {
            let {
                currentPage,
                rows,
                search
            } = this.state.order;
            getOrder({
                currentPage,
                rows,
                search
            }).then(data => {
                if (data.status === 1) {
                    data.list.forEach((item) => {
                        item.creatDate = formatTime(new Date(item.creatDate)).substring(0, 16);
                        if (item.orderDate) {
                            item.orderDate = formatTime(new Date(item.orderDate)).substring(0, 10);
                        }
                        if (item.completeDate) {
                            item.completeDate = formatTime(new Date(item.completeDate)).substring(0, 10);
                        }
                    });
                    commit('setOrderList', data.list);
                    commit('setPagination', data.pagination);
                }
            })
        }
    }
}