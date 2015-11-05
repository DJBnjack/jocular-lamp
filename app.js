var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

var low = 0;
var high = 100;
var answer = Math.floor(Math.random() * (high - low) + low);

console.log("Guess the number between " + low + " and " + high);
rl.setPrompt('> ');
rl.prompt();

rl.on('line', function(line) {
	if (line.trim() < answer) console.log('Guess higher!');
	if (line.trim() > answer) console.log('Guess lower!');
	if (line.trim() == answer)
	{
		console.log('Correct!!');
		rl.close();
	}
  rl.prompt();
}).on('close', function() {
  console.log('Have a great day!');
  process.exit(0);
});

