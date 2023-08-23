export const facebookPixelId = "1598776293984358";

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};
