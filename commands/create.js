
const fs = require('fs');
const chalk = require('chalk');
const userName = require('git-user-name');

const create = ({title, dbType, author}) => {
    const currentTimestamp = new Date().getTime();
    if(!author) {
        author = userName();
        if(!author) {
            console.log(chalk.red('Author name is required'));
            process.exit(1);
        }
    }
    const fileName = `${currentTimestamp}.${title}.${dbType || 'postgres'}.sql`;
    const filePath = `${process.cwd()}/${fileName}`;
    const fileContent = `-- liquibase formatted sql
-- changeset ${userName()}:${currentTimestamp}
-- rollback; 
    `;
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) throw err;
        console.log(chalk.green.bold(`changelog file with name ${fileName} was created successfully!`));
    });
}

module.exports = create;