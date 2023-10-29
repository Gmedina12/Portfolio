import nodemailer from 'nodemailer'
import 'dotenv/config'

require('dotenv').config();

export const emailConfig = {
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
};


