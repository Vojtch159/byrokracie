const fs = require('fs')

const inputFile = "input.txt"

function find_key (_input: string[], value: number, result: number[]) {
    let input = _input;
    let keys: number[] = [];

    input.forEach((pair) => {
        const _value: number = Number(pair.split(" ")[0]);
        if (_value == value) {
            const _key = Number(pair.split(" ")[1]);
            keys.push(_key);
        }
    })
    if (keys.length === 0) {
        if(!result.find(e => e === value)){
            result.push(value)
        }
    } else {
        keys.forEach((_key: number) =>{
            find_key(_input, _key, result)
        })
        if(!result.find(e => e === value)){
            result.push(value)
        }
    }
}



function result (input: string[]) {
    const P = Number(input[0].split(" ")[0]);
    const Z = Number(input[0].split(" ")[1]);
    const n = Number(input[0].split(" ")[2]);
    input.shift();
    let result: number[] = [];
    try{
        find_key(input, n, result);
    } catch {
        
    }
    if(result.length === 0) {
        console.log("ajajaj");
    } else {
        console.log("pujde to", result.join(" "))
    }
}

let input = fs.readFileSync(inputFile, {encoding: "utf8"})
input = input.split("\n"); //every line is one array element
const T = Number(input[0])
input.shift() //delete line with T

let inputs: any = [];
for(let i = 0; i < T; i++) {
    const Z = Number(input[0].split(" ")[1]);
    inputs.push([]);
    inputs[i].push(input.shift());
    for(let j = 0; j < Z; j++) {
       inputs[i].push(input.shift())
    }
}

for(let i = 0; i < T; i++) {
    result(inputs[i])
}