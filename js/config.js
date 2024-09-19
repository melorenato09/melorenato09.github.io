const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'Google',
      key: '*',
      url: 'https://google.com/search?q=',
      search: '/?q={}'
    },
    {
      category: 'Geral',
      name: 'E-Mail',
      key: 'gm',
      url: 'https://mail.google.com/mail/u/0/#inbox',
      color: '#bb3d3d',
      icon: 'mail',
    },
    {
      category: 'Geral',
      name: 'Facebook',
      key: 'fb',
      url: 'https://www.facebook.com/',
      color: '#0866FF',
      icon: 'facebook'
    },
    {
      category: 'Geral',
      name: 'Pinterest',
      key: 'pt',
      url: 'https://www.pinterest.pt',
      color: 'linear-gradient(135deg, #ff0000, #ffffff)',
      icon: 'pinterest',
    },
    {
      category: 'Geral',
      name: 'Tradutor',
      key: 'tr',
      url: 'https://www.deepl.com/translator',
      color: '#1a73e8',
      icon: 'translate',
    },
    {
      category: 'Geral',
      name: 'Photopea',
      key: 'pp',
      url: 'https://www.photopea.com/',
      color: '#55be6d',
      icon: 'photopea',
    },

    {
      category: 'Programação',
      name: 'Diolinux Plus',
      key: 'dl',
      url: 'https://plus.diolinux.com.br/',
      color: 'linear-gradient(135deg, #0F65AC, #BD0AA1)',
      icon: 'dplus',
    },
    {
      category: 'Programação',
      name: 'GitHub',
      key: 'gt',
      url: 'https://github.com/melorenato09',
      color: 'linear-gradient(135deg, #33373A, #484949)',
      icon: 'github',
    },
    {
      category: 'Programação',
      name: 'Stack Overflow',
      key: 'so',
      url: 'https://stackoverflow.com',
      color: 'linear-gradient(135deg, #d6671f, #212121',
      icon: 'stackoverflow',
    },
    {
      category: 'Programação',
      name: 'WebForma',
      key: 'wb',
      url: 'http://epl.webforma.pt',
      color: '#004daa',
      icon: 'webforma',
    },


    {
      category: 'Mídia',
      name: 'YouTube',
      key: 'yt',
      url: 'https://youtube.com',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
    },
    {
      category: 'Mídia',
      name: 'ESound',
      key: 'es',
      url: 'https://esound.app/app/library',
      color: '#1ec60d',
      icon: 'esound',
    },
    {
      category: 'Mídia',
      name: 'MangaDex',
      key: 'md',
      url: 'https://mangadex.org/titles/follows',
      color: '#e06f54',
      icon: 'mangadex',
    },
    {
      category: 'Mídia',
      name: 'Neflix',
      key: 'nt',
      url: 'https://www.netflix.com/browse',
      color: '#BA0000',
      icon: 'netflix',
    },

    {
      category: 'Social',
      name: 'Twitter',
      key: 'x',
      url: 'https://www.twitter.com',
      color: 'linear-gradient(135deg, #000, #fff )',
      icon: 'twitter'
    },
    {
      category: 'Social',
      name: 'Reddit',
      key: 'rt',
      url: 'https://reddit.com',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
    },
    {
      category: 'Social',
      name: 'Instagram',
      key: 'it',
      url: 'https://www.instagram.com/',
      color: 'linear-gradient(135deg, #C13584, #FCAF45',
      icon: 'instagram',
    },
    {
      category: 'Social',
      name: 'AniList',
      key: 'al',
      url: 'https://anilist.co',
      color: '#0B1622',
      icon: 'anilist',
    },
    {
      category: 'Programação',
      name: 'Internet',
      key: 'st',
      url: 'https://www.speedtest.net/',
      color: '#141526',
      icon: 'speedtest',
    },
    {
      category: 'Geral',
      name: 'Canva',
      key: 'cv',
      url: 'https://www.canva.com/',
      color: '#a570ff',
      icon: 'canva',
    },
    {
      category: 'Social',
      name: 'Discord',
      key: 'dc',
      url: 'https://www.discord.com/',
      color: '#00b0f4',
      icon: 'discord',
    },


  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 0
    },
    {
      name: 'Default',
      limit: 0
    },
    {
      name: 'History',
      limit: 2
    },
    {
      name: 'Google',
      limit: 2
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {

  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
