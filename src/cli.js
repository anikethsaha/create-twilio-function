const yargs = require('yargs');
const createTwilioFunction = require('./create-twilio-function');

function cli(cwd) {
  yargs.help();
  yargs.alias('h', 'help');
  yargs.version();
  yargs.alias('v', 'version');

  yargs.default('path', process.cwd);

  yargs.usage('Creates a new Twilio Function project');
  yargs.command(
    '$0 <name>',
    'Creates a new Twilio Function project',
    command => {
      command.positional('name', {
        describe: 'Name of your project.',
        type: 'string'
      });
      command.options({
        accountSid: {
          alias: 'a',
          describe: 'The Account SID for your Twilio account',
          type: 'string'
        },
        authToken: {
          alias: 't',
          describe: 'Your Twilio account Auth Token',
          type: 'string'
        }
      });
    },
    argv => createTwilioFunction(argv)
  );

  return yargs;
}

module.exports = cli;