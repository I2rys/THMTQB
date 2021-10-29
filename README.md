<h1 align="center">THMTQB</h1>
<h4 align="center">TryHackMe any room task question answer bruteforcer</h4>
<p align="center">
	<a href="https://github.com/I2rys/THMTQB/blob/main/LICENSE"><img src="https://img.shields.io/github/license/I2rys/THMTQB?style=flat-square"></img></a>
	<a href="https://github.com/I2rys/THMTQB/issues"><img src="https://img.shields.io/github/issues/I2rys/THMTQB.svg"></img></a>
	<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/-Nodejs-green?style=flat-square&logo=Node.js"></img></a>
</p>


## Installation
Github:

    git clone https://github.com/I2rys/THMTQB

NPM Packages:

    npm i request
    
## Usage

    node index.js <dictionary> <room_code> <question_no> <task_no> <csrf_token> <cookie>

+ dictionary - Your answers.
+ room_code - Challenge room code.
+ question_no - The no of the question.
+ task_no - The question task no.
+ csrf_token - Your account csrf token(Can be retrieve using Inspect -> Network).
+ cookie - A file with your cookie(Can be retrieve using Inspect -> Network).

## License
MIT © I2rys
