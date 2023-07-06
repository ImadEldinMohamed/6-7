//8694g8THDgSDP6MSh0lIl2Qbg6SqDR8bX705P5UuxZRESXQJWPX9NLZa

const esercizio =function(){
   fetch('https://api.pexels.com/v1/search?query=kittens',{
   
    headers:{
        Authorization:'8694g8THDgSDP6MSh0lIl2Qbg6SqDR8bX705P5UuxZRESXQJWPX9NLZa'
    }
   })
   .then((res)=>{
    if(res.ok){
        return res.json()
  
    }else{
        throw new Error('errore')
    }
   })
   .then((data)=>{
    console.log(data)
    const card=data.photos
   card.forEach(element => {
         let carica=document.getElementById('carica')
         carica.addEventListener('click',function(){

            let row=document.getElementById('row')
            let div=document.createElement('div')
             div.classList.add('col','col-4')
             div.innerHTML=` <div class="card" style="width: 18rem;">
             <img src=${element.src.large} class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
               <a href="#" class="btn btn-primary"id=hide>hide</a>
             </div>
           </div> `
           row.appendChild(div)
            
        });
       
        row.appendChild(div)
        const bottone=document.querySelectorAll('#hide')
        let x=bottone[i]
         x.addEventListener('click',function(){
               x.parentElement.parentElement.remove()
          })

         })
  
   })
 
   
 
 
   
   .catch((err)=>{
    console.log(err)
   })
   


}

esercizio()

const esercizio1 =function(){
    fetch('https://api.pexels.com/v1/search?query=harrypotter',{
    
     headers:{
         Authorization:'8694g8THDgSDP6MSh0lIl2Qbg6SqDR8bX705P5UuxZRESXQJWPX9NLZa'
     }
    })
    .then((res)=>{
     if(res.ok){
         return res.json()
   
     }else{
         throw new Error('errore')
     }
    })
    .then((data)=>{
     console.log(data)
     const card=data.photos
    card.forEach((element,i) => {
          let carica1=document.getElementById('secondo')
          carica1.addEventListener('click',function(){
 
             let row=document.getElementById('row')
             let div=document.createElement('div')
              div.classList.add('col','col-4')
              div.innerHTML=` <div class="card" style="width: 18rem;">
              <img src=${element.src.large} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <a href="#" class="btn btn-primary"id=hide>hide</a>
              </div>
            </div> `
            row.appendChild(div)
            const bottone=document.querySelectorAll('#hide')
            let x=bottone[i]
             x.addEventListener('click',function(){
                   x.parentElement.parentElement.remove()
              })
         });
        
 
          })
       
     
 
    })
  
        
    
    .catch((err)=>{
     console.log(err)
    })
    
 
 
 }
 
 esercizio1()