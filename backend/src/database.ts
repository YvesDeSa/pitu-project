import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://yves:123456@localhost:3306/pitu');

export default sequelize;