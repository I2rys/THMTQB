//Dependencies
const Request = require("request")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

var Self = {}
Self.in_index = 0

//Function
function check(max, word, cookie){
    Request.post(`https://tryhackme.com/api/${Self_Args[1]}/answer`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "cookie": cookie,
            "csrf-token": Self_Args[4]
        },
        body: `answer=${word}&questionNo=${Self_Args[2]}&taskNo=${Self_Args[3]}`
    }, function(err, res, body){
        Self.in_index += 1

        if(err){
            console.log("Something went wrong please make sure the room code, question_no & task_no is valid.")
            process.exit()
        }

        if(body.indexOf("Question has already been answered.") != -1){
            console.log("This task question seems to be already answered.")
            process.exit()
        }

        if(body.indexOf('"success":true') != -1){
            console.log(`Correct answer: ${word}`)
            process.exit()
        }else{
            console.log(`Invalid answer: ${word}`)
        }

        if(Self.in_index == max){
            console.log("Finished!")
            process.exit()
        }
    })
}

//Main
if(!Self_Args.length){
    console.log("node index.js <dictionary> <room_code> <question_no> <task_no> <csrf_token> <cookie>")
    process.exit()
}

if(!Self_Args[0]){
    console.log("Invalid dictionary.")
    process.exit()
}

if(!Self_Args[1]){
    console.log("Invalid room_code.")
    process.exit()
}

if(!Self_Args[2]){
    console.log("Invalid question_no.")
    process.exit()
}

if(isNaN(Self_Args[2])){
    console.log("Invalid question_no, make sure It's Int.")
    process.exit()
}

if(!Self_Args[3]){
    console.log("Invalid task_no.")
    process.exit()
}

if(isNaN(Self_Args[3])){
    console.log("Invalid task_no, make sure It's Int.")
    process.exit()
}

if(!Self_Args[4]){
    console.log("Invalid csrf_token.")
    process.exit()
}

if(!Self_Args[5]){
    console.log("Invalid cookie.")
    process.exit()
}

if(!Fs.existsSync(Self_Args[0])){
    console.log("Invalid dictionary.")
    process.exit()
}

if(!Fs.existsSync(Self_Args[5])){
    console.log("Invalid cookie.")
    process.exit()
}

const dictionary_data = Fs.readFileSync(Self_Args[0], "utf8").split("\n")
const cookie_data = Fs.readFileSync(Self_Args[5], "utf8")

if(!dictionary_data){
    console.log("Dictionary data is empty.")
    process.exit()
}

if(!cookie_data){
    console.log("Cookie data is empty.")
    process.exit()
}

for( i in dictionary_data ){
    check(dictionary_data.length, dictionary_data[i], cookie_data)
}
