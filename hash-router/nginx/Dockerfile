FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy static assets
COPY ./host/dist /usr/share/nginx/html
COPY ./mfe1/dist /usr/share/nginx/html/mfe1
COPY ./mfe2/dist /usr/share/nginx/html/mfe2

EXPOSE 80
