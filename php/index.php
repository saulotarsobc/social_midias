<?php
header('Content-Type:application/json');
$liks = array(
    array(
        'titulo' => 'INTERNET EM SANTARÉM',
        'link' => 'https://wa.me/5593991716663',
        'icon' => '',
    ),
    array(
        'titulo' => 'INTERNET EM ICOARACI - BELÉM',
        'link' => 'https://wa.me/5591989952373',
        'icon' => '',
    ),
    array(
        'titulo' => 'INTERNET EM ALENQUER',
        'link' => 'https://wa.me/5593991242112',
        'icon' => '',
    ),
    array(
        'titulo' => 'SUPORTE TECNICO DE INTERNET',
        'link' => 'https://wa.me/5593991546383',
        'icon' => '',
    ),
    array(
        'titulo' => 'FINANCEIRO',
        'link' => 'https://wa.me/5593991546383',
        'icon' => '',
    ),
    array(
        'titulo' => 'CENTRAL DO ASSINANTE',
        'link' => 'https://linktr.ee/provedor.conectt',
        'icon' => '',
    ),
    array(
        'titulo' => 'YOUTUBE PROVEDOR CONECT',
        'link' => 'https://youtu.be/PuUPQYD_T4I',
        'icon' => '',
    ),
);

echo json_encode($liks, JSON_PRETTY_PRINT);
