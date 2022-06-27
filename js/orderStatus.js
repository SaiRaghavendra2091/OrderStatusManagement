const chefReceived = (orderNumber) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderNumber).innerText = 'chef received the order'
          resolve(orderNumber)
      }, 2000)
  })
}

const pizzaSauceAdded = (orderNumber) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderNumber).innerText = 'Pizza Sauce added'
          resolve(orderNumber)
      }, 10000)
  })
}

const firstLayerOfCheeseAdded = (orderNumber) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderNumber).innerText = 'First layer of cheese added'
          resolve(orderNumber)
      }, 2000)
  })
}

const toppingsAdded = (orderNumber) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderNumber).innerText = 'toppings added'
          resolve(orderNumber)
      }, 12000)
  })
}

const secondLayerOfCheeseAdded = (orderNumber) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderNumber).innerText = 'Second layer of cheese added'
          resolve(orderNumber)
      }, 5000)
  })
}

const pizzaBaked = (orderNumber) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderNumber).innerText = 'Pizza Baked'
          resolve(orderNumber)
      }, 15000)
  })
}

const oreganoAdded = (orderNumber) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderNumber).innerText = 'Oregano Added'
          resolve(orderNumber)
      }, 2000)
  })
}


const packageReceivedAtCounter = (orderNumber) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById(orderNumber).innerText = 'Package received at counter'
          resolve(orderNumber)
      }, 2000)
  })
}
