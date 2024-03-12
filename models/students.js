const express = require('express');
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    studentNumber: {
        type: String,
        required:true
    },
    firstName: {
        type: String,
        required:true,
    }, 
    lastName: {
        type:String,
        required:true,
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    }
})

// create model
const Students = mongoose.model('Students',studentSchema);

module.exports = Students;