const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const CFonts = require('cfonts');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


(async () => {
	console.clear()
 CFonts.say(`V3`, {
            font: '3D',
            align: 'left',
            gradient: ['red', 'magenta']
        })
        await sleep(3000);


const uspw = rs.question('Account? : ')

const dupe = (code, auth) => new Promise((resolve, reject) => {

    fetch(`http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/${code}`, {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});



console.log(`
███████ ████████ ██    ██ ███    ███ ██████  ██      ███████         
██         ██    ██    ██ ████  ████ ██   ██ ██      ██           
███████    ██    ██    ██ ██ ████ ██ ██████  ██      █████          
     ██    ██    ██    ██ ██  ██  ██ ██   ██ ██      ██            
███████    ██     ██████  ██      ██ ██████  ███████ ███████    
`);

console.log(`By : ${chalk.red('@xDAST and Friends')} - ${chalk.blue('Credit goes to @dkimpostor @Natasya @Arnazsys')}`)

console.log(`
Features :
1. ${chalk.green('Prize : 1 Crown + 30 Trophy + 35 Star ( Stumble Pass ) + 3000exp')}
2. ${chalk.red('Prize : 20 Trophy + 30 Star ( Stumble Pass ) + 1500exp')}
3. ${chalk.cyan('Prize : 10 Trophy + 25 Star ( Stumble Pass ) + 500exp')}
4. ${chalk.yellow('Prize : 20 Star ( Stumble Pass ) + 100exp')}
`);

    const feature = rs.question('/ Choose : ');

    if (feature == '1') {

        const auth = rs.question('/ Enter Authentication Code : ');
        const time = rs.question('/ Enter delay in ms ( Example = 1000 is 1 sec ) : ');
        console.log('');

        while (true) {

            var code = '3';
            const result = await dupe(code, auth, time);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] auth code error!`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                const crown = data.User.Crowns;
                
                console.log(chalk.red('🍀 Status : Success'));
                console.log(chalk.yellow(`🍀 Country : ${country}`))
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                console.log(chalk.magenta(`🍀 Name : ${username}`))
                console.log(chalk.cyan(`🍀 Trophy : ${trophy}`))
                console.log(chalk.cyan(`🍀 Crown : ${crown}`)) 
                console.log(chalk.blue(`🍀 Total Exp : ${exp}`))
                console.log(chalk.white(`🍀 SPass Star : ${tokenPass}`))
                console.log('')
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(750)
                console.log(chalk.grey(`// some trophy may not be duped into the account.`))
                await sleep(500)
                console.log(chalk.grey(`// starting 12 seconds delay`))
                await sleep(12000)
                console.log('')
                console.log(chalk.grey(`// delay finished`));
                

            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Your account is Banned!`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }
        
    } else if (feature == '2') {

        const auth = rs.question('/ Enter Authentication Code : ');
        const time = rs.question('/ Enter delay in ms ( Example = 1000 is 1 sec ) : ');
        console.log('');

        while (true) {

            var code = '2';
            const result = await dupe(code, auth, time);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] auth code error!`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.red('🍀 Status : Success'));
                console.log(chalk.yellow(`🍀 Country : ${country}`))
                console.log(chalk.gren(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                console.log(chalk.magenta(`🍀 Name : ${username}`))
                console.log(chalk.cyan(`🍀 Trophy : ${trophy}`))
                console.log(chalk.white(`🍀 Total Exp : ${exp}`))
                console.log(chalk.yellow(`🍀 SPass Star : ${tokenPass}`))
                console.log('')
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(750)
                console.log(chalk.grey(`// some trophy may not be duped into the account.`))
                await sleep(500)
                console.log(chalk.grey(`// starting 12 seconds delay`))
                await sleep(12000)
                console.log('')
                console.log(chalk.grey(`// delay finished`))
             
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Your account is Banned!`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '3') {

        const auth = rs.question('/ Enter Authentication Code : ');
        const time = rs.question('/ Enter delay in ms ( Example = 1000 is 1 sec ) : ');
        console.log('');

        while (true) {

            var code = '1';
            const result = await dupe(code, auth, time);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] auth code error!`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.red('🍀 Status : Success'));
                console.log(chalk.yellow(`🍀 Country : ${country}`))
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                console.log(chalk.magenta(`🍀 Name : ${username}`))
                console.log(chalk.cyan(`🍀 Trophy : ${trophy}`))
                console.log(chalk.white(`🍀 Total Exp : ${exp}`))
                console.log(chalk.yellow(`🍀 SPass Star : ${tokenPass}`))
                console.log('')
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(750)
                console.log(chalk.grey(`// some trophy may not be duped into the account.`))
                await sleep(500)
                console.log(chalk.grey(`// starting 12 seconds delay`))
                await sleep(12000)
                console.log('')
                console.log(chalk.grey(`// delay finished`))
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Your account is Banned!`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '4') {

        const auth = rs.question('/ Enter Authentication Code : ');
        const time = rs.question('/ Enter delay in ms ( Example = 1000 is 1 sec ) : ');
        console.log('');
        
        while (true) {

            var code = '0';
            const result = await dupe(code, auth, time);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] auth code error!`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                
                console.log(chalk.red('🍀 Status : Success'));
                console.log(chalk.yellow(`🍀 Country : ${country}`))
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                console.log(chalk.magenta(`🍀 Name : ${username}`))
                console.log(chalk.cyan(`🍀 Total Exp : ${exp}`))
                console.log(chalk.bgYellow(`🍀 SPass Star : ${tokenPass}`))
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(time)
                await dupe(code, auth, time)
                console.log(chalk.green(`🍀 Time : [ ${moment().format('HH:mm:ss')} ]`),)
                await sleep(750)
                console.log(chalk.grey(`// some trophy may not be duped into the account.`))
                await sleep(500)
                console.log(chalk.grey(`// starting 12 seconds delay`))
                await sleep(12000)
                console.log('')
                console.log(chalk.grey(`// delay finished`))
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Your account is Banned!`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else {

        console.log(chalk.red(`\n[ ${moment().format('HH:mm:ss')} ] Fitur Salah !`));

    }
    

})();
