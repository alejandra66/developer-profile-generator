const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const util = require('util');
const puppeteer = require('puppeteer');
const generateHTML = require('./generateHTML');
const writeFileAsync = util.promisify(fs.writeFile);

let img = '';
let location = '';
let gitProfile = '';
let userBlog = '';
let userBio = '';
let repoNum = 0;
let followers = 0;
let following = 0;
let starNum = 0;
let color = '';

// initialize
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Input your GitHub User Name: ',
        name: 'username'
      },
      {
        type: 'input',
        message:
          'What color do you want to use as your theme green/red/pink/blue?',
        name: 'color'
      }
    ])