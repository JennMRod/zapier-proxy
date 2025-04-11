import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const zapierWebhookURL = "https://hooks.zapier.com/hooks/catch/3147826/20tfbhp/";

  try {
    await axios.post(zapierWebhookURL, req.body);
    res.status(200).json({ status: "✅ Forwarded to Zapier successfully." });
  } catch (error) {
    console.error("Forwarding failed:", error.message);
    res.status(500).json({ error: "❌ Forwarding to Zapier failed." });
  }
}
