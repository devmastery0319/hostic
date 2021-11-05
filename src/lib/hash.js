// Copyright (c) 2020 devmastery

const crypto = require("crypto")

export function hash(value) {
  return crypto.createHash("sha256").update(value, "utf8").digest("hex")
}
