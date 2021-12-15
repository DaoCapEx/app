import Sequelize from 'sequelize';

const User = Sequelize.define('User', {
    nonce: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: () => Math.floor(Math.random() * 1000000) // Initialize with a random nonce
    },
    publicAddress: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: { isLowercase: true }
    },
    username: {
        type: Sequelize.STRING,
        unique: true
    }
});

export default User; 