<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\ManyToMany;

/**
 * @ApiResource
 * @ORM\Entity(repositoryClass="App\Repository\TagRepository")
 */
class Tag
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=256)
     */
    private $name;

    /**
     * @var \Doctrine\Common\Collections\Collection|Post[]
     *
     * @ORM\ManyToMany(targetEntity="Post", mappedBy="post_tags")
     */
    private $posts;

    public function __construct()
    {
        $this->name  = "Test";
        $this->posts = new ArrayCollection();
    }


    /**
     * @param Post $post
     */
    public function addPost(Post $post)
    {
        if ($this->posts->contains($post)) {
            return;
        }
        $this->posts->add($post);
        $post->addTag($this);
    }

    /**
     * @param Post $post
     */
    public function removePost(Post $post)
    {
        if (!$this->posts->contains($post)) {
            return;
        }
        $this->posts->removeElement($post);
        $post->removeTag($this);
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }
}
