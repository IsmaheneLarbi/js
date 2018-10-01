myApp = new Vue({
    el:"#vue-app",
    data:{
        name:"Ismahene",
        age:29,
    },
    methods:{
        logName:function()
        {
            console.log("You logged in a name");
        },
        logAge: function()
        {
            console.log("YOu logged in your age");
        }
    }
});