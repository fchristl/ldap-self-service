#!/bin/bash
echo "{\"endpoint\":\"$LDAP_SELF_REST_SERVICE_ENDPOINT\", \"editableAttributes\":$EDITABLE_ATTRIBUTES}" > /usr/share/nginx/html/assets/config.json
nginx -g "daemon off;"
