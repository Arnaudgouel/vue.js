const app = new Vue ({
    el: "#app",
    data(){
        return{
            title:"Bonjour",
            text:"fjfjsfbdksfbsdfbsdf sdkfsdfjhsdjf sdkfjhsdfhsdfjksdf sdjfhsdfjsdfhjkdsfhsf sjdfkhsdfjsdhfjksdfhsdf fjfjsfbdksfbsdfbsdf sdkfsdfjhsdjf sdkfjhsdfhsdfjksdf sdjfhsdfjsdfhjkdsfhsf sjdfkhsdfjsdhfjksdfhsdf fjfjsfbdksfbsdfbsdf sdkfsdfjhsdjf sdkfjhsdfhsdfjksdf sdjfhsdfjsdfhjkdsfhsf sjdfkhsdfjsdhfjksdfhsdf fjfjsfbdksfbsdfbsdf sdkfsdfjhsdjf sdkfjhsdfhsdfjksdf sdjfhsdfjsdfhjkdsfhsf sjdfkhsdfjsdhfjksdfhsdf fjfjsfbdksfbsdfbsdf sdkfsdfjhsdjf sdkfjhsdfhsdfjksdf sdjfhsdfjsdfhjkdsfhsf sjdfkhsdfjsdhfjksdfhsdf fjfjsfbdksfbsdfbsdf sdkfsdfjhsdjf sdkfjhsdfhsdfjksdf sdjfhsdfjsdfhjkdsfhsf sjdfkhsdfjsdhfjksdfhsdf sdfjkshdfsdkjshdfj",
            verif:true,
            green:'#00ff00',
            display:false
        }
    },
    methods:{
        animate(){
            this.display = !this.display;
        }
    }
});