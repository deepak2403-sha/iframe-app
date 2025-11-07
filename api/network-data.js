import crypto from "crypto";

export default function handler(req, res) {
  res.status(200).json({
    networkData: crypto.randomBytes(32).toString("base64url")
  });
}
