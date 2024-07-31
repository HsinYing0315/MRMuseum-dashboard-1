export default defineEventHandler(async (event) => {
    try {
        $fetch('http://140.119.19.21:3000/visitor').then((res) => {
            console.log(res)
        })
    } catch (error) {
        console.log(error)
    }
})