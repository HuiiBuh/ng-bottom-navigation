# Bottom Navigation Bar

## Dependencies

+ [Angular material](https://material.angular.io/)
+ [Material icons](https://www.npmjs.com/package/@material-ui/icons)

Both libraries have to be installed in your project.

## Usage

```html
<!-- A wrapper for the hole page --> 
<bottom-nav-container>

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

## Configuration and themeing

The background of the nav-bar automatically changes to a dark color, if you have a dark theme.
If you use a custom theme and want other highlight colors you can add your own highlight color with css variables. 

```scss
:root {
  // Configure the active color 
  --bottom-nav-active-color: #3880ff;
  
  // Configure the height of the nav bar
  --bottom-nav-height: 60px;
}
```

## Result

![result](https://i.imgur.com/R2ikMzS.png)
