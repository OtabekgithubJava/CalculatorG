self.addEventListener("message", (e) => {
	console.log(e.data);
});

let i = 0;

function itrerate() {
	i++;
	postMessage(i);
}

itrerate();