class Summary {
  constructor(items, buyers, transactions) {
    this.items = items
    this.buyers = buyers
    this.transactions = transactions
    this.totalTransactions = this.totalTransactionsResult()
    this.bestSellingItem = this.bestSellingItemResult()
    this.bestSellingCategory = this.bestSellingCategoryResult()
    this.rpc = this.rpcResult()
    this.revenue = this.revenueResult()
    this.bestSpenders = this.bestSpendersResult()
  }

  totalTransactionsResult() {
    return this.transactions.length
  }

  bestSellingItemResult() {
    let transaction = this.transactions
    let arr = []
    
    for (let i = 0; i < transaction.length; i++) {
      let qty =  transaction[i].qty
      arr.push(qty)
    }
    
    let max = Math.max(...arr)
    
    const found =  transaction.find(({qty}) => qty == max);
    return found.item
  }

  bestSellingCategoryResult() {
    let bestSellItem =  this.bestSellingItemResult()
    let item = this.items
    const found =  item.find(({name}) => name == bestSellItem);
    return found.type
  }

  rpcResult() {
    let items = this.items
    let buyers = this.buyers
    let transaction = this.transactions

    let hats = 0
    let tops = 0
    let shorts = 0

    let arr = []
    let objHats = {}
    let objTops = {}
    let objShorts = {}

    for (let i = 0; i < transaction.length; i++) {
      let item = transaction[i].item
      let qty = transaction[i].qty
      let buyer = transaction[i].buyer

      for (let j = 0; j < buyers.length; j++) {
        // console.log(buyer, '===' ,Input.Buyers[j]);
        
        if (buyer == buyers[j].name) {
          // console.log(buyers[j].type);
          let buyerType = buyers[j].type

          for (let k = 0; k < items.length; k++) {
            // console.log(items[k].name)
            for (let l = 0; l < items[k].prices.length; l++) {
              let itemPrice = items[k].prices[l]
              // console.log(itemPrice);
              
              if (item == items[k].name) {
                if (itemPrice.priceFor == buyerType) {
                  // console.log(itemPrice.price * qty);
                  let totalPrice = itemPrice.price * qty
                  
                  if (items[k].type == 'hats' ) {
                    hats += totalPrice
                  } 
                  if (items[k].type == 'tops' ) {
                    tops += totalPrice
                  } else if (items[k].type == 'shorts' ) {
                    shorts += totalPrice
                  }

                  objHats = {
                    category: 'hats', 
                    revenue: hats
                  }
                  objTops = {
                    category: 'tops', 
                    revenue: tops
                  }
                  objShorts = {
                    category: 'shorts', 
                    revenue: shorts
                  }
                }
              }
            }
          }
        }
      }
    }
    arr.push(objHats, objTops, objShorts)
    return arr
  }

  revenueResult() {
    let rpc = this.rpcResult()
    let total = 0

    for (let i = 0; i < rpc.length; i++) {
      let rev = rpc[i].revenue;
      total += rev
    }

    return total
  }

  bestSpendersResult() {
    let items = this.items
    let buyers = this.buyers
    let transaction = this.transactions

    let objRegular = {}
    let objVip = {}
    let objWholesale = {}
    let arr = []

    let regular = 0
    let vip = 0
    let wholesale = 0

    for (let i = 0; i < transaction.length; i++) {
      let item = transaction[i].item
      let qty = transaction[i].qty
      let buyer = transaction[i].buyer

      

      for (let j = 0; j < buyers.length; j++) {

        if (buyer == buyers[j].name) {
          let buyerType = buyers[j].type

          for (let k = 0; k < items.length; k++) {

            for (let l = 0; l < items[k].prices.length; l++) {
              let itemPrice = items[k].prices[l]
              
              if (item == items[k].name) {
                if (itemPrice.priceFor == buyerType) {
                  let totalPrice = itemPrice.price * qty

                  console.log(buyer, totalPrice, buyerType);
                  
                  if (buyerType == 'regular') {
                    regular += totalPrice
                    objRegular = {
                      name: buyer, 
                      type: buyerType,
                      spent: regular
                    }
                  } else if (buyerType == 'VIP') {
                    vip += totalPrice
                    objVip = {
                      name: buyer, 
                      type: buyerType,
                      spent: vip
                    }
                  } else if (buyerType == 'wholesale') {
                    wholesale += totalPrice
                    objWholesale = {
                      name: buyer, 
                      type: buyerType,
                      spent: wholesale
                    }
                  }
                }
              }
            }
          }
        } 
      } 
    }
    arr.push(objRegular, objVip, objWholesale)

    console.log(arr);

    const sortSpent =  arr.sort(function(a, b) {
      return b.spent - a.spent 
    });

    return sortSpent
  }
}

const summary = new Summary(
  [
    {
      name: 'oval hat', // product name
      type: 'hats', // product type
      prices: [
        {
          priceFor: 'regular', // price is valid for
          price: 20000, // the price
        },
        {
          priceFor: 'VIP', // price is valid for
          price: 15000, // the price
        },
      ]
    }, {
      name: 'square hat', // product name
      type: 'hats', // product type
      prices: [
        {
          priceFor: 'regular', // price is valid for
          price: 30000, // the price
        },
        {
          priceFor: 'VIP', // price is valid for
          price: 20000, // the price
        },
        {
          priceFor: 'wholesale', // price is valid for
          price: 15000, // the price					
        }
      ]
    }, {
      name: 'magic shirt', // product name
      type: 'tops', // product type
      prices: [
        {
          priceFor: 'regular', // price is valid for
          price: 50000, // the price
        }
      ]
    }
  ],
  [
    {
      name: 'Ani', // buyer name
      type: 'regular', // buyer type - VIP, regular, wholesale
    }, {
      name: 'Budi', // buyer name
      type: 'VIP', // buyer type - VIP, regular, wholesale
    }, {
      name: 'Charlie',
      type: 'regular'
    }, {
      name: 'Dipta',
      type: 'wholesale'
    }
  ],
  [
    {
      item: 'magic shirt', // product name
      qty: 1, // buying quantity
      buyer: 'Ani' // buyer name
    }, {
      item: 'square hat', // product name
      qty: 2, // buying quantity
      buyer: 'Budi' // buyer name
    }, {
      item: 'magic shirt', // product name
      qty: 1, // buying quantity
      buyer: 'Ani' // buyer name
    }, {
      item: 'oval hat', // product name
      qty: 1, // buying quantity
      buyer: 'Ani' // buyer name
    }, {
      item: 'square hat',
      qty: 100,
      buyer: 'Dipta'
    }
  ]
)

console.log(summary);










