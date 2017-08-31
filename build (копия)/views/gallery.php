<a class="home__btn home__btn-beige" href="#"></a>
<a href="#" class="close-btn"></a>

<?php
$gallery = get_field('dine_gallery');
if( $gallery ): ?>
        <?php foreach( $gallery as $images): // variable must be called $post (IMPORTANT) ?>
                <div style="background-image: url(<?php echo $images->guid;?>);" class="menu__imgBox gallery__imgBox">
                    <a href="#" class="arrow arrow-left"></a>
                    <a href="#" class="arrow arrow-right"></a>
                </div>
        <?php endforeach; ?>
    <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>

<?php
$gallery = get_field('drinks_gallery');
if( $gallery ): ?>
    <?php foreach( $gallery as $images): // variable must be called $post (IMPORTANT) ?>
        <div style="background-image: url(<?php echo $images->guid;?>);" class="menu__imgBox gallery__imgBox">
            <a href="#" class="arrow arrow-left"></a>
            <a href="#" class="arrow arrow-right"></a>
        </div>
    <?php endforeach; ?>
    <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>

<?php
$gallery = get_field('space_gallery');
if( $gallery ): ?>
    <?php foreach( $gallery as $images): // variable must be called $post (IMPORTANT) ?>
        <div style="background-image: url(<?php echo $images->guid;?>);" class="menu__imgBox gallery__imgBox">
            <a href="#" class="arrow arrow-left"></a>
            <a href="#" class="arrow arrow-right"></a>
        </div>
    <?php endforeach; ?>
    <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>

<div class="links_wrap gallery__links_wrap">
    <ul class="gallery__links">
        <li><a href="#"><?php the_field('name_1');?></a></li>
        <li><a href="#"><?php the_field('name_2');?></a></li>
        <li><a href="#"><?php the_field('name_3');?></a></li>
    </ul>
</div>
