import * as cheerio from "cheerio";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessedFAQ {
  items: FAQItem[];
  html: string;
}

/**
 * Clean text aggressively
 */
function cleanText(text: string): string {
  return text
    .replace(/<[^>]*>/g, " ")     // remove leftover HTML
    .replace(/\s+/g, " ")
    .replace(/&nbsp;/g, " ")
    .trim();
}

/**
 * Normalize question safely
 */
function normalizeQuestion(text: string): string {
  let q = cleanText(text);

  q = q.replace(/^\d+[\.\)\-]\s*/, "");
  q = q.replace(/^q:\s*/i, "");

  q = q.replace(/[?.!]*$/, "");

  return q.trim() + "?";
}

/**
 * Detect FAQ heading anywhere
 */
function isFAQHeading(text: string): boolean {
  return /faq|frequently\s*asked\s*questions/i.test(text);
}

/**
 * Extract visible text blocks safely
 */
function extractBlocks($: cheerio.CheerioAPI) {
  const blocks: { tag: string; text: string }[] = [];

  $("h1,h2,h3,h4,p,li,strong").each((_, el) => {
    const tag = el.tagName?.toLowerCase();
    const text = cleanText($(el).text());

    if (text) {
      blocks.push({ tag, text });
    }
  });

  return blocks;
}

/**
 * MAIN EXTRACTOR (FOOL PROOF)
 */
export function processFAQs(content: string): ProcessedFAQ {
  const $ = cheerio.load(content);

  const blocks = extractBlocks($);
  const faqs: FAQItem[] = [];

  let inFAQ = false;

  for (let i = 0; i < blocks.length; i++) {
    const current = blocks[i];

    // detect FAQ start ANYWHERE
    if (!inFAQ && isFAQHeading(current.text)) {
      inFAQ = true;
      continue;
    }

    if (!inFAQ) continue;

    // stop if next major section appears
    if (/^h1$/i.test(current.tag)) break;
    if (/^h2$/i.test(current.tag) && !isFAQHeading(current.text)) break;

    // QUESTION detection (very flexible)
    const isQuestion =
      /^h[3-4]$/i.test(current.tag) ||
      current.text.includes("?") ||
      /^[0-9]+[\.\)]/.test(current.text);

    if (isQuestion) {
      const question = normalizeQuestion(current.text);

      let answerParts: string[] = [];

      // collect answer until next question-like block
      for (let j = i + 1; j < blocks.length; j++) {
        const next = blocks[j];

        const nextIsQuestion =
          /^h[3-4]$/i.test(next.tag) ||
          next.text.includes("?");

        if (nextIsQuestion) break;

        if (next.text) {
          answerParts.push(next.text);
        }
      }

      const answer = cleanText(answerParts.join(" "));

      if (question && answer.length > 5) {
        faqs.push({ question, answer });
      }
    }
  }

  return {
    items: faqs,
    html: content,
  };
}

/**
 * Schema generator (safe)
 */
export function generateFAQSchema(faqs: FAQItem[], pageUrl: string) {
  if (!faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    url: pageUrl,
  };
}
