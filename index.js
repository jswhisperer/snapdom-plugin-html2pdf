import html2pdf from "html2pdf.js"

export function html2js(options = {}) {
  return {
    name: "html2pdf",
    defineExports() {
      return {
        html2pdf: async (ctx, opts = {}) => {
          const bodyElement = opts.element || document.querySelector("body")
          if (bodyElement) {
            try {
                await html2pdf()
                    .set(options)
                    .from(bodyElement)
                    .save()
            } catch(e) {
                console.error(e)
            }
          }
        }
      }
    }
  }
}

export default html2pdf
