var blackPrivilege = {
    title: "Black Privilege",
    author: "Charlamagne",
    genre: "Biography",
    shortDescription: "How living an authentic life is the quickest path to success",
    price: "10.29",
    seller: "Amazon",
    buyNow: "17.99"


    learnMore : function (){
        return this.name + this.genre + this.shortDescription;
    }


    buyNow : function (){
        return this.price + this.seller;
    
        }

    }
}

