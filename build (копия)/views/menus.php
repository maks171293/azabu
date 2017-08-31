<a href="#" class="close-btn"></a>
<div class="menu__imgBox" style=" background-image: url(<?php the_field('image_background');?>);"></div>
<a class="home__btn" href="#"></a>
<div class="menu__wrap">
    <div class="menu__txt-wrap">
        <h2>menus</h2>
        <?php the_field('description_menu');?>
        <?php the_field('description');?>
        <ul class="menu__ul">
            <li><a href="<?php the_field('lunch_menu');?>" download>lunch</a></li>
            <li><a href="<?php the_field('dinner_menu');?>" download>dinner</a></li>
            <li><a href="<?php the_field('happy_hours_menu');?>" download>happy hour</a></li>
            <li><a href="<?php the_field('brunch_menu');?>" download>brunch</a></li>
            <li><a href="<?php the_field('kids_menu');?>" download>kids menu</a></li>
            <li><a href="<?php the_field('drinks_menu');?>" download>drinks</a></li>
        </ul>
        <h2>hours</h2>
        <?php the_field('lunch-time');?>
        <?php the_field('dinner-time');?>
        <?php the_field('brunch_time');?>
        <?php the_field('happy_hours');?>
     </div>
</div>