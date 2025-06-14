async function sendMessage() {
  const input = document.getElementById("userInput").value.trim();
  const output = document.getElementById("enhancedPrompt");

  if (!input) return;

  output.innerText = "Enhancing prompt... ⏳";

  try {
    const response = await fetch("http://localhost:3000/api/enhance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content || "⚠️ Something went wrong.";
    output.innerText = reply;
  } catch (err) {
    output.innerText = "❌ Error: " + err.message;
  }
}
