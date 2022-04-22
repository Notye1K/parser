import fs from "fs";

const myData = JSON.parse(fs.readFileSync("./sponsored-repos.json", "utf8"));
const fields = ["name", "owner", "description", "topic", "language", "stars"];


const sorted = myData.sort((a,b) =>{
    if (a.stars < b.stars) {
        return 1;
    }
    if (a.stars > b.stars) {
        return -1;
    }
    // a must be equal to b
    return 0;
    
})

const csv = sorted.map(repo => {
   return fields.map(field =>{
        return repo[field]
    })
})