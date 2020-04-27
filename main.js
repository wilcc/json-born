const fs = require('fs')
// fs.readFile('./users.json', function(error, data) {
//     if (error) {
//         throw error;
//     }

//     const actualObj = JSON.parse(data);
//     console.log(actualObj)
//     for (let i = 0;i < process.argv.length;i++){
//         console.log(process.argv[i])
//     }
// })

// const user = fs.readFile('./users.json', function(error, data) {
//     if (error) {
//         throw error;
//     }

//     const actualObj = JSON.parse(data);
//     for(const user of actualObj){
//         console.log(user)
//     }
// })
// console.log(process.argv[2])
if(process.argv[2]==='GET'){
    fs.readFile('./users.json', function(error, data) {
        const actualObj = JSON.parse(data);
            if (error) {
                throw error;
            }
            else if(process.argv[3]==='users'){
            console.log(actualObj)
                }
            else if(process.argv[3]==='user'){
            console.log(actualObj[process.argv[4]])
            }
            else if(process.argv[3]==='friend'){
            console.log(actualObj[process.argv[4]].friends)
            }
        })
    }

    if(process.argv[2]==='PUT' && process.argv[3]==='user'){
        fs.readFile('./users.json', function(error, data) {
        const actualObj = JSON.parse(data);
        if (error) {
            throw error;
        }
        const newObj = {"name": process.argv[4],"age":process.argv[5],"eyeColor":process.argv[6]}
        const newData = JSON.stringify(newObj)
        const newJson = actualObj.push(newData)
            fs.writeFile('./users.json', newJson,function(error,data) {
                if (error) {
                    throw error;
                }
                

        })
        })
    }