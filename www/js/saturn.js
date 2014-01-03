var saturn = {
    itemPricing:{
        aluminumP: .100,
        beerP: .10,
        plasticP: .10,
        jugsPrice: .25,
        glassP: .25
    },
    initialize: function() {
        this.convertInput(
            ".homepage",
            this.itemPricing.aluminumP,
            this.itemPricing.beerP,
            this.itemPricing.plasticP,
            this.itemPricing.jugsPrice,
            this.itemPricing.glassP
        );
    },
    convertInput: function(pageName, aluminumPrice, beerPrice, PlasticPrice, jugsPrice, glassPrice){
      $(pageName).find(".inputNumber").keyup(function(index, value){
        var currVal = this.value;
        var currID = this.id;
        var reg = /^\d+$/;
        if(currVal.length !== 0){
            if(reg.test(currVal)){
              if(currID === "aluminumInput"){
                inputConvertion(aluminumPrice);
              }else if(currID === "beerInput"){
                inputConvertion(beerPrice);
              }else if(currID === "plasticBtlInput"){
                inputConvertion(PlasticPrice);
              }else if(currID === "jugsContInput"){
                inputConvertion(jugsPrice);
              }else if(currID === "glassBtlInput"){
                inputConvertion(glassPrice);
              }
            }
        } else {
            $("#"+currID).val(""); //resets the value to blank;
            $("#"+currID).next().text("");
            $(".totalAmount").text("0.00");
        }

        function inputConvertion(btlPrice){
          var convVal = currVal * btlPrice;
          $("#"+currID).next().text(parseFloat(convVal).toFixed(2));
          
          saturn.computeTotal();
        };
      });
    },
    computeTotal: function(){
      var totalValue = 0;
      var itemTotal = $(".itemTotal");
      
      for (var i = 0; i < itemTotal.length; i++){
        if(itemTotal.eq(i).text().length !== 0){
            totalValue += parseFloat(itemTotal.eq(i).text());
        }
      }
      return $(".totalAmount").text(totalValue.toFixed(2));
    }
};