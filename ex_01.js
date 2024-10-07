function displayAgentInfo(){
    const agent = {
        firstname: "James" ,
        lastname: "Bond" ,
        code: "007",
        age: 57 
       };

       const info  ='MY NAME IS BOND , JAMES BOND ! I M THE AGENT 007 AND I M 57 YEARS OLD';
       const p  = document.querySelector("#container p");
       p.textContent = info;
       }
     document.addEventListener("DOMContentLoaded",function(){
        displayAgentInfo();
     });
    
