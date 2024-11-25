const form = document.querySelector('.searchForm')
const pokemonList = document.getElementById('Pokemon list')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    //   const type = document.getElementById('type').value
    //   Was trying to add a way to get the Type also but kept running into errors.

    try {
        const response = await fetch('/pokemon', {
            method: 'POST',
            headers: { 'ContentType': 'application/json' },
            body: JSON.stringify({ name }),
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error('Error fetching pokemon.', error)
    }
})

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = document.getElementById('name').value
    console.log(name)

    const url = window.location.origin
    console.log(url)

    const pokemonResponse = await fetch(`${url}/pokemon/${name}`)
    const pokemonData = await pokemonResponse.json()
    console.log(pokemonData)

    const badgeResponse = await fetch(`${url}/badge/${name}`)
    const badgeData = await badgeResponse.json()
    console.log(badgeData)

    const movesResponse = await fetch(`${url}/moves/${name}`)
    const movesData = await movesResponse.json()
    console.log(movesData)
})