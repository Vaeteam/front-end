<script setup>
    import axios from "axios"
    const url = 'https://pokeapi.co/api/v2/pokemon'

    const poke_id = [1, 2, 3, 4]
    const poke = []
    axios.get(url).then(function (response) {
        const pokemon = response.data.results
        console.log(pokemon);
        // const props = defineProps({
        //     pokemon:{
        //         type: Array,
        //         default: response.data
        //     }
        // })
    }).catch(function (error) {
        console.log(error)
    }).then(function () {})

    function get_poke(){
        for (const id of poke_id) {
            axios.get(url + "/" + id).then(function (response) {
                const pokemon_data = response.data
                poke.push(pokemon_data)
            }).catch(function (error) {
                console.log(error)
            }).then(function () {})
        }
        console.log(poke)
    }

</script>
    
<template>
    <button @click="get_poke">Click here to see pokemon on your screen</button>
</template>