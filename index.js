
      function validation()  {
      
          
        const nametag = document.getElementById("name").value;
        const emailtag = document.getElementById("email").value;
        const passwordtag = document.getElementById("password").value;
        const passtag = document.getElementById("cpass").value;
        const message = document.getElementById("error_message");
        const text;
        error_message.style.padding = "11px";
        
    if (nametag.length <5 ) {
        text = "Please ente a valid name";
        error_message.innerHTML = text;
        nametag.style.border = "1px solid red";
        
        return false;
            
        } else {
            return false;
            
        }
    }
        /*

        
       
           
            
        } 
       
        const toggleButtton = document.getElementsByClassName('toggle-btn')[0]
        const navbarLinks = document.getElementsByClassName('nav-links')[0]

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        });
       


            //name validation
            if (nametag.value ==='' || emailtag.value ==='' || passwordtag.value ===''|| passtag.value ==='') {
                nametag.style.border = "1px solid red";
                emailtag.style.border = "1px solid red";
                passwordtag.style.border = "1px solid red";
                passtag.style.border = "1px solid red";

    */