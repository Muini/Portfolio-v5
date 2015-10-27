<?php
    $json_data = file_get_contents('../json/projects.json');
    $json = json_decode($json_data, true);
    $index = $_GET["index"];
    $project = $json['projects'][ count($json['projects']) - $index ];
?>

<header class="a_project__header">
    <h1 class=""><?php echo $project['title']; ?></h1>
    <p class="a_project__desc"><?php echo $project['desc']; ?></p>
</header>
<section class="a_project__main">
    <?php if( $project['videoSrc'] != "" ): ?>
        <video>

        </video>
    <?php endif; ?>
    <?php if( count($project['photos']) > 0 ): ?>
        <ul class="a_gallery">
            <?php foreach($project['photos'] as $projectImg): ?>
            <li><img src="/img/projects/<?php echo $projectImg ?>" alt></li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</section>
<footer class="a_project__footer">
    <?php if( $project['url'] != "" ): ?>
        <a target="_blank" href="<?php echo $project['url']; ?>">See the project</a>
    <?php endif; ?>
</footer>
