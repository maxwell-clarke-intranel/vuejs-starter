let password = 'Isncyfpz7gnD';

let text = `
Hello Andy,

    This is an automated email test.

Thanks,
RobotMax
`;

let from = 'maxwell.clarke@intranel.com';

let to = 'andrew@intranel.com';

let nodemailer = require('nodemailer');

async function main() {
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

    console.dir(await transport.sendMail(mailOptions));

};

main().catch(console.error);
