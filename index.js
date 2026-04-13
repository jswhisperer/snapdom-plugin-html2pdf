import html2pdf from "html2pdf.js"

export function realPdf(options = {}) {
  return {
    name: "fullPdf",
    defineExports() {
      return {
        RealPdf: async (ctx, opts = {}) => {
          const bodyElement = opts.element || document.querySelector("body")
          if (bodyElement) {
            const pdf = await html2pdf()
              .set(options)
              .from(bodyElement)
              .save()
          }
        }
      }
    }
  }
}

export default realPdf
