import {
    getLocationOrder
} from "@/api";
import {
    formatTime
} from '@/utils/time'
export default {
    namespaced: true,
    state: {
        orderList: [],
        search: {},
        rows: 10,
        currentPage: 1,
        pagination: {},
        locationUpdateDialogVisible: false,
        locationData: {
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
            installationNature: {
                number: 0,
                type: ""
            },
            other: {
                number: "",
                landscape: "",
                building: "",
                externalDimensions: "",
                innerDimension: ""
            },
            productionType: "",
            locationSandTable: [],
            materialDescription: "",
            installationMethod: "",
            claimSpecificDescription: "",
            locationModelProduction: {
                locationPerformance: [],
                locationItselfPerformance: {
                    referenceMap: "",
                    type: [],
                    description: ""
                },
                locationLight: {
                    type: [],
                    referenceMap: "",
                    description: "",
                    claimContentDescription: ""
                }
            },
            landscapeProduction: {
                landscapePerformance: "",
                gardenStyle: [],
                landscapeRoad: [],
                terrainPerformance: [],
                landscapeLight: [],
                waterPerformanceLight: {
                    referenceMap: "",
                    type: [],
                    description: ""
                },
                crystalLight: [],
                bodyBlock: [],
                referenceMap: [],
                claimBuildDescription: ""
            },
            buildingProduction: {
                buildingFacade: [],
                buildingInteriorFacadeLight: [],
                referenceMap: []
            }
        }
    },
    mutations: {
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
        setLocationData(state, value) {
            state.locationData = value;
        },
        setLocationUpdateDialogVisible(state, value) {
            state.locationUpdateDialogVisible = value;
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
            } = this.state.locationOrder;
            getLocationOrder({
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