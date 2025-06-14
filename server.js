body: JSON.stringify({
  model: "meta-llama/llama-3-70b-instruct",
  messages: [
    {
      role: "system",
      content:
        "You are an expert prompt engineer. Your job is to take vague, short, or unclear prompts from users and rewrite them into detailed, specific, and optimized prompts that large language models (LLMs) can respond to with high accuracy and creativity. Always return a rewritten prompt only, no explanation.",
    },
    {
      role: "user",
      content: `Please enhance the following prompt for best results from an AI model:\n\n"${prompt}"`,
    },
  ],
});
