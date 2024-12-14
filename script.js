
    const row = document.querySelector(".row");
    row.className = "row row-cols-1 row-cols-md-3"
       for(let i = 0;i<6;i++){
        const col = document.createElement("div")
        col.className = "col"
        
            const card = document.createElement("div")
            card.className = "card"
            card.style.width = "100%"
            
             
                const img = document.createElement("img")
                img.className = "card-img-top"
                img.src = "https://picsum.photos/200/300"
                img.style.height = "400px"
                card.appendChild(img)

                const card_body = document.createElement("div")
                card_body.className = "card-body"

                    const h5 = document.createElement("h5")
                    h5.className = "card-title"
                    h5.textContent = "Card title"
                    card_body.appendChild(h5)

                    const p = document.createElement("p")
                    p.className = "card-text"
                    p.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content."
                    card_body.appendChild(p)

                    const a = document.createElement("a")
                    a.href = "#"
                    a.textContent = "Go somewhere"
                    a.className = "btn btn-primary"
                    card_body.appendChild(a)
                card.appendChild(card_body) 
                
            col.appendChild(card)  
            
        row.appendChild(col)    
       }

