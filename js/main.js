/* event  //  v-model  //  v-cloak */

/* setTimeout(() => {
    
}, 5000); */
    new Vue({
        el:'#app',
        data:{
            start:true,
            count:0,
            counter:2,
            counterPlayer:0,
            loss:false,
            win:false,
            startPlayer:false,
            cards:[
                {
                    id:1,
                    color:"bg-blue-400",
                },
                {
                    id:2,
                    color:"bg-blue-400",
                },
                {
                    id:3,
                    color:"bg-blue-400",
                },
                {
                    id:4,
                    color:"bg-blue-400",
                },
                {
                    id:5,
                    color:"bg-blue-400",
                },
                {
                    id:6,
                    color:"bg-blue-400",
                },
                {
                    id:7,
                    color:"bg-blue-400",
                },
                {
                    id:8,
                    color:"bg-blue-400",
                },
                {
                    id:9,
                    color:"bg-blue-400",
                },
            ],
            openCards:[],
            width:"w-1/3",
            numberOfCards:9,
            
        },
        /* created() {
            this.btnRet()
        }, */
        methods: {
            randomNum(){
                return (Math.floor(Math.random() * this.numberOfCards ) + 1);
                
            },
            randomSelection(){
                if (this.count == 10) {
                    this.win=true;
                    this.startPlayer=false;
                }

                if (!(this.win)) {
                    this.start=false;

                var num = this.randomNum() ;

                for ( let y = 0; y <this.counter; y++) {
                        
                    this.cards.forEach(card => {

                        if (num == card.id) {
                            card.color = "bg-purple-700";
                            this.openCards.push({
                                    id:card.id,
                                    color:card.color,
                                    opened:false,
                                });

                            setTimeout(() => {
                                card.color = "bg-blue-400";
                                this.startPlayer=true;
                            }, 2000);
                        }
                            
                    });

                    num = this.randomNum()

                    this.openCards.forEach(item => {
                            
                        while (num == item.id) {
                            num = this.randomNum()
                        }
                    });
                };
                }     
            },

            playerSelection(id){
                
                
                if (this.openCards.length != 0 && this.startPlayer) {
                    this.cards.forEach(card => {
                        if (card.id == id) {
                           var found=false;
                            this.openCards.forEach(item => {
                                if (card.id == item.id) {
                                    card.color="bg-purple-700";
                                    found=true;
                                    if (item.opened == false) {
                                        this.counterPlayer++
                                    }
                                    /*  */
                                    item.opened=true;
                                }
                            });
                            
                            if(!found){
                                card.color="bg-red-600";
                                this.loss=true;
                                this.startPlayer=false;
                                this.openCards.forEach(item => {
                                    if (item.opened == false) {
                                        this.cards.forEach(card => {
                                            if (item.id == card.id) {
                                                setTimeout(() => {
                                                    card.color="bg-blue-700"
                                                }, 800); 
                                            }
                                        });
                                    }
                                    
                                });
                                /* alert("خسرت") */

                            }
                        }
                    });
                    if (this.counterPlayer == this.counter && this.startPlayer) {
                        this.startPlayer=false
                        setTimeout(() => {
                            this.counter++;
                            this.count++;
                            this.counterPlayer = 0;
                            this.cards.forEach(card => {
                                card.color = "bg-blue-400";
                            });
                            this.openCards=[];
                            setTimeout(() => {
                                this.randomSelection();
                            }, 500);
                        }, 1000);
                        
                    }
                }
            },

            btnRet(){
                this.loss=false,
                this.win=false,
                this.numberOfCards=9,
                this.counter=2;
                this.count=0;
                this.counterPlayer = 0;
                this.cards.forEach(card => {
                    card.color = "bg-blue-400";
                });
                this.openCards=[];
                setTimeout(() => {
                    this.randomSelection();
                }, 1000);
                for (let i = 0; i < this.cards.length; i++) {
                    let card = this.cards[i]
                    if(card.id >= 10){
                        this.cards.splice(i , 1) 
                        i--
                    }    
                } 
                console.log(this.cards)
                this.width="w-1/3";
                
            },

        },   
        
        computed: {
            
        },
        watch: {
            counter(){
                if (this.counter == 5) {
                    this.width="w-1/4";
                    this.counter=7;
                    this.numberOfCards=16;
                    for (let x = 10; x < 17; x++) {
                        this.cards.push({
                            id:x,
                            color:"bg-blue-400"
                        });   
                    }    
                }

                if (this.counter == 10) {
                    this.width="w-1/5";
                    this.counter=12;
                    this.numberOfCards=25;
                    for (let x = 17; x < 26; x++) {
                        this.cards.push({
                            id:x,
                            color:"bg-blue-400"
                        });   
                    }    
                }
            }
        },
    });