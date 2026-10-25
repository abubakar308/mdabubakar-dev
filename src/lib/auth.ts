
import "server-only";

import { SignJWT, jwtVerify } from "jose";

const ISSUER = "portfolio-admin";
const AUDIENCE = "portfolio-admin-api";
const SESSION_DURATION = "8h";

function getSecretKey() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret || secret.length < 32) {
    throw new Error(
      "ADMIN_SESSION_SECRET is missing or too short.",
    );
  }

  return new TextEncoder().encode(secret);
}

export async function createAdminSessionToken(
  email: string,
): Promise<string> {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(email)
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .setIssuedAt()
    .setExpirationTime(SESSION_DURATION)
    .sign(getSecretKey());
}

export async function verifyAdminSessionToken(
  token: string,
): Promise<string | null> {
  try {
    const { payload } = await jwtVerify(
      token,
      getSecretKey(),
      {
        algorithms: ["HS256"],
        issuer: ISSUER,
        audience: AUDIENCE,
      },
    );

    if (
      payload.role !== "admin" ||
      typeof payload.sub !== "string"
    ) {
      return null;
    }

    return payload.sub;
  } catch {
    return null;
  }
}
