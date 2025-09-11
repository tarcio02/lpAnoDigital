/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

/* ===================== CORS ====================== */
const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*", // em produção, troque por seu domínio
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-idempotency-key",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Access-Control-Max-Age": "86400",
};
const json = (data: unknown, init?: ResponseInit) =>
  new Response(JSON.stringify(data), {
    status: init?.status ?? 200,
    headers: { "Content-Type": "application/json", ...corsHeaders, ...(init?.headers ?? {}) },
  });

/* ===================== Types ===================== */
type Lead = { name?: string; email: string };
type Meta = { source?: string; message?: string; utm?: Record<string, string> };
type Payload = { lead?: Lead; meta?: Meta; form?: Record<string, unknown> };

/* ===================== Utils ===================== */
const escapeHtml = (s: string) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;").replaceAll("'", "&#039;");

const firstNameOf = (full?: string) => {
  if (!full) return "";
  const p = full.trim().split(/\s+/)[0];
  return p ? p[0].toUpperCase() + p.slice(1) : "";
};

const onlyDigits = (v?: unknown) => String(v ?? "").replace(/\D/g, "");
const toIntOrNull = (v?: unknown) => {
  const n = parseInt(String(v ?? "").trim(), 10);
  return Number.isFinite(n) ? n : null;
};
const toBool = (v?: unknown) => {
  if (typeof v === "boolean") return v;
  const s = String(v ?? "").toLowerCase();
  return s === "true" || s === "1" || s === "on";
};

/* ============ HTML do e-mail (usuário) =========== */
function userEmailHtml(lead: Lead) {
  const ASSETS_BASE = (Deno.env.get("ASSETS_BASE") || "").replace(/\/+$/, "");
  if (!ASSETS_BASE) throw new Error("ASSETS_BASE não definido nas secrets.");

  const firstName = escapeHtml(firstNameOf(lead.name) || "tudo bem");
  const verificadoIcon = `${ASSETS_BASE}/verificadoIcon.png`;
  const hero = `${ASSETS_BASE}/hero-compressed.webp`;
  const instagram = `${ASSETS_BASE}/instagram.png`;
  const whatsapp = `${ASSETS_BASE}/whatsapp.png`;
  const linkedin = `${ASSETS_BASE}/linkedin.png`;
  const logo = `${ASSETS_BASE}/logo.png`

  return `
    <!doctype html>
    <html lang="pt-BR">
      <head>
        <meta charset="utf-8">
        <!-- Sinaliza suporte a light/dark p/ clientes que entendem (ex: Apple Mail) -->
        <meta name="color-scheme" content="light dark">
        <meta name="supported-color-schemes" content="light dark">
        <style>
          /* Alvo apenas Gmail: ele injeta um <u> antes do body */
          u + .body .gmail-blend-screen { background:#000; mix-blend-mode:screen; }
          u + .body .gmail-blend-difference { background:#000; mix-blend-mode:difference; }
        </style>
      </head>
      <body class="body">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f4f4;">
          <tr>
            <td align="center" style="padding:24px;">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial, sans-serif;background:#ffffff;border:1px solid #eaeaea;">
                <!-- Header -->
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #eee; background-color: #2C3E50;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="font-size:20px;line-height:24px;font-weight:700;color:#fff;">Cadastro Realizado com Sucesso!</td>
                        <td align="right" width="32">
                          <img src="${verificadoIcon}" width="48" height="48" alt="Verificado" style="display:block;border:0;">
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- BLOCO DE CONTEÚDO (com background image + overlay escuro + texto branco) -->
                <tr>
                  <td
                    background="${hero}"
                    style="
                      /* Fallback sólido */
                      background:#0A0A0A;
                      /* Clientes modernos */
                      background-image: url('${hero}');
                      background-position:center;
                      background-size:cover;
                      background-repeat:no-repeat;
                      padding:0;
                    "
                  >
                    <!--[if gte mso 9]>
                    <!-- VML para Outlook Windows (background image) -->
                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"
                            style="width:600px;height:auto;">
                      <v:fill type="frame" src="" color="#0A0A0A" />
                      <v:textbox inset="0,0,0,0">
                    <![endif]-->

                    <!-- OVERLAY + CONTEÚDO -->
                    <!-- Overlay escuro: em clientes modernos usamos RGBA; em Outlook, caímos no fallback #111 (sem transparência).  -->
                    <div style="background:rgba(0,0,0,0.6);">
                      <!--[if mso]>
                      <div style="background:#111111;">
                      <![endif]-->

                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td style="padding:24px 20px 8px 20px; color:#FFFFFF;">
                            <p style="margin:0;font-size:18px;line-height:24px;font-weight:700;">Olá ${firstName}, tudo bem?</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0 20px 16px 20px; color:#FFFFFF;">
                            <p style="margin:0;font-size:14px;line-height:20px;">
                              Recebemos seus dados com sucesso.<br>
                              Este e-mail confirma sua inscrição em nosso sorteio — não é necessário responder.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0 20px 20px 20px; color:#FFFFFF;">
                            <p style="margin:0;font-size:16px;line-height:22px;font-weight:700;">Agora é só aguardar. Boa sorte!</p>
                          </td>
                        </tr>

                        <!-- Social acima do background também (mesmo overlay) -->
                        <tr>
                          <td style="padding:8px 20px 0 20px; color:#FFFFFF;">
                            <p style="margin:0 0 8px 0;font-size:14px;line-height:20px;font-weight:700;">Nossas redes sociais:</p>
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td style="padding-right:10px;">
                                  <a href="https://www.instagram.com/b7.agencia/" target="_blank">
                                    <img src="${instagram}" width="24" height="24" alt="Instagram" style="display:block;border:0;">
                                  </a>
                                </td>
                                <td style="padding-right:10px;">
                                  <a href="https://wa.me/557781223827" target="_blank">
                                    <img src="${whatsapp}" width="24" height="24" alt="WhatsApp" style="display:block;border:0;">
                                  </a>
                                </td>
                                <td>
                                  <a href="https://www.linkedin.com/in/branding7-marketing-digital-25555224a/" target="_blank">
                                    <img src="${linkedin}" width="24" height="24" alt="LinkedIn" style="display:block;border:0;">
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                        <!-- espaçamento final do bloco -->
                        <tr>
                          <td style="padding:16px 20px;"></td>
                        </tr>
                      </table>

                      <!--[if mso]>
                      </div>
                      <![endif]-->
                    </div>

                    <!--[if gte mso 9]>
                      </v:textbox>
                    </v:rect>
                    <![endif]-->

                  </td>
                </tr>

                  
                <!-- Rodapé -->
                <tr>
                  <td style="padding:20px;border-top:1px solid #eee;text-align:center; background-color: #2C3E50;">
                    <a href="https://branding7.com.br" target="_blank" style="color:#fff;text-decoration:none; margin:0 0 6px 0;font-size:18px;line-height:22px;font-weight:700;">
                      <img src="${logo}" alt="Logo branding7" width="120" height="auto" >
                    </a>
                    <p style="margin:0;font-size:12px;line-height:18px;">
                      <a href="https://maps.app.goo.gl/bvsPTgfYHFiAymWL9"  style="color:#fff;text-decoration:none;">
                        Av. Cresêncio Lacerda, Bairro Recreio, Nº 405B, Vitória da Conquista - BA
                      </a>
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

/* ============ HTML do e-mail (interno) =========== */
function internalEmailHtml(row: Record<string, unknown>) {
  const rows: string[] = [];
  const push = (k: string, v: unknown) =>
    rows.push(
      `<tr><td style="padding:8px 12px; border:1px solid #eee; font-weight:600">${escapeHtml(
        k,
      )}</td><td style="padding:8px 12px; border:1px solid #eee">${escapeHtml(
        String(v ?? "-"),
      )}</td></tr>`,
    );

  push("Nome", row.nomepessoa);
  push("Email", row.email);
  push("Telefone", row.telefone);
  push("Empresa", row.nomeempresa);
  push("CNPJ", row.cnpj);
  push("Ramo", row.ramoselecionado);
  push("Funcionários", row.funcionarios);
  push("Fonte", row.fonte);
  push("Desafio", row.desafio);
  push("Termos aceito", String(row.termosaceito));

  return `
    <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial; padding:24px; color:#111">
      <h2 style="margin:0 0 8px; font-size:20px;">Novo lead recebido</h2>
      <table style="border-collapse:collapse; width:100%; margin-top:8px">${rows.join("")}</table>
      <p style="margin-top:16px; color:#666; font-size:12px">Gerado pela função <code>send-email</code>.</p>
    </div>
  `;
}

/* =================== Resend ====================== */
async function sendEmailResend(params: {
  to: string;
  from: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY ausente nas secrets.");

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: params.from,
      to: params.to,
      subject: params.subject,
      html: params.html,
      reply_to: params.replyTo,
    }),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`Resend ${r.status}: ${data?.message || data?.error || "Falha ao enviar e-mail"}`);
  return data;
}

/* =================== Admin client ================= */
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.warn("SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY não configurados — o INSERT não irá rodar.");
}
const admin = SUPABASE_URL && SERVICE_ROLE ? createClient(SUPABASE_URL, SERVICE_ROLE) : null;

/* =================== Handler ===================== */
serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    if (req.method !== "POST") return json({ error: "Method not allowed" }, { status: 405 });

    const FROM_EMAIL = Deno.env.get("FROM_EMAIL");
    const INBOX_EMAIL = Deno.env.get("INBOX_EMAIL");
    if (!FROM_EMAIL || !INBOX_EMAIL) {
      return json({ ok: false, error: "Configuração ausente. Defina FROM_EMAIL e INBOX_EMAIL nas secrets da função." }, { status: 500 });
    }

    const payload = (await req.json().catch(() => ({}))) as Payload;
    const lead = payload?.lead;
    const meta = payload?.meta;
    const form = payload?.form ?? {}; // envie formData do front para preencher todas as colunas

    // validação mínima
    if (!lead?.email && !form["email"]) {
      return json({ ok: false, error: "Email inválido ou ausente no payload." }, { status: 400 });
    }

    /* --------- monta a linha da tabela public.leads --------- */
    const row = {
      nomepessoa:      String(form["nomePessoa"] ?? lead?.name ?? ""),
      email:           String(form["email"] ?? lead?.email ?? "").toLowerCase(),
      telefone:        (onlyDigits(form["telefone"] ?? "") || null),
      nomeempresa:     (String(form["nomeEmpresa"] ?? "").trim() || null),
      cnpj:            (onlyDigits(form["cnpj"] ?? "") || null),
      ramoselecionado: (String(form["ramoSelecionado"] ?? "").trim() || null),
      funcionarios:    toIntOrNull(form["funcionarios"]),
      fonte:           String(form["fonte"] ?? meta?.source ?? ""),
      desafio:         String(form["desafio"] ?? meta?.message ?? ""),
      termosaceito:    toBool(form["termosAceitos"] ?? form["termosaceito"]),
      // created_at = default now()
    };

    /* --------- salva no banco (se admin configurado) --------- */
    let insertedId: number | null = null;
    if (admin) {
      const { data, error } = await admin.from("leads").insert(row).select("id").single();
      if (error) {
        console.error("DB insert error:", error);
        return json({ ok: false, error: error.message }, { status: 400 });
      } else {
        insertedId = (data as { id: number }).id;
      }
    } else {
      console.error("Admin client não configurado — verifique SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY nos secrets da função.");
      return json({ ok: false, error: "Configuração do servidor ausente para salvar o lead." }, { status: 500 });
    }

    /* --------- envia e-mails --------- */
    const subjectUser = "Cadastro realizado com sucesso!";
    const subjectInternal = "Novo lead — Formulário";

    // confirmação para o usuário
    await sendEmailResend({
      from: FROM_EMAIL,
      to: row.email,
      subject: subjectUser,
      html: userEmailHtml({ name: row.nomepessoa, email: row.email }),
      replyTo: INBOX_EMAIL,
    });

    // notificação interna
    await sendEmailResend({
      from: FROM_EMAIL,
      to: INBOX_EMAIL,
      subject: subjectInternal,
      html: internalEmailHtml(row),
      replyTo: row.email,
    });

    return json({ ok: true, id: insertedId, message: "Lead salvo e e-mails enviados." });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: String((err as Error)?.message || err) }, { status: 500 });
  }
});
