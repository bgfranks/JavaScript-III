/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Object binding is when this is used in the window object and returns everything in the window
 * 2. Implict Binding is when a function is called with a dot. What is before the dot is this.
 * 3. New biding is when an instance of the object is created and returned by the constructor.
 * 4. Explicit binding is when JS methods are used to explictly define this.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function guitar(brand) {
  console.log(this);
  return brand;
}

guitar("Fender");

// Principle 2

// code example for Implicit Binding
const myGuitar = {
  model: "72 Thinline",
  sayModel: function(name) {
    console.log(`My guitar is a ${this.model} ${name}`);
    console.log(this);
  },
};
myGuitar.sayModel("Squier");

// const myGuitar = {
//   model: "72 vintage modified",
//   sayBrand: brand => {
//     console.log(`My guitar is a ${this.model} ${brand}`);
//     console.log(this);
//   },
// };

// myGuitar.sayBrand("Squier");

// Principle 3

// code example for New Binding
function Guitar(model) {
  this.brand = "Fender";
  this.model = model;
  this.sayGuitar = () => {
    console.log(`${this.brand} ${this.model}`);
  };
}

const tele = new Guitar("Telecaster");
tele.sayGuitar();

// Principle 4

// code example for Explicit Binding
var guitar = {
  name: function() {
    console.log(`${this.brand} ${this.model}`);
  },
};
var guitar1 = {
  brand: "Gibson",
  model: "Les Paul",
};
guitar.name.apply(guitar1);
