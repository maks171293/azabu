<?php

$id = 7; // EVENTS category_id
$event_posts = new WP_Query(array('cat' => $id));

?>
<a class="home__btn home__btn-beige" href="#"></a>
<a href="#" class="close-btn"></a>

<div class="events__content">
    <a href="#" class="arrow arrow-left arrow-left-pos"></a>
    <div class="events__wrap">
        <?php if($event_posts->have_posts()) : while($event_posts->have_posts()) : $event_posts->the_post(); ?>
        <div class="events__block" style="background-image: url(<?php the_field('thumbnail');?>); background-size: contain;">
            <p class="event__info"><?php the_date();?>, <?php the_title(); ?></p>
        </div>

        <?php endwhile; endif; ?>
    </div>
    <a href="#" class="arrow arrow-right arrow-right-pos"></a>
</div>