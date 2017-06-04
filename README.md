
# Writing changes to the docs

You can use either your own code editor or [Download the Editor](https://www.gitbook.com/editor)



# Building the Docs

You can add to the docs as much as you like!

If you want to build the docs to distribute changes, you will need to follow these instructions:

## Install Dependencies

### NodeJS

You must first have node 6+ and npm installed.

- Linux: https://nodejs.org/en/download/package-manager/
- Elsewise: https://nodejs.org/en/download/

### Calibre

1. [Install Calibre](https://calibre-ebook.com/download)
2. execute `export PATH=$PATH:/Applications/calibre.app/Contents/MacOS`

## Initial Setup

From this directory:

1. `chmod u+x setup update-book`
2. `./setup`

## Build

Now, you can run build every time you want to build changes and write them to tresorit.

1. `./update-book`

This will build the book, generate the PDF, and push the changes to github!
