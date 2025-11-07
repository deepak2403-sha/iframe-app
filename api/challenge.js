import crypto from "crypto";

export default function handler(req, res) {
  res.status(200).json({
    rpId: "iframe-hml97684r-deepaks-projects-b1bf8aaf.vercel.app",
    challenge: crypto.randomBytes(32).toString("base64url")
  });
}
