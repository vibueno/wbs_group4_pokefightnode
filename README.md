# Pokefight

## Table of Contents

- [Description](#description)
- [Organisation](#organisation)
- [Data](#data)
- [Endpoints](#endpoints)
- [Live](#live)
- [Programming](#programming)

## Description

This repository contains the back-end part of a Pokemon Fight application, created for a WBS Coding School assignment.

## Organisation

[Trello board](https://trello.com/b/Icz4WKYA/group4-pokefight)

## Data

The data for this project has been obtained from these sources:

- https://pokedevs.gitbook.io/pokedex/resources/pokemon
- https://pokeapi.co/

Since we were provided with a JSON file that didn't include all the information we wanted to use, we went for a [nice ride](./doc/databasemerge.md) to merge all the information together in a database.

## Endpoints

| HTTP Method | Endpoint                                                                                                       | Description                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| GET         | [/pokemon](https://wbsgroup4pokefight.herokuapp.com/pokemon)                                                   | Retrieves all pokemon                                                                                                        |
| GET         | [/pokemon/:id](https://wbsgroup4pokefight.herokuapp.com/pokemon/76)                                            | Retrieves pokemon with id 1                                                                                                  |
| GET         | [/pokemon/:id/:info](https://wbsgroup4pokefight.herokuapp.com/pokemon/76/name)                                 | Retrieves specific info (type, name or type) from pokemon with id 1                                                          |
| GET         | [/pokemon/fight/halloffame](https://wbsgroup4pokefight.herokuapp.com/pokemon/fight/halloffame)                 | Retrieves top 10 pokemon from hall of fame                                                                                   |
| GET         | [/pokemon/fight/halloffame?limit=n](https://wbsgroup4pokefight.herokuapp.com/pokemon/fight/halloffame?limit=4) | Retrieves _n_ pokemon from hall of fame                                                                                      |
| POST        | /pokemon/fight/create                                                                                          | Saves a fight result. Request body must contain a JSON object with format: `{"pokemon1": id, "pokemon2": id, "winner:" id }` |

## Live

This application is hosted on [Heroku](https://wbsgroup4pokefight.herokuapp.com/pokemon). Consult the [deployment documentation](./doc/deployment.md) for more information.

## Programming

This project has been developed using [NodeJS](https://nodejs.org/en) and [ExpressJS](https://expressjs.com).

### Helpers

- [Prettier](https://prettier.io/): [install Prettier](https://prettier.io/docs/en/editors.html) for your code editor. Prettier can run 'on file save', so that you don't need to run it manually. Look for instructions on how to set it up in your code editor, if needed.
