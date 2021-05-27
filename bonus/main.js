 /* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */
 
 
  const app = new Vue({ 
       el: '#app',
       data:{
           mailList: [],
           mailList_2:[]
        },
       methods:{
           
        },
       mounted(){

          //funzione per creare 10 mail casuali tramite l'API
          function getMailRandom(mailList){
                 for(let i = 0; i < 10; i++){
                  axios
                  .get("https://flynn.boolean.careers/exercises/api/random/mail")
                  .then(response =>{
                          mailList.push(response.data.response)
                          
                    })
                }
           };
             
          getMailRandom(this.mailList);

           
        }
  
          
          
         
        
        
    }) 