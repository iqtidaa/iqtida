const toast = document.querySelector('#toast');
let toastTimer;
function notify(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 4000); }
async function copyText(text, message) {
  try { await navigator.clipboard.writeText(text); notify(message); }
  catch { window.prompt('انسخ النص التالي:', text); }
}
document.querySelector('#share').addEventListener('click', async () => {
 const data = {title:'اقتداء وعطاء | جامعة الملك عبدالعزيز',text:'قدوة في العطاء، وأثر يمتد حياة. تعرّف على حملة اقتداء وعطاء في جامعة الملك عبدالعزيز.',url:location.origin + location.pathname};
 if (navigator.share) { try { await navigator.share(data); } catch(error) { if(error.name !== 'AbortError') await copyText(data.url, 'تم نسخ رابط الحملة'); } }
 else await copyText(data.url, 'تم نسخ رابط الحملة — شاركه مع من تحب');
});
document.querySelector('#copy-tag').addEventListener('click', () => copyText('#اقتداء_وعطاء', 'تم نسخ وسم الحملة'));
