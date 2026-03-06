/*
 * SPDX-License-Identifier: LGPL-2.1-or-later
 *
 * Copyright (C) 2017 Red Hat, Inc.
 */

import React, { useEffect, useState } from 'react';
import { Alert } from "@patternfly/react-core/dist/esm/components/Alert/index.js";
import { Card, CardBody, CardTitle } from "@patternfly/react-core/dist/esm/components/Card/index.js";

import cockpit from 'cockpit';

const _ = cockpit.gettext;

export const Application = () => {
    const domain = window.location.hostname;
    const targetPort = "3000";
    const iframeSrc = `http://${domain}:${targetPort}`;
    const iframeSrcSecure = `https://${domain}:${targetPort}`;
    const iframeId = "ai-chat-iframe";
    return (
        <div style={{ height: '100vh', width: '100%'}}>
            <iframe 
                id={iframeId}
                src={iframeSrc}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="AI Chat"
                sandbox='allow-forms allow-scripts allow-same-origin'>Something happened. probably COORS issue...</iframe>
                <script>
                    (function ()
                    {
                        setTimeout(() => {
                            const iframe = document.getElementById(iframeId) as HTMLIFrameElement;
                            if (iframe) {
                                iframe.src = iframeSrcSecure;
                                setTimeout(() => {
                                    iframe.src = iframeSrc;
                                }, 1000);
                            }
                           
                        }, 1000)
                    })()
                </script>
        </div>
    );
};
