# Pokedev @ Zipdev

## How to run it

1. Clone this repo (`git clone https://github.com/ivandevp/pokedev.git`)
2. Enter your downloaded project (i.e. `cd pokedev`)
3. Install dependencies (`yarn`)
4. Start project (`yarn start`)

## Keep in mind

While developing this project, [PokeAPI](https://pokeapi.co/) was facing an 
[issue](https://github.com/PokeAPI/pokeapi/issues/372) with limit and offset,
the solution was to use a [wrapper API hosted on Firebase](https://pokeapi-215911.firebaseapp.com/api/v2/). 
If want to change the endpoint you can run
`POKE_ENDPOINT='YOUR API ENDPOINT' yarn start` in order to change the API where
results come to the project.

> Note: The custom endpoint shouldn't include any resource, just root and finish
> with an slash (`/`). Resources returned from API should match the content returned
> from Poke API.