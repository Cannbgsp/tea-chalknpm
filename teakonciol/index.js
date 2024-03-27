const chalk = require('chalk');

const coolMessage = () => {
  console.log(
    chalk`
    {cyan.bold _______}
  /{cyan.bold ______\\}
 /{cyan.bold  ______}
(()=>{'${chalk.green.bold('WELCOME')}
   ${chalk.magenta.bold('TO')}
   ${chalk.yellow.bold('MY')}
   ${chalk.bgMagenta.black.bold('AWESOME')}
   ${chalk.inverse.bold('NPM')}
   ${chalk.italic.cyan('PACKAGE')}

 ${chalk.blue.bold('Your command here...')}

'}())
`
  );
};

coolMessage();