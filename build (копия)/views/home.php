<div class="nav_wrap">
    <div class="nav__img"></div>
    <div class="nav__menu-wrap">
<?php

//Main menu for only Home Page

wp_nav_menu( array(
    'menu' => 'main',
    'menu_class' => 'nav main__nav',
    'container'=>'',
    'theme_location'=>'main',
) );

?>
    </div>
</div>
