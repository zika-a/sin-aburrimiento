<template>
    <div>
        <div v-for="(item, index) in array" :key="index">{{ item }}</div>
    </div>
</template>

<script>
export default {
    name: "lista-carrito",
    data() {
        return {
            array: ["Amazon", "Disney+", "Netflix"],
        };
    },
    mounted() {
        console.log("ListaCarrito Mounted.");
    },
};
</script>
