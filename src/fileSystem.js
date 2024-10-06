import { INITIAL_PATH } from './constants.js';

const fileSystem = {
    root: {},
};
  
let currentDirectory = fileSystem.root;
let path = [INITIAL_PATH];
  

function pwd() {
    console.log(path.join('/'));
}
 
function ls() {
    console.log(Object.keys(currentDirectory));
}

function mkdir(dirName) {
    if (!currentDirectory[dirName]) {
      currentDirectory[dirName] = {};
    } else {
      console.log("Directory already exists");
    }
}
  
function touch(fileName) {
    if (!currentDirectory[fileName]) {
      currentDirectory[fileName] = '';
    } else {
      console.log("File already exists");
    }
}
  
function cd(dirName) {
    if (dirName === "..") {
      if (path.length > 1) {
        path.pop();
        currentDirectory = fileSystem.root;
        path.slice(1).forEach(dir => currentDirectory = currentDirectory[dir]);
      } else {
        console.log("You are already in the root directory.");
      }
    } else if (currentDirectory[dirName]) {
      currentDirectory = currentDirectory[dirName];
      path.push(dirName);
    } else {
      console.log("Directory not found.");
    }
}
export { pwd, ls, mkdir, touch, cd };