const form = document.querySelector('.searchForm')
const pokemonList = document.getElementById('Pokemon list')

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
})