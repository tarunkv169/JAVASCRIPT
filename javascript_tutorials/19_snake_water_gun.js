// use javascript to create a game of snake water of gun. the game should ask you to enter s,w or g the computer shouk be able to randomly generate S,w or g and declare win or loss using alert . use confirm and promtp wherever rewquired

/*some math functions-------Math.----------1. ceil()-----gives upper value(lower value in negative)
                                              floor()-----gives lower value(upper value in negative)
                                           2. round()-----do rounding off
                                              trunc()-----gives integer value not decimal nos
                                           3. max(,,)-----gives max ele out of diff
                                              min(,,)
                                           4. sqrt()-----give sqroot
                                              cbrt()
                                           5. pow(x,y)----do power
                                           6. random()-----give random no between 0 and 1
                                              floor(Math.random() * N) + 1;-------gives random no between 0 and N
                                           7. abs(2+5);-----gives absolute value 
                                           8. PI---------give value of pi
                                           
                                           
*/


let cpuI = Math.floor(Math.random()*3);
let user = prompt("enter s for snake , g for gun, w for water ");
let cpu = ["s","g","w"][cpuI];


function match(cpu,user)
{

   if(cpu === user)
   {
     return "NOBODY WINS";
   }
   else if(cpu === "s" && user === "g" || cpu === "g" && user === "w" || cpu === "w" && user === "s")
   {
      return "USER";
   }
   else if(user === "s" && cpu === "g" || user === "g" && cpu === "w" || user === "w" && cpu === "s")
   {
      return "CPU";
   }

}


let result = match(cpu,user);
alert(`cpu : ${cpu} \nuser : ${user} \nwinner is ------- ${result} `);
document.write(`cpu : ${cpu} \nuser : ${user} \nwinner is ------- ${result} `);
   

