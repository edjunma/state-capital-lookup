const search = document.getElementById("search")
const match = document.getElementById("match-list")

// Search states.json and filtering them
// Using async/await with promises
const searchStates = async searchText => {
	const res = await fetch("../data/states.json")
	const states = await res.json()

	// Get matches to current text input
	let matches = states.filter(state => {
		const regex = new RegExp(`^${searchText}`, "gi")
		return state.name.match(regex) || state.abbr.match(regex)
	})

	if (searchText.length === 0) {
		matches = []
	}

	outputHtml(matches)
}

// Show the results in HTML
const outputHtml = matches => {
	if (matches.length > 0) {
	}
}

search.addEventListener("input", () => searchStates(search.value))
