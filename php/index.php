<?php
header('Content-Type:application/json');
$liks = array(
    array(
        'title' => 'INTERNET EM SANTARÉM',
        'link' => 'https://wa.me/5593991716663',
        'icon' => '',
    ),
    array(
        'title' => 'INTERNET EM ICOARACI - BELÉM',
        'link' => 'https://wa.me/5591989952373',
        'icon' => '',
    ),
    array(
        'title' => 'INTERNET EM ALENQUER',
        'link' => 'https://wa.me/5593991242112',
        'icon' => '',
    ),
    array(
        'title' => 'SUPORTE TECNICO DE INTERNET',
        'link' => 'https://wa.me/5593991546383',
        'icon' => '',
    ),
    array(
        'title' => 'FINANCEIRO',
        'link' => 'https://wa.me/5593991546383',
        'icon' => '',
    ),
    array(
        'title' => 'CENTRAL DO ASSINANTE',
        'link' => 'https://linktr.ee/provedor.conectt',
        'icon' => '',
    ),
    array(
        'title' => 'YOUTUBE PROVEDOR CONECT',
        'link' => 'https://youtu.be/PuUPQYD_T4I',
        'icon' => '',
    ),
);

echo json_encode($liks, JSON_PRETTY_PRINT);
