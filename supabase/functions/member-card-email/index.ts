import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const SITE_ORIGIN = "https://esteban7145.github.io";

Deno.serve((req: Request) => {
  const origin = req.headers.get("Origin") || "";
  const headers = {
    "Access-Control-Allow-Origin": origin === SITE_ORIGIN || origin.startsWith("http://localhost:") ? origin : SITE_ORIGIN,
    "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json; charset=utf-8",
    "Vary": "Origin",
  };
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers });
  return new Response(JSON.stringify({ error: "El envío de carnets por correo está desactivado. Descarga el carnet y envíalo manualmente desde Gmail." }), {
    status: 410,
    headers,
  });
});
