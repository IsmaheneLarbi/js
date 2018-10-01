
new Vue({
    el:"#vue-app",
    data:{
        age:24,
        a:0,
        b:0,
    },
    computed:{
        addToA:function()
        {
            return this.age + this.a;
        },
        addToB:function()
        {
            return this.age + this.b;
        }
    }
});