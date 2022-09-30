const operacionesMatematicas = require('./calculadora');
 
describe("Calculator tests", () => {
 test('adding 1 + 2 should return 3', () => {
   // arrange and act
   let result = operacionesMatematicas.suma(1,2)
 
   // assert
   expect(result).toBe(3);
 });
 
 test("subtracting 2 from 10 should return 8", () => {
   // arrange and act
   let result = operacionesMatematicas.resta(10,2)
 
   // assert
   expect(result).toBe(8);
 });
 
 test("multiplying 2 and 8 should return 16", () => {
   // arrange and act
   let result = operacionesMatematicas.producto(2,8)
 
   // assert
   expect(result).toBe(16);
 });

 describe("Calculator tests", () => {
   let input1 = 0
   let input2 = 0
 
 beforeAll(() => {
   console.log("beforeAll called");
 });
 
 afterAll(() => {
   console.log("afterAll called");
 });
 
 beforeEach(() => {
   console.log("beforeEach called");
   input1 = 1;
   input2 = 2;
 });
 
 afterEach(() => {
   console.log("afterEach called");
 });
 
 test('adding 1 + 2 should return 3', () => {
   // arrange and act
   var result = operacionesMatematicas.suma(input1,input2)
 
   // assert
   expect(result).toBe(3);
 });
})
})