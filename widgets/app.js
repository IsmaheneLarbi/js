var one = new Vue({
    el:"#vue-app",
    data:{
        title:"App one"

    },
    methods:{

    },
    computed:{
        greet:function(){
            return "Hello, I am App one :)";
        }
    }
});

var two = new Vue({
    el:"#vue-app-two",
    data:{
        title:"Two"
    },
    methods:{
        changeTitle:function(){
            one.title = "Title changed";
        }
    },
    computed:{
        greet:function(){
            return "What up nigga? I am Two";
        }
    }
});

two.title = "Changed from oitside";