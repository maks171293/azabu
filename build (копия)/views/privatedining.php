<a href="#" class="close-btn"></a>


<div class="links_wrap private__links_wrap">
    <h2 class="title private__title">private dining</h2>
    <ul class="private__ul">
        <li><a href="#"><?php the_field('city_1');?></a></li>
        <li><a href="#"><?php the_field('city_2');?></a></li>
        <li><a href="#"><?php the_field('city_3');?></a></li>
        <li><a href="#"><?php the_field('city_4');?></a></li>
        <li><a href="#"><?php the_field('city_5');?></a></li>
    </ul>
</div>

<?php
$gallery = get_field('gallery_1');
if( $gallery ): ?>
    <?php foreach( $gallery as $images): // variable must be called $post (IMPORTANT) ?>
        <div style="background-image: url(<?php echo $images->guid;?>);" class="private__imgBox">
            <a href="#" class="arrow arrow-left"></a>
            <a href="#" class="arrow arrow-right"></a>
        </div>
    <?php endforeach; ?>
    <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>

<?php
$gallery = get_field('gallery_2');
if( $gallery ): ?>
    <?php foreach( $gallery as $images): // variable must be called $post (IMPORTANT) ?>
        <div style="background-image: url(<?php echo $images->guid;?>);" class="private__imgBox">
            <a href="#" class="arrow arrow-left"></a>
            <a href="#" class="arrow arrow-right"></a>
        </div>
    <?php endforeach; ?>
    <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>

<?php
$gallery = get_field('gallery_3');
if( $gallery ): ?>
    <?php foreach( $gallery as $images): // variable must be called $post (IMPORTANT) ?>
        <div style="background-image: url(<?php echo $images->guid;?>);" class="private__imgBox">
            <a href="#" class="arrow arrow-left"></a>
            <a href="#" class="arrow arrow-right"></a>
        </div>
    <?php endforeach; ?>
    <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>

<?php
$gallery = get_field('gallery_4');
if( $gallery ): ?>
    <?php foreach( $gallery as $images): // variable must be called $post (IMPORTANT) ?>
        <div style="background-image: url(<?php echo $images->guid;?>);" class="private__imgBox">
            <a href="#" class="arrow arrow-left"></a>
            <a href="#" class="arrow arrow-right"></a>
        </div>
    <?php endforeach; ?>
    <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>

<?php
$gallery = get_field('gallery_5');
if( $gallery ): ?>
    <?php foreach( $gallery as $images): // variable must be called $post (IMPORTANT) ?>
        <div style="background-image: url(<?php echo $images->guid;?>);" class="private__imgBox">
            <a href="#" class="arrow arrow-left"></a>
            <a href="#" class="arrow arrow-right"></a>
        </div>
    <?php endforeach; ?>
    <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>
