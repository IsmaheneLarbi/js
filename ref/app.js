new Vue({
    el:"#vue-app",
    data:{
        output:"Favorite food",
    },
    methods:{
        readRefs:function()
        {
            console.log(this.$refs.div.innerText);
            this.output = this.$refs.input.value;
        }
    },
    computed:{
        
    }
});