#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const fs = require('fs'),
    filename = 'out.md',
    fileType = 'application/md',
    data = fs.readFileSync('attachments/' + filename);

const msg = {
    to: 'praneesha@wso2.com',
    from: 'praneesha@wso2.com',
    subject: 'Broken Links',
    text: 'There are new broken links!',
    html: '<p>New broken links!</p>',
    attachments: [
        {
            content: data.toString('base64'),
            filename: filename,
            type: fileType,
            disposition: 'attachment',
        },
    ],
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));