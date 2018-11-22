#!/bin/bash
echo "{\"endpoint\":\"$LDAP_REST_SERVICE_ENDPOINT\", \"editableFields\":$EDITABLE_FIELDS}" > /usr/share/nginx/html/assets/config.json
nginx -g "daemon off;"
