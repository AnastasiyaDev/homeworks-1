<?php $icons = [
    ["pack", "Free delivery and returns", "Over $60, and returns withins 30 days"],
    ["products", "Free samples", "Get 3 free samples for every 60 orders"],
    ["lock", "Secured payment", "with visa, mastercart, american express and paypal"],
    ["phone", "Contact us anytime", "Hotline 1-800-543-4572"]
]; ?>

<div class="streak hide-on-mobile">
    <p>Discover the complete world of armani on <a href="" class="link-on-main-res">Armani.com</a></p>
</div>

<div class="conditions">
    <?php foreach($icons as $icon): ?>
    <div class="conditions__block">
        <svg class="svg-icon">
            <use xlink:href="img/sprite.svg#<?php echo $icon[0]; ?>_icon" />
        </svg>
        <h4><?php echo $icon[1]; ?></h4>
        <p class="hide-on-mobile"><?php echo $icon[2]; ?></p>
    </div>
    <?php endforeach; ?>
</div>