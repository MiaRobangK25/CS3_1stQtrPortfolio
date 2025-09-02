console.log('Hiiii Sir~Tenkyu for the help po for outputting my text');

// tv5 - 5
//abscbn - 2
//gma -7
// ptv - 4

rl = require('readline') // add library 
rli = rl.createInterface({
    input : process.stdin,
})

/*
    rl = require('readline)
    rli = rl.createInterface({
        input : process.stdin,
    })
    rli.on('line',get_the_channel)
    function get_inputs(line)
    {
        inputs=[]
        inputs.push(line)
        var inputs = []
    }
    rli.on('close',get_the_channel)
    
    function declearation deN 
*/ 

rli.on('line', get_the_channel) //creating interface for input, using function of lines 9-10 library
// this is an INFINITE LOOP, and it's identifying / labelling the stuff we need 
function get_inputs(line)
{
    inputs =[]
    inputs.push(line)
    var inputs = []
}

rli.on('close',get_the_channel)

function get_the_channel() // define what a line is 
{
    for(let i=0; i<inputs.length; i++){
        switch(inputs[i]){
            case "5":
                console.log("tv5")
                break;
            case "2":
                console.log("abscbn")
                break;
            case "7":
                console.log("gma")
                break;
            case "13":
                console.log("ibc")
                break;
            case "4":
                console.log("ptv")
                break;
            default:
                console.log("Unknown channel")
        }
    }
}

