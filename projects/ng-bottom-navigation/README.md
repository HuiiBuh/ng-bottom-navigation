# Bottom Navigation Bar

## Installation

```bash
npm install --save ng-bottom-navigation
```

## Dependencies

+ [Angular material](https://material.angular.io/)
+ [Material icons](https://www.npmjs.com/package/@material-ui/icons)

Both libraries have to be installed in your project.  
In addition to this angular routing has to be enabled.

## Usage

```html
<!-- A wrapper for the hole page -->
<bottom-nav-container [height]="70px">

  <!-- The main content has to be inside here -->
  <!-- You can add a nav, ... It is recommended to put the router in here -->
  <bottom-nav-content>
    <router-outlet></router-outlet>
  </bottom-nav-content>

  <!-- The bottom nav bar -->
  <bottom-nav>

    <!-- Add a bottom-nav-item for every  icon in the bottom nav. -->
    <!-- The name in the bottom-nav-icon (home) is the name of the material icon -->
    <!-- Use the link input like a [routerLink] -->
    <bottom-nav-item link="">
      home
    </bottom-nav-item>

    <!-- Do you want to match the provided path exactly, -->
    <!-- or do you want to include paths which extend the path into the path matching (default not exact) -->
    <!-- /like/me would be matched if exact is false -->
    <bottom-nav-item [link]="'like'" [exact]="true">
      thumb_up
    </bottom-nav-item>

    <!-- The label is optional and adds a ... label to the icon -->
    <bottom-nav-item link="watch" [exact]="true" label="watch">
      watch_later
    </bottom-nav-item>

  </bottom-nav>

</bottom-nav-container>
```

In addition to the html you have to include the `ng-bottom-navigation.scss` file in your index.scss file!

## Configuration and theming

If you are using a custom theme you can take advantage of the theming mixin fo the navigationbar.  
Import the `ng-bottom-navigation.scss` file and use the `bottom-nav-theme` mixin.
  
```scss
// Earlier created custom theme
$light-theme: mat-light-theme($primary, $accent, $warm);

// Include the mixin and pass your custom theme
@include bottom-nav-theme($light-theme);

// You can also pass the colorful option ot the mixin. This will change the background color of the nav bar to your primary color
@include bottom-nav-theme($light-theme, colorful)

// You also have to include the mixin in your dark theme and padd the dark theme to it
.dark-theme {
  $dark-theme: mat-light-theme($primary, $accent, $warm);
  @include bottom-nav-theme($dark-theme)
}


```

## Result

![result](https://i.imgur.com/O3mhtkA.png)
