const nodemailer = require('nodemailer');

let password = 'Isncyfpz7gnD';

let text = `
Hello Me,

    This is an automated email test.

    Sent from my λ

Thanks,
RobotMax
`;

let from = 'maxwell.clarke@intranel.com';

let to = 'maxwell.clarke@intranel.com';

exports.handler = function (event, context, callback) {
    let transport = nodemailer.createTransport({
        host: 'smtp.zoho.com',
        port: '587',
        secure: false,
        auth: {
            user: from,
            pass: password,
        },
    });

    let mailOptions = {
        from,
        to,
        subject: 'hELLo HUmaN',
        text,
    };

    transport.sendMail(mailOptions).then(() => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
            }),
        });
    });
};
