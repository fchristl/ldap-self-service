FROM nginx
ADD https://github.com/fchristl/ldap-self-service/releases/download/0.0.2/ldap-self-service-0.0.2.tar.gz /usr/share/nginx/html
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh; cd /usr/share/nginx/html; tar xvf ldap-self-service-0.0.2.tar.gz && mv ldap-self-service/* .
CMD '/entrypoint.sh'
