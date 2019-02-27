#!/bin/sh

NODE_ENV=production sequelize db:migrate:undo:all
NODE_ENV=production sequelize db:migrate
NODE_ENV=production sequelize db:seed:all