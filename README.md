# gumike_noseru_craft

## Usage
To get up and running run:
``` bash
$ yarn
$ yarn serve
```

## Directory Structure ##
Inside the `src`-directory, are a couple of directories that need to be addressed:

### Assets ###
The assets that you want to use are placed inside this directory. This can be images, stylesheets, videos... you name
it.

### Components ###
Your components will be placed inside this directory. As you can see, this boilerplate comes already shipped with a
pre-made card component.

### Layouts ###
Your layout files will be placed inside this directory. When you are building a large single page application, you will
be using different layouts. For instance, your login-page or register-page will have a different layout than your
account-page.

The boilerplate comes out of the box with two layouts included. A minimal layout, used for the login and register page,
and a default layout, used for the home and account page.

### Locale ###
The Vue I18n plugin is used for localization. In the locale directory, you'll find an example for internalization. This
boilerplate comes with examples for English and Dutch out of the box, but feel free to add more!

### Mixins ###
The mixins you want to use with Vue will be placed inside this directory.

Inside the mixins directory is a `slot`-mixin. This mixin will add the `hasSlot()`-method to all the components it is
used in.

### Plugins ###
This boilerplate comes with a couple of plugins you can use.
It will load and configure:
 - axios
 - bootstrap
 - font-awesome
 - vue-i18n
 - vue-router
 - vuex
 - vuex-router-sync

Don't like one of those plugins? Just remove the file from the `plugins`-directory and remove the entry from the
`main.js`-file. Also, make sure to remove the package and dependencies from the `package.json`-file.

### Proxies ###
Proxies are used to perform AJAX-requests. This boilerplate comes with a base proxy which can be used to make performing
AJAX-requests fairly easy. Create a new proxy, for example, `UserProxy`, and extend the `Proxy`. This way you've got
access to the `all`, `find`, `update`, `create` and `destroy` methods. The boilerplate comes with an `AccountProxy` and
`AuthProxy` by default.

### Routes ###
In this directory, you can specify the routes that are used by this application. Vue Router loads the routes located in
this directory.

### Store ###
As mentioned before, Vuex is used as a single point of truth. To learn more about Vuex, visit the
[documentation](http://vuex.vuejs.org)

### Utils ###
Here you can place handy utils you want to use inside your application.