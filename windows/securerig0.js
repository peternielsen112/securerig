#!/usr/bin/env node

const prog = require('caporal');

prog
  .version('1.0.0')
  .command('login', 'Log in to your SecureRig system')
  .argument('<user>', 'Username')
  .option('<password>', 'Password')

  .action((args, options, logger) => {

      console.log({
      args: args,
      options: options
    });

  });

prog.parse(process.argv);
