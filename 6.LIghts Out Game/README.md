﻿Demo

Lights Out

- [Lights Out]() 
  - [The Game](#the-game)
  - [Plan](#plan)
  - [Code](#code)
  - [Further Study](#further-study) 
    - [Default Properties](#default-properties)
    - [Improve Our CSS](#improve-our-css)
    - [Ensure A Game Is Winnable](#ensure-a-game-is-winnable)
# **Lights Out**
This exercise provides a chance to work with React events where the state and events happen in different classes. 
## **The Game**
*Lights Out* is a logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off. I am personally TERRIBLE at this game. I hope you are better at playing it than I am! 

You can click on a cell to toggle that light — but it also toggles the light above it, to the left of it, to the right of it, and below it. (Cells on an edge or in the corner won’t flip as many lights, since they are missing some neighbors). 
## **Plan**
Before reading further, take a moment to think about how you would design this, component-wise. 

We’ll give you a component design further down, but thinking about the requirements and what components/state/props would be needed will help you learn the skills to design applications out of components. 

= STOP = **DRAW YOUR DESIGN OUT before reading further.**
## **Code**
This game will be built from three components:

Component Design

App

As often, this is a very simple component. It just renders the *Board* component. 

Board

The most sophisticated component. It will hold the state that represents the in-memory grid of true/false for lights-on/off. Since the state for the board lives here, this is also were the *setState()* calls will need to go — and therefore, all the functions that call *setState()*. 

Cell

A simpler component. This will simply render a *<div>*, where the CSS classes will indicate whether this cell is lit or unlit. This is what the user clicks on — but it will need to call a function it receives from the *Board*, since that will need to update the state. 

When the game is won, the board should not be shown, but a simple “You Won” message should show in its place. 

A small amount of code is provided, but there are lots of places where you’ll need to write code to get the game functional. 
## **Further Study**
### **Default Properties**
Add default properties for the board sizes and how likely it is the a light on the initial board is turned on or off. 
### **Improve Our CSS**
The CSS we provided is enough to visualize the game working, but it could be improved in a million ways: better colors, rounded shapes, or CSS animations might make it nicer. 
### **Ensure A Game Is Winnable**
Depending on the size of your board, some lights-on/lights-off starting configurations may not actually be solvable — which is pretty mean for your users. 

It’s relatively difficult to decide if any given board is solvable (here’s some [light reading on this topic](https://ida.mtholyoke.edu/xmlui/bitstream/handle/10166/693/375.pdf?sequence=1&isAllowed=y)) — but there is a simple trick to make sure a starting board you give a player is solvable. 

Figure out how to do this.
