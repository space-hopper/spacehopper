const productData=require('./rawProductData')
const orderData=require("./rawOrderData")
const userData=require('./rawUserData')
const {db, User, Product, Order, OrderDetails}=require('../index')

const seed = async () => {
	try {
		await db.sync({ force: true });
		// seed your database here!
		const products= await Promise.all(
			productData.map((product) => Product.create(product))
		);
		
		const orders=await Promise.all(orderData.map((order) => Order.create(order)));
        const users=await Promise.all(
            userData.map((user)=>User.create(user))
        )
        for(let j=0;j<orders.length;j++){
			await orders[j].setUser(users[Math.floor(Math.random()*users.length)])
			for(let i=0;i<Math.ceil(Math.random()*8);i++){
				await orders[j].addProduct(products[Math.floor(Math.random()*products.length)],{individualHooks:true})
			}
		}
        
	} catch (err) {
		console.log(err);
	}
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
	seed()
		.then(() => {
			console.log("Seeding success!");
			db.close();
		})
		.catch((err) => {
			console.error("Dang! Something went wrong!");
			console.error(err);
			db.close();
		});
}

