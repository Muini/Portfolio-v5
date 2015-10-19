<?php
    $json_data = file_get_contents('../json/projects.json');
    $json = json_decode($json_data, true);
    $index = $_GET["index"];
    $project = $json['projects'][ count($json['projects']) - $index ];
?>

<header class="project__header">
    <h1 class="shadowed"><?php echo $project['title']; ?></h1>
    <p class="project__desc"><?php echo $project['desc']; ?></p>
</header>
<section class="project__main">
    <?php if( $project['videoSrc'] != NULL ): ?>
        <video>

        </video>
    <?php endif; ?>
    <?php if( count($project['photos']) > 0 ): ?>
        <ul class="gallery">
            <li><img src alt></li>
            <li><img src alt></li>
            <li><img src alt></li>
        </ul>
    <?php endif; ?>
</section>
<footer class="project__footer">
    <a target="_blank" href="<?php echo $project['url']; ?>">See the project</a>
</footer>
