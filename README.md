# 🔮 Prompt Enhancer

**Prompt Enhancer** is a sleek web tool that takes short, vague prompts and transforms them into detailed, optimized ones — perfect for getting the best results from AI models.

Built for the **Trad AI Hackathon**, this tool uses the **Groq API with LLaMA 4 Scout 17B**, with a secure backend proxy to keep API keys safe.

---

## 🚀 Live Demo

- 🌐 Frontend: [https://your-username.github.io/prompt-enhancer](#) *(GitHub Pages link after deploy)*
- 🔐 Backend Proxy: [https://your-backend-url.onrender.com](#) *(Render URL)*

---

## ✨ Features

- 💬 ChatGPT-style UI with left sidebar, main editor, and output pane
- ✍️ AI-powered prompt enhancement using LLaMA 4 via Groq API
- 🔒 Secure proxy backend using Express & dotenv
- 🌈 Responsive dark UI inspired by loveable.dev

---

## 🛠 Tech Stack

| Part      | Tools Used                          |
|-----------|-------------------------------------|
| Frontend  | HTML, CSS, JavaScript               |
| Backend   | Node.js, Express, dotenv, Groq API  |
| Hosting   | GitHub Pages (frontend), Render (backend) |
| Model     | LLaMA 4 Scout 17B (via Groq)        |

---

## 📦 How It Works

1. User types a rough prompt in the text area.
2. JS sends the prompt to a **Node.js backend proxy** at `/api/enhance`.
3. The proxy forwards it securely to the **Groq API** using your secret key.
4. The enhanced prompt is returned and shown in the UI.

---

## 🧪 Local Setup (Optional)

```bash
git clone https://github.com/your-username/prompt-enhancer.git
cd prompt-enhancer
npm install
# Add your Groq key in a .env file:
echo "GROQ_API_KEY=your_key_here" > .env
npm start
