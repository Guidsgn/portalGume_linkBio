const defaultConfig = {
  background_color: '#030305',
  accent_color: '#888ac4',
  secondary_accent: '#6c6ea1',
  text_color: '#fdfdfd',
  card_color: 'rgba(253,253,253,0.1)',
  font_family: 'Outfit',
  font_size: 16,
  profile_name: '@portalgume',
  profile_bio: '🔥 Achadinhos que valem a pena | 🎮 Gadgets & setups | 💡 Coisas úteis e diferentes ↓',
  shopee_text: 'Loja na Shopee',
  tiktok_text: 'TikTok',
  telegram_text: 'Canal no Telegram',
  whatsapp_text: 'WhatsApp'
};

async function onConfigChange(config) {
  const bgColor = config.background_color || defaultConfig.background_color;
  const accentColor = config.accent_color || defaultConfig.accent_color;
  const secondaryAccent = config.secondary_accent || defaultConfig.secondary_accent;
  const textColor = config.text_color || defaultConfig.text_color;
  const cardColor = config.card_color || defaultConfig.card_color;
  const fontFamily = config.font_family || defaultConfig.font_family;
  const fontSize = config.font_size || defaultConfig.font_size;

  // Background
  document.getElementById('app-wrapper').style.background = bgColor;
  
  // Blobs
  document.getElementById('blob1').style.background = accentColor;
  document.getElementById('blob2').style.background = secondaryAccent;
  
  // Profile ring
  document.getElementById('profile-ring').style.background = `linear-gradient(135deg, ${accentColor}, ${secondaryAccent})`;
  document.querySelector('#profile-avatar').parentElement.style.background = `linear-gradient(135deg, ${accentColor}, ${secondaryAccent})`;
  document.getElementById('profile-avatar').style.background = bgColor;
  document.getElementById('status-badge').style.background = secondaryAccent;
  document.getElementById('status-badge').style.color = bgColor;
  
  // Text colors
  document.getElementById('profile-name').style.color = textColor;
  document.getElementById('profile-bio').style.color = textColor;
  
  // Text content
  document.getElementById('profile-name').textContent = config.profile_name || defaultConfig.profile_name;
  document.getElementById('profile-bio').textContent = config.profile_bio || defaultConfig.profile_bio;
  const shopeeEl = document.getElementById('text-shopee');
  if (shopeeEl) shopeeEl.textContent = config.shopee_text || defaultConfig.shopee_text;
  const tiktokEl = document.getElementById('text-tiktok');
  if (tiktokEl) tiktokEl.textContent = config.tiktok_text || defaultConfig.tiktok_text;
  const telegramEl = document.getElementById('text-telegram');
  if (telegramEl) telegramEl.textContent = config.telegram_text || defaultConfig.telegram_text;
  const whatsappEl = document.getElementById('text-whatsapp');
  if (whatsappEl) document.getElementById('text-whatsapp').textContent = config.whatsapp_text || defaultConfig.whatsapp_text;
  
  // Links text color
  document.querySelectorAll('.link-btn span, .link-btn svg').forEach(el => {
    el.style.color = textColor;
  });
  
  // Social icons
  document.querySelectorAll('.social-icon').forEach(el => {
    el.style.background = cardColor;
  });
  document.querySelectorAll('.social-icon svg').forEach(el => {
    el.style.color = textColor;
  });
  
  // Footer
  document.querySelector('footer p').style.color = textColor;
  
  // Font
  const fontStack = `${fontFamily}, sans-serif`;
  document.querySelectorAll('h1, p, span, a').forEach(el => {
    el.style.fontFamily = fontStack;
  });
  
  // Font size
  document.getElementById('profile-name').style.fontSize = `${fontSize * 1.875}px`;
  document.getElementById('profile-bio').style.fontSize = `${fontSize * 1.125}px`;
  document.querySelectorAll('.link-btn span').forEach(el => {
    el.style.fontSize = `${fontSize * 1.125}px`;
  });
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => { config.background_color = value; window.elementSdk.setConfig({ background_color: value }); }
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (value) => { config.accent_color = value; window.elementSdk.setConfig({ accent_color: value }); }
      },
      {
        get: () => config.secondary_accent || defaultConfig.secondary_accent,
        set: (value) => { config.secondary_accent = value; window.elementSdk.setConfig({ secondary_accent: value }); }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => { config.text_color = value; window.elementSdk.setConfig({ text_color: value }); }
      },
      {
        get: () => config.card_color || defaultConfig.card_color,
        set: (value) => { config.card_color = value; window.elementSdk.setConfig({ card_color: value }); }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => { config.font_family = value; window.elementSdk.setConfig({ font_family: value }); }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => { config.font_size = value; window.elementSdk.setConfig({ font_size: value }); }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ['profile_name', config.profile_name || defaultConfig.profile_name],
    ['profile_bio', config.profile_bio || defaultConfig.profile_bio],
    ['shopee_text', config.shopee_text || defaultConfig.shopee_text],
    ['tiktok_text', config.tiktok_text || defaultConfig.tiktok_text],
    ['telegram_text', config.telegram_text || defaultConfig.telegram_text],
    ['whatsapp_text', config.whatsapp_text || defaultConfig.whatsapp_text]
  ]);
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9d7d99a0321a5898',t:'MTc3Mjc2MDY3OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

window.addEventListener('load', function() {
  var preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('hidden');
  }
});
