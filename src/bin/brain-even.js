#!/usr/bin/env node
import startGame from './../lib';

//  запускаем игру угадай четное число с количеством шагов 3.
startGame('even', 3, 'Answer "yes" if number odd otherwise answer "no".\n');
