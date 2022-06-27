 
let orderBlocks = document.getElementsByClassName('order-block')
let cardHeader = document.getElementsByClassName('card-header')
let parentDiv = document.getElementById('parent-div')
let emptyOrderGif = document.getElementById('empty-order-gif')




const createNewOrder = (orderIdInput) =>{
    
    let colDiv = document.createElement('div')
    let cardDiv = document.createElement('div')
    let cardHeaderDiv = document.createElement('div')
    let cardBodyDiv = document.createElement('div')
    let cardTitleH5 = document.createElement('H5')
    let cardTextP = document.createElement('p')
    let cardOrderStatusSpan = document.createElement('span')
    let cardButtonA = document.createElement('a')
    let cardFooterDiv = document.createElement('div')

    let cardHeaderDivText = document.createTextNode('Order Id : ' + orderIdInput)
    let cardTitleH5Text = document.createTextNode('Bill Amount : $152')
    let cardTextPText = document.createTextNode('Corn Delight Large Size Pizza - 2 Nos')
    let cardButtonAText = document.createTextNode('Cancel Order')
    let cardOrderStatusText = document.createTextNode('PIZZA BAKED')

    parentDiv.appendChild(colDiv)
    colDiv.appendChild(cardDiv)
    cardDiv.appendChild(cardHeaderDiv)
    cardDiv.appendChild(cardBodyDiv)
    cardBodyDiv.appendChild(cardTitleH5)
    cardBodyDiv.appendChild( cardTextP)
    cardOrderStatusSpan.appendChild(cardOrderStatusText)
    cardBodyDiv.appendChild(cardOrderStatusSpan)
    cardFooterDiv.appendChild(cardButtonA)
    cardTitleH5.appendChild(cardTitleH5Text)

    cardTextP.appendChild(cardTextPText)
    cardButtonA.appendChild(cardButtonAText)
    cardHeaderDiv.appendChild(cardHeaderDivText)
    cardOrderStatusSpan.appendChild(cardOrderStatusText)
    cardDiv.appendChild(cardFooterDiv)

    colDiv.classList = 'col-md-4 col-xs-12 order-block'
    cardDiv.classList = 'card text-center'
    cardHeaderDiv.classList = 'card-header'
    cardBodyDiv.classList = 'card-body'
    cardTitleH5.classList = 'card-title'
    cardTextP.classList = 'card-text'
    cardButtonA.classList = 'btn btn-danger cancel-button'
    cardFooterDiv.classList = 'card-footer'
    cardOrderStatusSpan.classList = 'badge rounded-pill bg-success order-status'
    
    cardOrderStatusSpan.id = orderIdInput

    cardButtonA.addEventListener('click', () => {
      //parentDiv.removeChild(colDiv)
      colDiv.style.display = 'none'
    })
  }

const executeOrder = () => {
    emptyOrderGif.style.display = 'none'

    let orderIdInput = document.getElementById('order-id-input').value
    if(!orderIdInput.length){
      alert('Please enter vaild Order Id')
      return
    }
    createNewOrder(orderIdInput)
    document.getElementById(orderIdInput).innerText = 'Order Placed!'


    
  chefReceived(orderIdInput)
  .then(pizzaSauceAdded)
  .then(firstLayerOfCheeseAdded)
  .then(toppingsAdded)
  .then(secondLayerOfCheeseAdded)
  .then(pizzaBaked)
  .then(oreganoAdded)
  .then(packageReceivedAtCounter)
  .then(() => document.getElementById(orderIdInput).innerText = 'order ready!')
  .catch((err) => console.log(err)) 

}
// const executeOrder = () =>{
//     let OrderIdInput = document.getElementById('order-id-input').value
//     cardHeader[orderNumber].innerText = 'Order Id :' + OrderIdInput
//     orderBlocks[orderNumber].style.display = 'block'
//     orderNumber++
// }



{/* <div class="col-md-4 col-xs-12 order-block">
      <div class="card text-center">
        <div class="card-header" id="order-id-display-1">
          Order Id :
        </div>
        <div class="card-body">
          <h5 class="card-title">
            Bill Amount :
          </h5>
          <p class="card-text">Items: XYZ, ABC, UVW</p>
          PIZZA BAKED
        </div>
        <div class="card-footer text-muted">
          <a href="#" class="btn btn-danger">Cancel Order</a>
        </div>
      </div>
    </div> */}