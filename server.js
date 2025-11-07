const express = require("express");
const crypto = require("crypto");
const app = express();

app.use(express.json());

const RP_ID = "iframe-app-rho.vercel.app";

function randomB64url(size = 32) {
  return crypto.randomBytes(size)
    .toString("base64")
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// ✅ 1. API routes FIRST
app.get("/api/challenge", (req, res) => {
  res.json({
    rpId: RP_ID,
    challenge: randomB64url()
  });
});

app.get("/api/network-data", (req, res) => {
  res.json({ networkData: randomB64url() });
});

app.post("/api/verify", (req, res) => {
  console.log("---- /api/verify ----");
  console.log(JSON.stringify(req.body, null, 2));

  res.json({ ok: true });
});

// ✅ 2. Static serving LAST
app.use(express.static(__dirname));

app.listen(8081, () =>
  console.log("✅ iframe-app running on http://localhost:8081")
);
