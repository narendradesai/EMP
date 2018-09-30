<?php

/**
 * @file
 * Template to display a view as a table.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $header: An array of header labels keyed by field id.
 * - $caption: The caption for this table. May be empty.
 * - $header_classes: An array of header classes keyed by field id.
 * - $fields: An array of CSS IDs to use for each field id.
 * - $classes: A class or classes to apply to the table, based on settings.
 * - $row_classes: An array of classes to apply to each row, indexed by row
 *   number. This matches the index in $rows.
 * - $rows: An array of row items. Each row is an array of content.
 *   $rows are keyed by row number, fields within rows are keyed by field ID.
 * - $field_classes: An array of classes to apply to each field, indexed by
 *   field id, then row number. This matches the index in $rows.
 * - $responsive: A flag indicating whether table is responsive.
 * @ingroup views_templates
 */
?>

<!-- carousel begins-->
<div id="carouselId" class="carousel slide" data-ride="carousel">
	<!-- Indicators -->
	<ul class="carousel-indicators">
		<?php foreach ($rows as $row_count => $row):  ?>
			<li data-target="#carouselId" data-slide-to="<?php echo $row_count; ?>" <?php echo (!$row_count)?'class="active"':''; ?> ></li>
		<?php endforeach; ?>
	</ul>
	
	<!-- The slideshow -->
	<div class="carousel-inner">
		<?php foreach ($rows as $row_count => $row):  ?>
		<div class="carousel-item <?php echo (!$row_count)?'active':''; ?>" >
			<?php echo $row['field_banner'] ?>
			<div class="carousel-caption">
				<h3 class="tracking-in-expand-fwd-top"><?php echo $row['title'] ?></h3>
				<p class="text-focus-in"><?php echo $row['field_image_info'] ?></p>
			</div>
		</div>
		<?php endforeach; ?>	  
	</div>
	
	<!-- Left and right controls -->
	<a class="carousel-control-prev" href="#carouselId" data-slide="prev">
	  <span class="carousel-control-prev-icon"></span>
	</a>
	<a class="carousel-control-next" href="#carouselId" data-slide="next">
	  <span class="carousel-control-next-icon"></span>
	</a> 
</div><!-- End of Carousel wrapper--> 
