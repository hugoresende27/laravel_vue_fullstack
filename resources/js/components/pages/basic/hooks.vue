<template>
    <h1 ref="myref">Hooks tutorial</h1>
    <h2>My name is {{ name }} </h2>
</template>

<script>

//funciona como local storage também

export default {
    data(){
        return{
            name: 'Hugo'
        }
    },

    beforeCreate(){
        // console.log(this.name) name nao está disponivel aqui, usa-se para autentication por ex
    },

    created(){
        //call initial data
        console.log('data and otherr function available but not html', this.name)
    },
    mounted(){
        console.log(this.$refs.myref)
    }


}
</script>