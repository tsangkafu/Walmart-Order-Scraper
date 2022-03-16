// number of total items
let numOfItem = document.querySelectorAll(`div[data-automation="item-card"] div > a`).length;

// number of substitutions
let numOfSub = document.querySelectorAll(`div[data-automation="substitution-card"]`).length;
// remove substitution cards
document.querySelectorAll(`div[data-automation="substitution-card"]`).forEach(node => node.remove());

let name = [];
let price = [];

for(let i = 0, j = 0; i < numOfItem; i++){
    // for substitution
    if (i >= numOfItem - numOfSub){
    	name.push(document.querySelectorAll(`p[data-automation="item-name-${j}"]`)[1].textContent);
	    j++;
    } else {
    	name.push(document.querySelector(`p[data-automation="item-name-${i}"]`).textContent);
    }
    price.push(document.querySelectorAll(`div[data-automation="item-card"] > div > div:nth-child(2) span > span`)[i].textContent.replace("$", ""));
}

console.log(name.join("\n") + "\n" + price.join("\n"));
