const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('searchgithub', '', '', {
    host: 'localhost',
    dialect:'postgres'
  });
// const queryInterface = sequelize.getQueryInterface();
const fs = require ('fs')
const path = require ('path')
const infosPath = '/Users/adlaneould/Desktop/Efrei/Node/CodeFlix/onecode/search-in-github/data/infos.json'
const data = fs.readFileSync(infosPath, "utf-8")
const infosUser = JSON.parse(data)



  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  
function createTable(){

       
        const user = sequelize.define('Users', {
        login: DataTypes.STRING,
        id : 
        {
            type : DataTypes.BIGINT(11),
            primaryKey : true
        },
        node_id: DataTypes.STRING,
        avatar_url : DataTypes.STRING,
        gravatar_id : DataTypes.STRING,
        url : DataTypes.STRING,
        html_url : DataTypes.STRING,
        followers_url : DataTypes.STRING,
        following_url : DataTypes.STRING,
        gists_url : DataTypes.STRING,
        starred_url : DataTypes.STRING,
        subscriptions_url : DataTypes.STRING,
        organizations_url: DataTypes.STRING,
        repos_url: DataTypes.STRING,
        events_url: DataTypes.STRING,
        received_events_url: DataTypes.STRING,
        type: DataTypes.STRING,
        site_admin: DataTypes.BOOLEAN,
        name: DataTypes.STRING,
        company: DataTypes.STRING,
        blog: DataTypes.STRING,
        location: DataTypes.STRING,
        email: DataTypes.STRING,
        hireable: DataTypes.BOOLEAN,
        bio: DataTypes.STRING,
        twitter_username: DataTypes.STRING,
        public_repos: DataTypes.STRING,
        public_gists: DataTypes.STRING,
        followers: DataTypes.STRING,
        following: DataTypes.STRING,
        created_at: DataTypes.STRING,
        updated_at: DataTypes.STRING,
      });
      (async () => {
        await sequelize.sync({ force: true });
        const iji = await user.create(infosUser);      
    })();
    }
    module.exports = {
        createTable,
        infosUser
    }
