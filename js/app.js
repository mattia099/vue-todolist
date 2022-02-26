
const app = new Vue({
    el : '#app',
    data : {
        newTodo: '',
        todoList: [
            {
                text : 'Fare la spesa',
                done : true,
            },
            {
                text : 'Fare i compiti',
                done : false,
            },
            {
                text : 'Buttare il pattume',
                done : false,
            },
            
            
        ],
    },
    methods : {
        addTodo(){
            if( this.newTodo !== '' ){
                this.todoList.push( {
                                        text : this.newTodo,
                                        done : false,
                                    }
                )
                this.newTodo = '';
                }
        },
   
            
        deleteTodo(i){
            console.log(i);
            this.todoList.splice( i , 1 ); //elimina elemento in base all'indice (indice , quanti elementi cancellare dopo l'indice)
        },
        
        doneEvent(i){
            console.log(i)
            i=true;
            console.log(i)
        },
    }
})