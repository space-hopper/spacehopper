const { expect } = require("chai");
const Product = require("../server/db/models/product");
describe("Products model",()=>{
    beforeEach(() => db.sync({ force: true }));
    describe("column definitions and validations",()=>{
        it("has a name, price, quantity, and image URL", async()=>{
            const coolFrog=await Product.create({
                name:"Cool Frog",
                price:68.75,
                quantity:1,
                imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2jrYIjX0ev9nUN0m19GfAQHaHa%26pid%3DApi&f=1'
            })
            expect(coolFrog.name).to.equal("Cool Frog")
            expect(coolFrog.price).to.equal(68.75)
            expect(coolFrog.quantity).to.equal(1),
            expect(coolFrog.imageUrl).to.equal('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2jrYIjX0ev9nUN0m19GfAQHaHa%26pid%3DApi&f=1')
        })
        it("name is required",async ()=>{
            const frog=Product.build({price:68.75,
                quantity:1,
                imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2jrYIjX0ev9nUN0m19GfAQHaHa%26pid%3DApi&f=1'
            });
            return frog.validate().then(
                ()=>{
                    throw new Error("Validation should have failed")
                },
                (err)=>{
                    expect(err).to.be.an("error")
                }
            )
        })
        it("name cannot be blank",async ()=>{
            const frog=Product.build({
                name:'',
                price:68.75,
                quantity:1,
                imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2jrYIjX0ev9nUN0m19GfAQHaHa%26pid%3DApi&f=1'
            });
            return frog.validate().then(
                ()=>{
                    throw new Error("Validation should have failed")
                },
                (err)=>{
                    expect(err).to.be.an("error")
                }
            )
        })
        it("price is required", async ()=>{
            const frog=Product.build({name:'frog',
            quantity:1,
            imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2jrYIjX0ev9nUN0m19GfAQHaHa%26pid%3DApi&f=1'
        });
        return frog.validate().then(
            ()=>{
                throw new Error("Validation should have failed")
            },
            (err)=>{
                expect(err).to.be.an("error")
            }
        )
        })
        it("price cannot be negative", async ()=>{
            const frog=Product.build({name:'frog',
            price:-68.75,
            quantity:1,
            imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2jrYIjX0ev9nUN0m19GfAQHaHa%26pid%3DApi&f=1'
        });
        return frog.validate().then(
            ()=>{
                throw new Error("Validation should have failed")
            },
            (err)=>{
                expect(err).to.be.an("error")
            }
        )
        })
        it("price cannot have more than 2 digits after the decimal", async ()=>{
            const frog=Product.build({name:'frog',
            price:68.756,
            quantity:1,
            imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2jrYIjX0ev9nUN0m19GfAQHaHa%26pid%3DApi&f=1'
        });
        return frog.validate().then(
            ()=>{
                throw new Error("Validation should have failed")
            },
            (err)=>{
                expect(err).to.be.an("error")
            }
        )
        })
        it("quantity is required", async ()=>{
            const frog=Product.build({
                name:frog,
                price:68.75,
                imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2jrYIjX0ev9nUN0m19GfAQHaHa%26pid%3DApi&f=1'
          
            })
            return frog.validate().then(
                ()=>{
                    throw new Error("Validation should have failed")
                },
                (err)=>{
                    expect(err).to.be.an("error")
                }
            )
        })
        it("quanitty cannot be negative", async ()=>{
            const frog=Product.build({name:'frog',
            price:68.75,
            quantity:-1,
            imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2jrYIjX0ev9nUN0m19GfAQHaHa%26pid%3DApi&f=1'
        });
        return frog.validate().then(
            ()=>{
                throw new Error("Validation should have failed")
            },
            (err)=>{
                expect(err).to.be.an("error")
            }
        )
        })
        it("quanitty must be a whole numbber", async ()=>{
            const frog=Product.build({name:'frog',
            price:68.75,
            quantity:1.7,
            imageUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2jrYIjX0ev9nUN0m19GfAQHaHa%26pid%3DApi&f=1'
        });
        return frog.validate().then(
            ()=>{
                throw new Error("Validation should have failed")
            },
            (err)=>{
                expect(err).to.be.an("error")
            }
        )
        })
    })
})