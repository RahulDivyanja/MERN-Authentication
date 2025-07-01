// import { mailtrapClient, sender } from "./mailTrap.config.js";
import * as brevo from "@getbrevo/brevo";
import fs from "fs";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";
import { brevoClient, sender } from "../Brevo/brevo.config.js";

export const sendVerificationEmail = async (
  toEmail,
  verificationToken,
  toName
) => {
  const email = new brevo.SendSmtpEmail();
  email.to = [{ email: toEmail, name: toName }];
  email.sender = sender;
  email.subject = "Verify your email";
  email.htmlContent = VERIFICATION_EMAIL_TEMPLATE.replace(
    "{verificationCode}",
    verificationToken
  );

  try {
    const response = await brevoClient.sendTransacEmail(email);
    console.log("Verification email sent");
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
};
// export const sendVerificationEmail = async (email, verificationToken) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Verify your email",
// 			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
// 			category: "Email Verification",
// 		});

// 		console.log("Email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending verification`, error);

// 		throw new Error(`Error sending verification email: ${error}`);
// 	}
// };

export const sendWelcomeEmail = async (toEmail, toName) => {
  const email = new brevo.SendSmtpEmail();
  const htmlContent = fs.readFileSync("E:\\Backend practices\\Project-loging\\backend\\mailtrap\\welcome email.html", "utf-8");

  email.to = [{ email: toEmail, name: toName }];
  email.sender = sender;
  email.subject = "Welcome to Travel Ceylon";
  email.htmlContent = htmlContent.replace("{name}", toName);

  try {
    const response = await brevoClient.sendTransacEmail(email);
    console.log("Welcome email sent");
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
};

// export const sendWelcomeEmail = async (email , name) =>{
// 	const recipient = [{email}];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			template_uuid: "a16db057-973b-4910-86d7-6801ad40df66",
// 			template_variables: {
// 				company_info_name: "Auth Company",
// 				name: name,
// 			},
// 		})
// 		console.log("Email sent welcome successfully ", response);
// 	} catch (error) {
// 		console.log("Email sent welocome unsuccessfully", error);
// 		throw new Error (`Error sending welcome Email: ${error}`);
// 	}

// }

// export const sendPasswordResetEmail = async (email,resetURL) =>{
// 	const recipient = [{ email }]
// 	try {
// 		 const response = await mailtrapClient.send({
// 			from:sender,
// 			to:recipient,
// 			subject:"Reset password request",
// 			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
// 			category: "Password Reset"
// 		 })
// 	} catch (error) {
// 		console.error("Error with sending reset password email: ",error);
// 		throw new Error(`Error with sending reset password email: ${error}`);
// 	}
// }
export const sendPasswordResetEmail = async (
  toEmail,
  resetURL,
  toName
) => {
  const email = new brevo.SendSmtpEmail();
  email.to = [{ email: toEmail, name: toName }];
  email.sender = sender;
  email.subject = "Reset password request";
  email.htmlContent =  PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL);

  try {
    const response = await brevoClient.sendTransacEmail(email);
    console.log("reset password request email sent");
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
};

// export const sendResetSuccessEmail = async (email) => {
// 	const recipient = [{email}];
// 	try {
// 		const response = await mailtrapClient.send ({
// 			from:sender,
// 			to:recipient,
// 			subject:"Password reset successful",
// 			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
// 			category : "password reset"
// 		})

// 		console.log("Password reset email successfully sent", response)
// 	} catch (error) {
// 		console.log("Password reset email sending was unsuccessful", error);
// 		throw new Error(`Error with sending Error: ${error}`);
// 	}
// }
export const sendResetSuccessEmail = async (
  toEmail,
  toName
) => {
  const email = new brevo.SendSmtpEmail();
  email.to = [{ email: toEmail, name: toName }];
  email.sender = sender;
  email.subject = "Password reset successful";
  email.htmlContent =  PASSWORD_RESET_SUCCESS_TEMPLATE;

  try {
    const response = await brevoClient.sendTransacEmail(email);
    console.log("reset password successful email sent");
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
};