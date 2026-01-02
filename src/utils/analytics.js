/**
 * Analytics utilities for tracking user interactions
 */

/**
 * Track page view
 */
export const trackPageView = (page) => {
  if (window.gtag) {
    window.gtag('config', 'G-7ZJMJLCEKY', {
      page_path: page,
    });
  }
};

/**
 * Track custom event
 */
export const trackEvent = (action, category, label, value) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Track external link click
 */
export const trackExternalLink = (url, label) => {
  trackEvent('click', 'External Link', label || url);
};

/**
 * Track resume download
 */
export const trackResumeDownload = () => {
  trackEvent('download', 'Resume', 'Resume PDF');
};

/**
 * Track section view
 */
export const trackSectionView = (sectionName) => {
  trackEvent('view', 'Section', sectionName);
};

export default {
  trackPageView,
  trackEvent,
  trackExternalLink,
  trackResumeDownload,
  trackSectionView,
};
