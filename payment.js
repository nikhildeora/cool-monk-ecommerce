let select = document.getElementById("change")

select.onchange =()=>{
    handlePayment()
}


function handlePayment(){
    let selected = document.getElementById("change").value
    
    
    let prepaid = document.getElementById("Prepaid")
    let COD = document.getElementById("COD")

    if(selected=="COD"){
        
        COD.style.display="block"
        prepaid.style.display="none"


    }else if(selected=="Prepaid"){
        
        prepaid.style.display="block"
        COD.style.display="none"
    }
}

let Cbtn=document.getElementById("cbtn")

Cbtn.onclick=()=>{
    orderPlace()
}


function orderPlace(){
    alert("Hurray! Your order has been placed")
}
let Pbtn=document.getElementById("Pbtn")

Pbtn.onclick=()=>{
    orderPlaced()
}


function orderPlaced(){
    alert("Hurray! Your order has been placed")
}