const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const util = require('util');
const puppeteer = require('puppeteer');
const generateHTML = require('./generateHTML');
const writeFileAsync = util.promisify(fs.writeFile);