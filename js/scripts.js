$(document).ready(function() {
  $("form#new-package").submit(function(event) {
    event.preventDefault();

    var inputtedWeight = $('input#weight').val();
    var inputtedLength = $('input#length').val();
    var inputtedWidth = $('input#width').val();
    var inputtedHeight = $('input#height').val();
    var inputtedMileage = $('input#distance').val();
    var inputtedClass = $('select#class').val();

    var calcOutput = { weight: inputtedWeight,
                       length: inputtedLength,
                       width: inputtedWidth,
                       height: inputtedHeight,
                       class: inputtedClass,
                       distance: inputtedMileage,
                       distanceCost: function() {
                         return this.distance * 2
                       },
                       shippingClass: function() {
                         if (this.class === "standard") {
                           return 1.50
                         } else if (this.class === "priority") {
                           return 3.00
                         } else if (this.class === "standardGround") {
                           return 5.00
                         } else return 10.00
                       },
                       getRate: function() {
                         return this.weight*16 + (this.length * this.width * this.height) * this.distanceCost() * this.shippingClass();
                       }

    }
    var cost = calcOutput.getRate();

    $("ul#cost").append("<li>" + "At the " + inputtedClass + " rate, your shipping cost is $" + cost + "</li>")
  });
});
