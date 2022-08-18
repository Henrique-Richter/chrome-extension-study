// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

const API = 'https://chat.googleapis.com/v1/spaces/{{SPACE_ID}}/messages?threadKey={{SPACE_ID}}'

let button = document.querySelector('#submit');

button.addEventListener('click', () => {
  sendMessage();
})

function sendMessage() {
  chrome.storage.sync.get({
    webhook
  }, function(items) {
    API.replaceAll('{{SPACE_ID}}' ,items.webhook);
  });
}




