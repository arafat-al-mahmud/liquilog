#! /usr/bin/env node

const { program, Option } = require('commander');
const create = require('./commands/create');

program
    .command('create')
    .description('Create a changelog')
    .requiredOption('-t, --title <title>', 'Changelog title')
    .addOption(new Option('-d, --dbType <dbType>', 'Mention the database type').choices(['h2', 'oracle', 'mysql', 'postgres']))
    .option('-a, --author [author]', 'Author name of the changelog')
    .action(create);

program.parse();
