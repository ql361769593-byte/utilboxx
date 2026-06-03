export type Dictionary = {
  site: {
    title: string;
    description: string;
    keywords: string;
    tagline: string;
  };
  nav: {
    home: string;
    tools: string;
    about: string;
    privacy: string;
  };
  home: {
    hero_title: string;
    hero_subtitle: string;
    features_title: string;
    features_subtitle: string;
    cta: string;
    categories: {
      title: string;
      description: string;
    }[];
  };
  tools: {
    category: {
      pdf: string;
      image: string;
      text: string;
      unit: string;
      color: string;
      crypto: string;
      dev: string;
    };
    pdf: {
      merge: string;
      split: string;
      compress: string;
      toImage: string;
      imageToPdf: string;
      addWatermark: string;
      rotate: string;
      extractImages: string;
      extractText: string;
      reorder: string;
    };
    image: {
      compress: string;
      resize: string;
      crop: string;
      convert: string;
      addWatermark: string;
    };
    text: {
      charCount: string;
      caseConvert: string;
      duplicate: string;
      diff: string;
      regex: string;
    };
    unit: {
      length: string;
      weight: string;
      temperature: string;
      area: string;
      volume: string;
      speed: string;
      data: string;
      time: string;
    };
    color: {
      picker: string;
      hexToRgb: string;
      palette: string;
    };
    crypto: {
      hash: string;
      base64: string;
      urlEncode: string;
      uuid: string;
    };
    dev: {
      jsonFormat: string;
      timestamp: string;
      qrcode: string;
      password: string;
    };
  };
  common: {
    upload: string;
    download: string;
    process: string;
    reset: string;
    copy: string;
    copied: string;
    input: string;
    output: string;
    result: string;
    options: string;
    error: string;
    success: string;
    loading: string;
  };
  ui: {
    choose_file: string;
    drop_file_here: string;
    or: string;
    paste_text: string;
    type_text: string;
    select_option: string;
  };
  footer: {
    copyright: string;
    made_with: string;
  };
};
