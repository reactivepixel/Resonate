#!/bin/sh

NODE_ENV=development sequelize db:drop
NODE_ENV=development sequelize db:create
NODE_ENV=development sequelize db:migrate
NODE_ENV=development sequelize db:seed:all