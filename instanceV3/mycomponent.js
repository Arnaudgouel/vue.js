app.component("mycomponent",{
    template:`<p>
    <button @click="addCount(); sendToParent()">CLICK ME PLEASE {{ count }}
    </button>
    </p>
    <h2>{{myprops}}</h2>`,
    // Récuperer les proprietes du parent
    props:{
        myprops:{
            type: String
        }
    },
    data(){
        return{
            count:0
        }
    },
    methods:{
        addCount(){
            this.count++;
        },
        sendToParent(){
            // Emettre un evenement au parent
            // Création d'un evenement qui va petre ecouté par le parent
            this.$emit("hello-parent", 'I\'m your child');
        }
    },
    computed:{

    }
})