<div class="main__logo_box main__logo_box-splash">
    <img src="<?php bloginfo('template_url')?>/img/biglogo.png">
    <p class="destination">miami beach opening fall 2017</p>
    <ul class="city-ul">
        <li><?php the_field('city-field-1');?></li>
        <li><?php the_field('city-field-2');?></li>
        <li><?php the_field('city-field-3');?></li>
        <li><?php the_field('city-field-4');?></li>
    </ul>

    <!--START Scripts : this is the script part you can add to the header of your theme-->
    <script type="text/javascript" src="http://azabu.sayen.pw/wp-includes/js/jquery/jquery.js?ver=2.7.11.3"></script>
    <script type="text/javascript" src="http://azabu.sayen.pw/wp-content/plugins/wysija-newsletters/js/validate/languages/jquery.validationEngine-en.js?ver=2.7.11.3"></script>
    <script type="text/javascript" src="http://azabu.sayen.pw/wp-content/plugins/wysija-newsletters/js/validate/jquery.validationEngine.js?ver=2.7.11.3"></script>
    <script type="text/javascript" src="http://azabu.sayen.pw/wp-content/plugins/wysija-newsletters/js/front-subscribers.js?ver=2.7.11.3"></script>
    <script type="text/javascript">
        /* <![CDATA[ */
        var wysijaAJAX = {"action":"wysija_ajax","controller":"subscribers","ajaxurl":"http://azabu.sayen.pw/wp-admin/admin-ajax.php","loadingTrans":"Loading..."};
        /* ]]> */
    </script><script type="text/javascript" src="http://azabu.sayen.pw/wp-content/plugins/wysija-newsletters/js/front-subscribers.js?ver=2.7.11.3"></script>
    <!--END Scripts-->

    <div class="widget_wysija_cont html_wysija"><div id="msg-form-wysija-html598c696191ee0-2" class="wysija-msg ajax"></div><form id="form-wysija-html598c696191ee0-2" method="post" action="#wysija" class="widget_wysija html_wysija">
            <p class="wysija-paragraph">


                <input type="text" name="wysija[user][email]" class="wysija-input validate[required,custom[email]]" title="" placeholder="enter email for updates" value="" />
                <input class="wysija-submit wysija-submit-field" type="submit" value="Go" />


                <span class="abs-req">
        <input type="text" name="wysija[user][abs][email]" class="wysija-input validated[abs][email]" value="" />
    </span>
         
            </p>
           

            <input type="hidden" name="form_id" value="2" />
            <input type="hidden" name="action" value="save" />
            <input type="hidden" name="controller" value="subscribers" />
            <input type="hidden" value="1" name="wysija-page" />


            <input type="hidden" name="wysija[user_list][list_ids]" value="1" />

        </form></div>
</div>