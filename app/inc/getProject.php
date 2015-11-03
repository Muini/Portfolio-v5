<?php
    $json_data = file_get_contents('../json/projects.json');
    $json = json_decode($json_data, true);
    $index = $_GET["index"];
    for ($x = 0; $x <= count($json['projects']); $x++) {
        if($json['projects'][$x]['id'] == $index){
            $project = $json['projects'][$x];
            break;
        }
    }
?>
<header class="a_project__header">
    <h1 class=""><?php echo $project['title']; ?></h1>
    <p class="a_project__desc"><?php echo $project['desc']; ?></p>
</header>
<section class="a_project__main">
    <?php if( $project['video'] != null ): ?>
        <div class="a_project__video">
            <div class="a_project__video__wrapper" data-video-type="<?php echo $project['video'][0]; ?>" data-video-id="<?php echo $project['video'][1]; ?>">
                <img src='img/loader.gif' class='loader__gif' alt />
            </div>
        </div>
    <?php endif; ?>
    <?php if( count($project['photos']) > 0 ): ?>
        <ul class="a_gallery">
            <?php foreach($project['photos'] as $projectImg): ?>
            <li><img src="img/projects/<?php echo $projectImg ?>" alt></li>
            <?php endforeach; ?>
        </ul>
    <?php endif; ?>
</section>
<footer class="a_project__footer">
    <?php if( $project['url'] != "" ): ?>
        <a class="a_project__link" target="_blank" href="<?php echo $project['url']; ?>">See the project</a>
    <?php endif; ?>
</footer>
