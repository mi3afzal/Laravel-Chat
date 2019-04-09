
## Laravel-vue-chat-application

Using Laravel 5.8, Vue JS, Laravel-Echo, Laravel-broadcast, Pusher real-time messaging service


### How to use this Github Code.
* Clone this repository.
* Go to the project
* Type this command: composer update
* Then this command: npm install
* Change the BROADCAST_DRIVER=pusher in the .env file.
* Create a pusher app and grab the app key, secret, id, and cluster.
* Put into the .env file. You need to put for client and server. Remember in the .env file, you need to put twice, there are already variables are defined by laravel, you just need to put the values.
* Put pusher aap key and cluster directly in resources/js/bootstrap.js. because accessing .env variables is not working in latest version of Laravel and Vue JS.
* Migrate the database tables from this command: php artisan migrate
* Start the development server: php artisan serve
* Register two users.
* Go to this URL: http://localhost:8000/chat.



### Following this tutorial
https://appdividend.com/2018/05/19/laravel-vue-chat-application-tutorial/
