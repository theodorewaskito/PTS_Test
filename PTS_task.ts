`PTS Test - OOP and Data Structure

Please save your file as PTS_SE_CandidateName (e.g. PTS_SE_AthiraFajrina). If you have more than one file, please zip the file.

Please use your OOP and data structure knowledge.
What is graded:
1. Data structure effectiveness
2. Data structure efficiency
3. Program correctness
4. OOP understandings
5. Understanding of the task

The Islander Shop (TIS) is a small clothing shop which requires a simple POS (Point of Sales) application which accepts items, 
buyers, and transactions and generate a summary of the sales. TIS sells 3 types of clothings: hats, tops, and shorts. 
There are 3 types of buyers: regular, VIP, and wholesale which prices for each of the items varies for certain types of buyers. 

Every item must have a price for regular buyers; if they don't then the POS should print an error and the summary cannot 
be printed. If an item does not have special price for VIP or wholesale then the regular price is used. 
Item names and buyer names are unique; if the input contains duplicated item or buyer then the POS should print an error 
and the summary cannot be printed. 

*please print error in english


If all conditions are met, then an output summary should be printed. The summary contains of:
1. Total number of transactions
2. Best selling item name
3. Best selling category
4. Revenue per category
5. Revenue of the day
6. Three most spender customers

Sample of:

Input: 
{
    Items:
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
    Buyers:
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
    Transaction:
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
}
2. Output:
	Summary:
	{
		totalTransactions: 5, // total number of transactions
		bestSellingItem: 'square hat', // best selling item
		bestSellingCategory: 'hats', // best selling category
		rpc: [ // revenue per category
			{
				category: 'hats',
				revenue: 1560000,
			}, 
			{
				category: 'tops',
				revenue: 100000,
			},
			{
				category: 'shorts',
				revenue: 0,
			}
		],
		revenue: 1660000, // revenue of the day
		bestSpenders: [{ // best spender
			name: 'Dipta',
			type: 'wholesale',
			spent: 1500000,
		}, {
			name: 'Ani',
			type: 'regular',
			spent: 120000,
		}, {
			name: 'Budi',
			type: 'VIP',
			spent: 40000,
		}]
  }
`