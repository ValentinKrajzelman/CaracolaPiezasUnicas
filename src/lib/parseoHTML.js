export default function removeHtmlTags(inputString) {
    const doc = new DOMParser().parseFromString(inputString, 'text/html');
    return doc.body.textContent || "";
  }