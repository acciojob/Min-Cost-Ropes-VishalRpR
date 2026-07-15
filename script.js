function mincost(arr)
{ 
	arr.sort()
	let cost=0;
  arr.map((item,i)=>{
	  cost+=item;
	  return cost;
})
	let sum=0;
	arr.shift();
	arr.forEach((item)=>{
        sum+=item;
	})

	return sum;
  
}

module.exports=mincost;
