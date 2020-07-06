const inp = new Vue({
    el:'#app',
    data:{
        updateText:'',
        message:'',
        activeColor:''
      
    },
    methods:{
        set(){
           
            if( this.updateText.length != 0 ){

                this.activeColor    = this.updateText;
                this.message        = this.updateText;
                this.updateText     = "" ;
            } else {
                this.message = "Empty";
            };
          
        }  
    }
            
});    
            
         
const clikcs = new Vue({
    el:'#clikcs',
    data:{
        value:'',
    },
    methods: {
        log(msm) {
            const curDate = new Date()
            msm == "right" ? this.value = `${curDate.getHours()}:${curDate.getMinutes()}` : this.value = msm
            
        }
    }
})        
        
   
