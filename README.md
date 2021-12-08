# liquilog

cli tool for generating changelog for liquibase. It will help create a unique changeset inside a changelog with .sql format conforming to liquibase syntax.

# Installation

    npm i -g liquilog

# Usage

As of now this cli supports only creating a changelog.

At first, change directory to the folder where you want to track your database migration changelog files. Then run the following command for generating a changelog:

    liquilog create -t add-column-name-in-test -d postgres

Sample Output:

> 1638534419531.add-column-name-in-test.postgres.sql

Inside file:

> -- liquibase formatted sql
>
> -- changeset Arafat Al Mahmud:1638534419531
>
> -- rollback;

Here -t is for the title of your changelog. You shouldn't have any space in the title.

Options:

> -t, --title <title> Changelog title
>
> -d, --dbType <dbType> Mention the database type (choices: "h2", "oracle", "mysql", "postgres")
>
> -a, --author [author] Author name of the changelog (optional. If you don't provide an author name, liquilog will try to get the git author
> name.)
>
> -h, --help display help for command
