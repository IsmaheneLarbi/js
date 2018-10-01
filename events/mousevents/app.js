new Vue({
    el:"#vue-app",
    data:{
        name:"Ismahene",
        job:"chosen one",
        website:"https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5",
        tag:'<a href="https://www.youtube.com/watch?v=xIOwFTCBBDg&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa&index=5">Vuejs tutorial</a>',
        age:29,
        x:0,
        y:0
    },
    methods:{
        greet: function(name)
        {
            return("Welcome to the matrix, " + name);
        },
        add: function(inc)
        {
            this.age +=inc;
        },
        subtract: function(dec)
        {
            this.age -= dec;
        },
        updateXY(event)
        {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function()
        {
            alert("YOu clicked me :)");
        },
    }
});