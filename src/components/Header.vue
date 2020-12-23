<template>
    <header :class="classBlack">
        <div class="header-logo">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix">
            </a>
        </div>
        <div class="header-usuario">
            <a href="/">
                <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="usuario">
            </a>
        </div>
    </header>
</template>

<script>
import '../css/Header.css'
export default {
    data(){
        return{
            classBlack: ''
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll () {
            if(window.scrollY > 10){
                this.classBlack = "black"
            }
            else{
                this.classBlack =''
            }
        }
    }
}
</script>