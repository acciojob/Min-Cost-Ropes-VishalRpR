function mincost(arr)
{ 
	arr.sort()
	let cost=0;
  let newarr=arr.map((item,i)=>{
	  cost+=item;
	  return cost;
})


	let sum=0;
	newarr.shift();
	newarr.forEach((item)=>{
        sum+=item;
	})

	return sum;
  
}


module.exports=mincost;
