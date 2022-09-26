'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Companies extends Model {}

    Companies.init({
        company_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        company_name: {
            type: DataTypes.STRING,
        allowNull: false
        },
        contact_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        contact_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        job_type: {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        submitted_resume_date: {
            type: DataTypes.STRING, 
            allowNull: true
        }
    }, {
        sequelize, 
        modelName: 'Jobs',
        tableName: 'companies', 
        timestamps: true
    })
};