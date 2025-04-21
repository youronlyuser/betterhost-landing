
/**
 * Injects Tailwind classes into h2 and p tags within provided HTML.
 */
export function styleBlogHtml(html: string): string {
  // Add Tailwind classes to <h2>
  html = html.replace(
    /<h2(.*?)>/g,
    '<h2$1 class="mt-10 mb-4 text-2xl sm:text-3xl font-semibold text-[#2D5BFF]">'
  );
  // Add Tailwind classes to <p>
  html = html.replace(
    /<p(.*?)>/g,
    '<p$1 class="mb-5 text-base leading-relaxed text-gray-700">'
  );
  return html;
}
