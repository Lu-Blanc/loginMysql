import { Sequelize } from "sequelize";
import db from "../config/connection.js"

const { DataTypes } = Sequelize;
const Users = db.define('users', {
    nama: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    roles: {
        type: DataTypes.ENUM,
        values: ['User', 'Admin'],
        defaultValue: 'User'
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});

export default Users;

// (async()=>{
//     await db.sync({alter:true})
// })();