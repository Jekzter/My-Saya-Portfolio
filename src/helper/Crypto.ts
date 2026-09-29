const encoder = new TextEncoder()
const decoder = new TextDecoder()

const SECRET = import.meta.env.SECRET_KEY

async function getKey() {
     const hash = await crypto.subtle.digest(
          "SHA-256",
          encoder.encode(SECRET)
     )

     return crypto.subtle.importKey(
          "raw",
          hash,
          { name: "AES-GCM" },
          false,
          ["encrypt", "decrypt"]
     );
}

export async function encryptId(id: string) {
     const key = await getKey();

     const iv = crypto.getRandomValues(new Uint8Array(12));

     const encrypted = await crypto.subtle.encrypt(
          {
               name: "AES-GCM",
               iv,
          },
          key,
          encoder.encode(id)
     );

     const encryptedArray = new Uint8Array(encrypted);

     // Store IV + encrypted data together
     const combined = new Uint8Array(
          iv.length + encryptedArray.length
     );

     combined.set(iv);
     combined.set(encryptedArray, iv.length);

     return btoa(
          String.fromCharCode(...combined)
     )
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "");
}

export async function decryptId(value: string) {
     const key = await getKey();

     // Restore Base64
     const base64 = value
          .replace(/-/g, "+")
          .replace(/_/g, "/");

     const binary = atob(base64);
     const combined = Uint8Array.from(binary, c => c.charCodeAt(0));

     const iv = combined.slice(0, 12);
     const encrypted = combined.slice(12);

     const decrypted = await crypto.subtle.decrypt(
          {
               name: "AES-GCM",
               iv,
          },
          key,
          encrypted
     );

     return decoder.decode(decrypted);
}
