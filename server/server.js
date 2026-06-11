import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
});

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  }),
);

app.use(express.json({ limit: "20mb" }));

if (!process.env.GEMINI_API_KEY) {
  console.log("❌ GEMINI_API_KEY missing in .env file");
} else {
  console.log("✅ GEMINI_API_KEY loaded");
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Dhulai Bucket Gemini AI Backend Running ✅");
});

app.post("/api/analyze-cloth", upload.single("image"), async (req, res) => {
  try {
    console.log("✅ Analyze API hit");
    console.log("File received:", req.file?.originalname);
    console.log("Mime type:", req.file?.mimetype);
    console.log("Gemini key exists:", !!process.env.GEMINI_API_KEY);

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "Analysis failed",
        details: "GEMINI_API_KEY missing in server/.env file",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        error: "Image is required",
        details: "No image file received from frontend",
      });
    }

    const prompt = `
You are Dhulai Bucket AI Wardrobe Assistant.

Analyze this image carefully.

First detect whether the image contains a laundry-related item:
shirt, t-shirt, jeans, saree, suit, sherwani, lehenga, shoes, sneaker,
hoodie, towel, bedsheet, blanket, curtain, fabric, cloth, garment.

If NOT a laundry-related item, return ONLY valid JSON:
{
  "isCloth": false,
  "message": "This image does not appear to be a cloth, fabric, footwear, or laundry item."
}

If it is a laundry-related item, return ONLY valid JSON:
{
  "isCloth": true,
  "clothName": "",
  "category": "",
  "visibleColor": "",
  "possibleFabric": "",
  "washType": "",
  "dryCleanNeeded": "",
  "fabricRisk": "",
  "stainVisible": "",
  "recommendedFragrance": "",
  "nextWashSuggestion": "",
  "careScore": "",
  "shortSuggestion": "",
  "warnings": []
}

Rules:
- Be practical for Indian laundry service.
- If fabric is uncertain, write "possibly cotton", "possibly denim", etc.
- For suit, saree, lehenga, sherwani, silk or premium wear, suggest dry cleaning.
- For daily wear, suggest normal wash.
- Detect visible stain if present.
- careScore should be like "85/100".
- Return JSON only.
- No markdown.
`;

    const imagePart = {
      inlineData: {
        mimeType: req.file.mimetype,
        data: req.file.buffer.toString("base64"),
      },
    };

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }, imagePart],
        },
      ],
    });

    const text = response.text || "";

    console.log("Gemini raw response:", text);

    let parsed;

    try {
      parsed = JSON.parse(
        text
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim(),
      );
    } catch (parseError) {
      console.log("JSON parse error:", parseError.message);

      parsed = {
        isCloth: false,
        message: "AI returned invalid JSON. Please try with a clearer image.",
        raw: text,
      };
    }

    return res.json(parsed);
  } catch (error) {
    console.error("FULL ANALYSIS ERROR:");
    console.error(error);

    return res.status(500).json({
      error: "Analysis failed",
      details:
        error?.message ||
        error?.response?.data?.error?.message ||
        "Unknown Gemini error",
    });
  }
});

app.post("/api/chat", async (req, res) => {
  try {
    console.log("✅ Chat API hit");

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "Chat failed",
        details: "GEMINI_API_KEY missing in server/.env file",
      });
    }

    const { message, report } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Chat failed",
        details: "Message is required",
      });
    }

    const prompt = `
You are Dhulai Bucket AI Laundry Assistant.

Answer in short helpful Hinglish.

Help only with:
- laundry care
- fabric care
- stain removal
- dry cleaning
- perfume laundry
- AI wardrobe care
- subscription plans
- pickup/delivery
- shoe cleaning
- wedding wear protection
- packaging

Current Cloth Report:
${JSON.stringify(report || {}, null, 2)}

User Question:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return res.json({
      reply: response.text || "Sorry, AI reply nahi mila.",
    });
  } catch (error) {
    console.error("FULL CHAT ERROR:");
    console.error(error);

    return res.status(500).json({
      error: "Chat failed",
      details: error?.message || "Unknown Gemini chat error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
