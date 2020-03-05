// gatsby-browser.js
import React from 'react';

// Forked Gatsby default to not remount on switches between
// translated versions of the same page.
export function replaceComponentRenderer({ props, loader }) {
  return React.createElement(props.pageResources.component, {
    ...props,

    // Gatsby default is:
    // key: props.pageResources.page.path,

    // But we're happy with letting React do its thing.
  });
}