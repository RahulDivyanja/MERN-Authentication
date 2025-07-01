import * as brevo from "@getbrevo/brevo";
import dotenv from "dotenv";
dotenv.config();

export const brevoClient = new brevo.TransactionalEmailsApi();
brevoClient.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

export const sender = {
  email: "rahuldivyanja@gmail.com",
  name: "Travel Ceylon",
};
