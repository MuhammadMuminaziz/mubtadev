import emailjs from 'emailjs-com';

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

function sendEmail(serviceId: string, templateId: string, public_key: string, templateParams: {[key: string]: string}) {
  return emailjs.send(serviceId, templateId, templateParams, public_key);
}

export { truncateText, sendEmail }