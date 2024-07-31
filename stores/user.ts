export const useUserStore = defineStore('user', {
    state: () => ({
        visitors: []
    }),
    getters: {
        getVisitors: (state) => state.visitors
    },
    actions: {
        async getVisitor() {
            const res: [] = await $fetch('/api/visitor')
            this.visitors = res
        }
    }
})