let responseTimes = [120, 230, 450, 510, 180, 620];
let SLA_LIMIT = 500;

let avg = 0;

for (let i = 0; i< responseTimes.length; i++)
{
    
    avg = avg+responseTimes[i];
    
   
}

	 console.log(avg) ;
     if(avg/responseTimes.length <= SLA_LIMIT)
     {
        console.log("Average response time is within SLA limit");
     }
     else
     {
        console.log("Average response time exceeds SLA limit");
     }