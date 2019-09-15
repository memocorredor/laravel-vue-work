<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

# Laravel Vue SPA 
A copy of the best framework of all "Laravel 5.8".
This copy is the ini point with Vue.

## What is installed!

- `Bootstrap 4.3.1`
- `Awesome Fonts Free 5.10.2`
- `Vue 2.6.10`
- `Vuex 3.1.1`
- `Vue Router 3.1.3`
- `Vuex Persist 2.1.0`
- `Vue i18n 8.14.0`
- `Moment 2.24.0`
- `Js Cookie 2.2.1`

## Laravel Passport
Here you will find all the information, if you need more help.
> With this we will have the best tool to make user authentication.

- [Link laravel Passport]('https://laravel.com/docs/6.0/passport')

In the part below I will put it to work with this installation.

## Laravel WebSocket
Here you will find all the information, if you need more help.
> With this we will have the best tool to make a dynamic web.

- [Link laravel WebSocket]('https://docs.beyondco.de/laravel-websockets/')

In the part below I will put it to work with this installation.

### Start the installation Laravel and NPM packages
- Clone this repository
- Rename `.env.example` to `.env`
- Edit `.env` and set your `database`, `email`, `pusher` details
- `php artisan key:generate`
- `composer install`.
- `php artisan migrate`
- `php artisan passport:install`
- Copy de `Password grant client created successfully`. ID 2 key (Client secret) and paste in `.env` (APP_CLIENT_SECRET=)
- `npm install`
- `npm run dev`
- `npm run watch`
- If you need tu dump the composer `composer dump-autoload`
- Run de websocket server `php artisan websockets:serve`
- Open a browser and go to YOUR URL `/ws-dashboard` 