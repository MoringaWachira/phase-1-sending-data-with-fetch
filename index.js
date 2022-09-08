// Add your code here
 
function submitData(userName, userEmail) {
    const dataSubmit = {
        name: userName,
        email: userEmail,
    };
    
    
    const methodObj={
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
                },
        body: JSON.stringify(dataSubmit)
    };
    return fetch('http://localhost:3000/users', methodObj)
    .then(response => response.json())
    .then(users => {
        const newUserId = document.createElement('h1');
        const body = document.querySelector('body');
        newUserId.textContent = users.id;
        body.appendChild(newUserId);
        console.log(users);
    })
    .catch(function (error) {
     document.body.innerHTML = error.message
    })
    
    }

        
        
        

