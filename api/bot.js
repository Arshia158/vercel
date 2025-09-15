import { Bot } from "grammy";

const bot = new Bot("8326231289:AAH433g4yAVQPM986exCe2ajpgUGjAtq_34");

bot.command("start", ctx => ctx.reply("سلام"));

export default async function handler(req, res) {
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    res.status(500).send("error");
  }
}