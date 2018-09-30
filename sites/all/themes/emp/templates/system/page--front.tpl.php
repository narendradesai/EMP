<?php global $base_url;?>

<div class="wrapper">
    <?php include('includes/header.tpl.php'); ?> 
    
    <div class="content">
        <?php print render($page['banner']); ?>
        <?php print render($page['services']); ?>
    </div>       
	
	<?php include('includes/footer.tpl.php'); ?>	
</div>