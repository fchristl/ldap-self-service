# LDAP Self Service

This is a simple Angular application that enables LDAP users to edit their own user
attributes.

It goes hand in hand with [LDAP Self REST Service](https://github.com/fchristl/ldap-self-rest-service) as a backend.

## Features
* Log in as a LDAP user
* Edit any of the permitted attributes (e.g. name, your mobile number, ...)
* Log out

## Configuration
In order to configure your own LDAP Self REST Service and therefore connect to your own
LDAP, edit `assets/config.json`:

* Set `endpoint` to the URL where your LDAP Self REST Service is reachable.
* Set `editableFields` to the attributes you want your users to be allowed to edit. This
  normally corresponds to the `EDITABLE_FIELDS` varaible from LDAP Self REST Service.
  
## Build
To build a frontend with your configuration, run `ng build --prod`. Then copy the
`dist` folder to wherever you want to host your frontend.
