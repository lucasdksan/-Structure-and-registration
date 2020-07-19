const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-headelebars');
const {host,post,user,password} = require('../config/mail.json');
const transport = nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      pass
    }
  });
  transport.use('compile',hbs({
    viewEngine: 'headlebars',
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html'
  }))
  module.exports = transport;