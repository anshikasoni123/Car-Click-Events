AFRAME.registerComponent("car-model",{

schema:{
    modelRef:{type:"string",default:"../free_porsche_911_carrera_4s/scene.gltf"},
    rotateY: {type:"number",default:1},
    counterClick : {type:"number",default:0}
},

init:function(){
    this.el.setAttribute("gltf-model",this.data.modelRef);
    const position = {x:0,y:50,z:349.6};
    const rotation = {x:0,y:-100,z:0};
    const scale = {x:0.1,y:0.1,z:0.1}
    this.el.setAttribute("position",position);
    this.el.setAttribute("rotation",rotation);
    this.el.setAttribute("scale",scale);
},

update:function()
{
    window.addEventListener("click", (e) => {
        this.data.counterClick = this.data.counterClick + 1;
        if (this.data.counterClick === 1){
            const rotation = {x:0,y:360,z:0}
            this.el.setAttribute("rotation", rotation)
        } else if(this.data.counterClick === 2){
            const rotation = {x:0,y:300,z:0}
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.counterClick === 3){
            const rotation = {x:0,y:240,z:0}
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.counterClick === 4){
            const rotation = {x:0,y:180,z:0}
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.counterClick === 5){
            const rotation = {x:0,y:120,z:0}
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.counterClick === 6){
            const rotation = {x:0,y:60,z:0}
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.counterClick === 7){
            const rotation = {x:0,y:0,z:0}
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.counterClick === 8){
            const rotation = {x:0,y:-60,z:0}
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.counterClick === 9){
            const rotation = {x:0,y:-120,z:0}
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.counterClick === 8){
            const rotation = {x:0,y:-180,z:0}
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.counterClick === 9){
            const rotation = {x:0,y:-240,z:0}
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.counterClick === 8){
            const rotation = {x:0,y:-300,z:0}
            this.el.setAttribute("rotation",rotation)
        } else if(this.data.counterClick === 9){
            const rotation = {x:0,y:-360,z:0}
            this.el.setAttribute("rotation",rotation)
        }
        else{
            const rotation = {x:0,y:-100,z:0}
            this.el.setAttribute("rotation",rotation)
        }
    })
 }
})