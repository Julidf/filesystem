# Simple File System Simulator (Linux)

This project is a simple command-line file system simulator implemented in JavaScript. It simulates the file system of a Linux operating system, allowing users to navigate through directories, create files and directories, and list the contents of the current directory.

## Features

- **pwd**: Print the current working directory.
- **ls**: List the contents of the current directory.
- **cd <directory>**: Change the current directory to the specified directory. Use `cd ..` to go up one level.
- **mkdir <directory>**: Create a new directory with the specified name.
- **touch <file>**: Create a new file with the specified name.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install the required dependencies (if any):
   ```bash
   npm install
   ```

## Usage

1. Run the application:
   ```bash
   npm start
   ```

2. You will be prompted to enter commands. Type any of the supported commands (e.g., `pwd`, `ls`, `mkdir myFolder`, `cd myFolder`, etc.) and press Enter.

3. To exit the application, you can simply close the terminal or stop the process.

## Example Commands

- To create a new directory:
  ```bash
  mkdir myFolder
  ```

- To change to the new directory:
  ```bash
  cd myFolder
  ```

- To create a new file:
  ```bash
  touch myFile.txt
  ```

- To list the contents of the current directory:
  ```bash
  ls
  ```

- To print the current working directory:
  ```bash
  pwd
  ```