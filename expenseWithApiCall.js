function savetoNetworkstorage(event){
    event.preventDefault()
      /*const name=event.target.username.value
      const email=event.target.email.value
      const phone=event.target.phone.value
      const time=event.target.time.value
      localStorage.setItem('name',name)
      localStorage.setItem('email',email)
      localStorage.setItem('phone',phone) 
      localStorage.setItem('time',time) */
      //by default all the values are stored in string format and cannot be represented in original input format,so
      let expense_tracker={
          number:event.target.number.value,
          description:event.target.description.value,
          month:event.target.month.value,
         
      }
      axios.post("https://crudcrud.com/api/8547ee1f511e49cf93ec593c766fed46/expenseData",expense_tracker)
      .then((response)=>{
          showNewUserOnScreen(response.data)
          console.log(response)
      })
      .catch((err)=>console.log(err))
     

  
     
    }
    window.addEventListener("DOMContentLoaded", () => {
        
        //network call and by default it is asynchronous as there will be a wait time to retrive the info over network
      axios.get('https://crudcrud.com/api/8547ee1f511e49cf93ec593c766fed46/expenseData')
      .then((response)=>{
        //   console.log(response)
        for(let i=0;i<response.data.length;i++){
            showNewUserOnScreen(response.data[i])
        }
      })
      .catch((err)=>{
          console.log(err)

      })
    })  
    function showNewUserOnScreen(user){
        const parentNode=document.getElementById('list of users')
        const childHtml=`<li id=${user._id}>${user.description}-${user.number} - ${user.description}-${user.month}<br>
         <button onclick=deleteUser('${user._id}')>Delete Expenses</button>        
         <button onclick=editUser('${user.number}','${user.description}','${user.month}','${user._id}')>Edit Expenses </button></li> <br>`
        parentNode.innerHTML+=childHtml

    

   }
   function deleteUser(userId){
        axios.delete(`https://crudcrud.com/api/8547ee1f511e49cf93ec593c766fed46/expenseData/${userId}`)
        .then((response)=>{
            removeUserFromScreen(userId)
        })
        .catch((err)=>{
            console.log(err)

        })
  
        
   }
   function editUser(number,description,month,userId){
       document.getElementById('number').value=number
       document.getElementById('description').value=description
       document.getElementById('month').value=month
       deleteUser(userId)
   }
   function removeUserFromScreen(userId){
    const parentNode=document.getElementById('list of users')
    const remove=document.getElementById(userId)
    parentNode.removeChild(remove)

}

//https://crudcrud.com/api/8547ee1f511e49cf93ec593c766fed46
