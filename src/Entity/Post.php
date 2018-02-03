<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Column;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PostRepository")
 */
class Post
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Column(type="string", length=256, nullable=false)
     */
    private $title;

    /**
     * @Column(type="string", length=256, nullable=true)
     */
    private $subtitle;

    /**
     * @Column(type="text", nullable=false)
     */
    private $content;
}
