/* Copyright 2016 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

html {
    /* This is a custom, Chrome-specific color that does not have a --paper or
     * --google equivalent. */
    --md-background-color: rgb(248, 249, 250);
    --md-loading-message-color: #6e6e6e;
    --md-toolbar-height: 56px;
    --md-toolbar-border: 1px solid #e0e0e0;
  }
  
  @media (prefers-color-scheme: dark) {
    html {
      --md-background-color: rgb(32, 33, 36);  /* --google-grey-900 */
      --md-loading-message-color: #9AA0A6;  /* --google-grey-500 */
      /* --cr-separator-line */
      --md-toolbar-border: 1px solid rgba(255, 255, 255, .1);
    }
  }