function savetolocalstorage(event){
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
      //to convert the default string format serialization is used-to convert to readable data
      let expense_tracker_serialize=JSON.stringify(expense_tracker)
                 
                  
      //this will show the values in string format 
      localStorage.setItem(expense_tracker.description,expense_tracker_serialize)
      //this will deserialize the prev an convert to original format of input
      let expense_tracke_deserialize=JSON.parse(localStorage.getItem("expense_tracker"))
      console.log(expense_tracke_deserialize)

      showNewUserOnScreen(expense_tracker)
     
    }
    window.addEventListener("DOMContentLoaded", () => {
        const localStorageObj = localStorage;
        const localstoragekeys  = Object.keys(localStorageObj)

        for(var i =0; i< localstoragekeys.length; i++){
            const key = localstoragekeys[i]
            const userDetailsString = localStorageObj[key];
            const userDetailsObj=JSON.parse(userDetailsString);
            showNewUserOnScreen(userDetailsObj)
        }
    })  
    function showNewUserOnScreen(user){
        const parentNode=document.getElementById('list of users')
        const childHtml=`<li id=${user.description}>${user.number} - ${user.description}-${user.month}<br>
         <button onclick=deleteUser('${user.description}')>Delete User</button>        
         <button onclick=editUser('${user.number}','${user.description}','${user.month}')>Edit User </button></li> <br>`
        parentNode.innerHTML+=childHtml

    

   }
   function deleteUser(description){
       localStorage.removeItem(description)
       removeUserFromScreen(description)
        
   }
   function editUser(number,description,month){
       document.getElementById('number').value=number
       document.getElementById('description').value=description
       document.getElementById('month').value=month
       deleteUser(description)
   }
   function removeUserFromScreen(description){
    const parentNode=document.getElementById('list of users')
    const remove=document.getElementById(description)
    parentNode.removeChild(remove)

}
