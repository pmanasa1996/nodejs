const tasks={
    tasks:[{
         text:'shopping',
         completed:true
         },
         {
         text:'cleaning',
         completed:false
        },
        {
         text:'film course',
        completed:false
           }
        
        ],
        getTasksToDo(){
            return tasksToDo=this.tasks.filter((task)=>task.completed===true)
        

            }
            
        }

console.log(tasks.getTasksToDo())