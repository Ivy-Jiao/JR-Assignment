// 数据与变量：创建一个购物清单数组
let shoppingList = ["apple", "peach", "milk", "egg"];


// 数组应用：向购物清单中添加两样物品，并输出更新后的清单。
shoppingList.push("banana", "beef");
console.log("Add two items: ", shoppingList);

// 从购物清单中删除最后一项物品，并输出结果。
shoppingList.pop();
console.log("Delete last item: ", shoppingList);

/*
* 条件与循环：
* 创建一个函数，当购物清单中的物品超过5项时，在控制台输出"你的购物车满了"。
* @param {Array} list - 购物清单
*/
function itemLess5(list) {
    if (list.length > 5) {
        console.log("你的购物车满了");
    } else {
        console.log("Continue shopping");
    }
}
itemLess5(shoppingList);

// 使用循环语句遍历购物清单，将每一项物品在控制台上以编号的形式输出。例如：
// @param {Array} list - 购物清单
function cycleList(list){
    for (let i = 0; i < list.length; i++) {
        console.log(i + 1, list[i]);
    }
}
cycleList(shoppingList);


/* 函数与对象：
* 创建一个函数，该函数接受物品名称作为参数，并返回该物品是否在购物清单中。
* @param {Array} list - 购物清单
* @param {String} item - 物品名称
* 创建一个购物物品对象，其中包括物品名称、价格和数量。例如:
*/
let item = {
    name: "milk",
    price: 3.4,
    quantity: 2
};
function isItemExist(list, item) {
    if (list.includes(item.name)) {
        console.log(item.name +" is in the shopping list");
    } else {
        console.log(item.name +"is not in the shopping list");
    }
}
isItemExist(shoppingList, item);
