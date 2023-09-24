# GIGA LOOT

## Intro

On GIGA LOOT the luck is on your site. Choose between a huge variety of loot boxes to play and win. Charge or discharge your balance in a mater of seconds and enjoy limitless gambling. 

![](https://i.giphy.com/media/8OTwsxpkOES0iTDG1D/giphy.webp)

## Functional Description

### Use Cases

User
- list loot boxes
- view loot box
- cash in
- spin & gamble on loot box
- cash out

Admin
- create loot box
- update loot box
- see credit card data
- delete loot box

## Technical Description

### Data Model

User
- id
- name
- email
- password
- creditcard number
- expire date
- cvv
- type of card
- balance

LootBox (Post)
- id
- name
- author
- image
- text