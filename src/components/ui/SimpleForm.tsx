"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FancyContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const FancyContactForm = ({
  title = "Остались вопросы?",
  subtitle = "Заполните форму — мы свяжемся с вами",
  className = "",
}: FancyContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const token = "7045960985:AAHKiMt_9lHo2HuJxtmomhX4UDXS6IzxFnY"; // Твой токен
    const chatId = "914762159"; // Твой чат ID

    const text = `
📩 Новое сообщение:

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email || "Не указан"}
💬 Сообщение: ${formData.message || "Нет сообщения"}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      setIsSubmitted(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Спасибо за обращение!
          </h3>
          <p className="text-gray-600">
            Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl p-8 bg-[#1e3a8a] mt-12 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Контент */}
      <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Форма слева */}
        <form onSubmit={handleSubmit} className="space-y-5 bg-white/20 p-6 rounded-xl backdrop-blur-lg border border-white/30">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-white/80 block mb-2">
              Имя *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ваше имя"
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-300 rounded-md"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-white/80 block mb-2">
              Телефон *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+7 (777) 777 77 77"
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-300 rounded-md"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-white/80 block mb-2">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-300 rounded-md"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-white/80 block mb-2">
              Сообщение
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Ваши вопросы или пожелания..."
              className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-300 rounded-md"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Отправляем...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Отправить сообщение
              </>
            )}
          </Button>
        </form>

        {/* Текст справа */}
        <div className="text-white space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">{title}</h3>
            <p className="text-white/80">{subtitle}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <a href="tel:+77775049124" className="text-blue-300 hover:underline">
                +7 (775) 504 91 24
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:suleon_auto@gmail.com" className="text-blue-300 hover:underline">
                suleon_auto@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FancyContactForm;
