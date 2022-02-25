
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
            if( this.newTodo !== ''){ //se è uguale a stringa vuota non aggiungo elementi alla lista
                this.todoList.push ( this.newTodo );
                this.newTodo = '';
            }
        },
            
        deleteTodo(i){
            console.log(i);
            this.todoList.splice( i , 1 ); //elimina elemento in base all'indice (indice , quanti elementi cancellare dopo l'indice)
        },
        
        doneEvent(i){
            i=true;
            console.log(i)
        },
    }
})