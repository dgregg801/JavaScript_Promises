/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */


function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}


let errorID = document.getElementById("error");
let listID = document.getElementById("list");
/*let promise = getList();
function handleList (list) {
  console.log(list);
}

function handleError(err) {
  console.error(err);
}

promise.then(handleList).catch(handleError);
*/


/*let promise = getList();
promise.then((list) => {
  console.log(list);
}).catch((err) => {
  console.error(err);
12});
*/

//Exercise 1
getList()
.then((resolvedVal) => {
  console.log(resolvedVal);
  for (let i = 0; i < resolvedVal.length; i++){
    const hobbitList = document.createElement("li");
    hobbitList.textContent = resolvedVal[i];
    listID.append(hobbitList);
  }
})
.catch((resolvedVal) => {
  console.error(resolvedVal);
  errorID.textContent = resolvedVal.message;
});

// TODO: Handle the resolved or rejected states of the promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
