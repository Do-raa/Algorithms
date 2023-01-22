function detectWord(str) {
	const regex = /[a-z]/g;
	return str.match(regex).join("");
}