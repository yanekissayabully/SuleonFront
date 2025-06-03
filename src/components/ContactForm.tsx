"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ContactForm = ({
  title = "У вас есть вопросы?",
  subtitle = "Заполните форму ниже, и мы свяжемся с вами в ближайшее время",
  className = "",
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    carInterest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  const token = "7045960985:AAHKiMt_9lHo2HuJxtmomhX4UDXS6IzxFnY";
  const chatId = "914762159";

  const text = `
🚗 Новая заявка:

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email || "Не указан"}
🚙 Интересующая модель: ${formData.carInterest || "Не выбрана"}
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
        carInterest: "",
      });
    }, 3000);
  } catch (error) {
    console.error("Ошибка отправки в Телегу:", error);
    setIsSubmitting(false);
  }
};


  if (isSubmitted) {
    return (
      <motion.div
        className={`bg-white rounded-xl shadow-lg p-8 ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-green-600" />
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
      className={`bg-white rounded-xl shadow-lg p-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
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
              className="w-full"
            />
          </div>

          <div>
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
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
              className="w-full"
            />
          </div>
        </div>

        <div>
          <Label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
            className="w-full"
          />
        </div>

        <div>
          <Label
            htmlFor="carInterest"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Интересующая модель
          </Label>
          <select
            id="carInterest"
            name="carInterest"
            value={formData.carInterest}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Выберите модель</option>
            <option value="byd-song-plus">BYD Song Plus</option>
            <option value="byd-sea-lion-07">BYD Sea Lion 07</option>
            <option value="volkswagen-id-unyx">Volkswagen ID. UNYX</option>
            <option value="zeekr-7x">ZEEKR 7X</option>
            <option value="xiaomi-su7">Xiaomi SU7</option>
            <option value="other">Другая модель</option>
          </select>
        </div>

        <div>
          <Label
            htmlFor="message"
            className="text-sm font-medium text-gray-700 mb-2 block"
          >
            Сообщение
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Расскажите, что вас интересует или какие у вас есть вопросы..."
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
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

      {/* Alternative contact methods */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center mb-4">
          Или свяжитесь с нами напрямую:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+380639969944"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +7 (775) 504 91 24
          </a>
          <a
            href="mailto:info@LuxAuto.com.ua"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            suleon_auto@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
