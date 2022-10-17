<script setup>
    import axios from "axios"
    const url = 'https://pokeapi.co/api/v2/pokemon'

    const poke_id = [1, 2, 3, 4]
    const poke = []
    const props = defineProps({
            pokemon:{
                type: Array,
                default: []
            }
        })

    axios.get(url).then(function (response) {
        props.pokemon = response.data.results
    }).catch(function (error) {
        console.log(error)
    }).then(function () {})

    function get_poke(){
        for (const id of poke_id) {
            axios.get(url + "/" + id).then(function (response) {
                //const pokemon_data = response.data
                //poke.push(pokemon_data)
                props.pokemon.push(response.data)
            }).catch(function (error) {
                console.log(error)
            }).then(function () {})
        }
        console.log(poke)
    }

    function test_prop(){
        console.log('This is testing for component props')
        console.log(props.pokemon)
    }

</script>
    
<template>
    <button @click="get_poke">Click here to get pokemon data</button>
    <button @click="test_prop">Click here to see pokemon data in your console log</button>
</template>