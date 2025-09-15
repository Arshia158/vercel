import { Bot } from "grammy";

const bot = new Bot("8326231289:AAH433g4yAVQPM986exCe2ajpgUGjAtq_34");

// وقتی استارت می‌کنه برای کاربر پیام سلام ارسال کن
bot.command("start", ctx => ctx.reply("سلام"));

export default async function handler(req, res) {
  try {
    // grammy کد مربوط به پردازش وبهوک تلگرام
    await bot.handleUpdate(req.body);
    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    res.status(500).send("error");
  }
}