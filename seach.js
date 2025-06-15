
let filteredproducts=[...products];
console.log(filteredproducts);

let productcontainer=document.querySelector(".imagecontainer");

// console.log(productcontainer);

const showData=()=>{

    if(filteredproducts.length<1)
    {
        productcontainer.innerHTML="There is no match";
        return ;
    
    }

    productcontainer.innerHTML=filteredproducts.map((value, key) =>{

            return `
                <div class="box">
                    <img src="image/${value.image}">
                    <p>${value.name}</p>
                    <p>${value.price.toLocaleString()}</p>
                    <button onclick="addToCard(${key})">Add to cart</button>
                </div>
                `
        }).join('');

}

showData();

let form=document.querySelector(".formm");
let srchinput=document.querySelector(".form-input");

form.addEventListener("keyup" ,()=>{

    let srchval=srchinput.value;

    console.log(srchval);

    filteredproducts=products.filter((product)=>{
        const {id , name}=product;

        return product.name.toLowerCase().includes(srchval);

    })
    
    showData();

})
