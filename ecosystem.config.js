module.exports = {
  apps : [{
    script: 'npm run build',
  }],

  deploy : {
    production : {
      key: '~/lipengtao.pem',
      user : 'ec2-user',
      host : '52.83.184.93',
      ref  : 'origin/master',
      repo : 'http://git.intra.doublefs.com/fe/m-dbs',
      path : '/home/ec2-user/fe/m-dbs',
      'pre-deploy-local': '',
      'post-deploy' : 'pm2 startOrRestart ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
