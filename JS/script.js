const form = document.querySelector('.searchForm')
const pokemonList = document.getElementById('Pokemon list')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    console.log(name)

    const url = window.location.origin
    console.log(url)

    // base url - settting var
    const response = await fetch(`${url}/pokemon/${name}`)
    const data = await response.json().then((value) => {
        console.log(value)
    })
    // console.log(data)

    // const pokemon = await response.json()
    // const pokemonElement = document.createElement('li')
    
    // pokemonElement.textContent = `${pokemon.name} - ${pokemon.Type} - Base Stats: ${pokemon.BaseStats}`
    // pokemonList.appendChild(pokemonElement)
})