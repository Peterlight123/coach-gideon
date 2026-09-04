import { useEffect, useRef, useState, type FormEvent } from "react";
import { chatAnswers } from "../content/siteContent";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

const FALLBACK_ANSWER = "I'm not sure about that. Please reach out via the Contact page for specific inquiries.";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm Coach Gideon's assistant. How can I help you today?", sender: "bot" },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { id: Date.now(), text: trimmed, sender: "user" }]);
    setInput("");

    const lower = trimmed.toLowerCase();
    let answer = FALLBACK_ANSWER;
    for (const [keyword, reply] of Object.entries(chatAnswers)) {
      if (lower.includes(keyword)) {
        answer = reply;
        break;
      }
    }

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: answer, sender: "bot" }]);
    }, 500);
  }

  if (!isOpen) {
    return (
      <button id="chatbot-btn" onClick={() => setIsOpen(true)} aria-label="Open chat assistant">
        <i className="bi bi-chat-dots-fill" />
      </button>
    );
  }

  return (
    <div id="chatbot-window">
      <div className="chatbot-header">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-robot text-orange" />
          <h6 className="mb-0 fw-bold">Coach Assistant</h6>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="btn btn-sm text-white p-0 border-0"
          aria-label="Close chat"
        >
          <i className="bi bi-x-lg" />
        </button>
      </div>

      <div className="chatbot-messages">
        {messages.map((message) => (
          <div key={message.id} className={`msg-bubble ${message.sender === "user" ? "msg-user" : "msg-bot"}`}>
            {message.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form onSubmit={handleSubmit} className="chatbot-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="chatbot-send" disabled={!input.trim()} aria-label="Send message">
          <i className="bi bi-send-fill" />
        </button>
      </form>
    </div>
  );
}
