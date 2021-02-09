const inquirer = require('inquirer');

async function main(){
  console.log( `.. getting user info ` )
  
  const response = await inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])

  console.log( `got user info: `, response )
}
main()
