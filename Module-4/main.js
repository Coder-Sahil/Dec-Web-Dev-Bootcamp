// https://raw.githubusercontent.com/raghavdhingra/ItemApi/main/item.json
// http://postman-student.herokuapp.com

console.log("Hello!");

const itemAPI =
  "https://raw.githubusercontent.com/raghavdhingra/ItemApi/main/item.json";

// callback functions, Promises, async await

const requestBtn = document.getElementById("request-button");
const tableResponse = document.getElementById("response");

const beautifier = (data) => {
  // const obj = {
  //   name: "Pen",
  //   id: 1,
  //   price: 10,
  //   rating: 5,
  // };

  const obj = data;
  const productList = obj.product;

  const HTML_MARKUP = productList.map(
    (product) =>
    `.<tr>
        <td>${product.name}</td>
        <td>${product.id}</td>
        <td>${product.price}</td>
        <td>${product.rating}</td>
      </tr>`);

  // const HTML_MARKUP = `
  //   <tr>
  //     <td>${obj.name}</td>
  //     <td>${obj.id}</td>
  //     <td>${obj.price}</td>
  //     <td>${obj.rating}</td>
  //   </tr>
  // `; // ES6

  return HTML_MARKUP;
};

const requestItems = async () => {
  // callback function
  const response = await fetch(itemAPI); // XMLHttpRequest
  const data = await response.json();

  tableResponse.innerHTML += beautifier(data);
};

requestBtn.addEventListener("click", requestItems);
