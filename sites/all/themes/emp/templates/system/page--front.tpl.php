<?php global $base_url;?>

<div class="wrapper">
	<?php global $base_url; include('includes/header.tpl.php'); ?> 
	<?php //print $messages; ?>
    <?php //print render($page['carousel']); ?>

    <div class="content">
    <div class="slide-show">
            <div class="slide-image image-1 move-to-center">
                <div class="skewed"></div>
                <div class="text">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        
                </div>
            </div>
            <div class="slide-image image-2">
                <div class="skewed"></div>
                <div class="text">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        
                </div>
            </div>
            <div class="slide-image image-3">
                <div class="skewed"></div>
                <div class="text">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        
                </div>
            </div>
            <div class="slide-image image-4">
                <div class="skewed"></div>
                <div class="text">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perferendis qui obcaecati accusamus quos suscipit, dolorum voluptatem ipsam, ut rem temporibus placeat modi impedit nisi voluptate. Debitis laborum placeat vitae!</p>        
                </div>
            </div>
            <div class="slide-nav-bar">
                <button class="slide-nav-bar-1 active" value="1"></button>
                <button class="slide-nav-bar-2" value="2"></button>
                <button class="slide-nav-bar-3" value="3"></button>
                <button class="slide-nav-bar-4" value="4"></button>
            </div>
            <div class="slide-buttons">
                <button class="slide-button" value="dec"><</button>
                <button class="slide-button" value="inc">></button>
            </div>
        </div>
        <?php print render($page['services']); ?>
    </div>       
	
	<?php include('includes/footer.tpl.php'); ?>	
</div>