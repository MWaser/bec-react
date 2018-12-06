FROM php:7.2.7-fpm-alpine3.7
RUN apk update; \
    apk upgrade;

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin/ --filename=composer
COPY composer.json ./
RUN composer install --prefer-source --no-interaction

RUN docker-php-ext-install mysqli