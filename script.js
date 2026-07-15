function mincost(arr) {
    arr.sort((a, b) => a - b);

    let cost = 0;

    while (arr.length > 1) {
        // Take the two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        let sum = first + second;
        cost += sum;

        // Insert the new rope back
        arr.push(sum);
        arr.sort((a, b) => a - b);
    }

    return cost;
}


module.exports=mincost;
