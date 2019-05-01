const search = document.getElementById("search")
const match = document.getElementById("match-list")

// Search states.json and filtering them
// Using async/await with promises
const searchStates = async searchText => {
	const res = await fetch("../data/states.json")
	const states = await res.json()

	console.log(states)
}

search.addEventListener("input", () => searchStates(search.value))
