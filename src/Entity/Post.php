<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Datetime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\ManyToMany;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource
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
     * @Column(type="string", length=250)
     * @Assert\NotBlank()
     */
    private $title;

    /**
     * @Column(type="string", length=250)
     */
    private $subtitle;

    /**
     * @Column(type="text")
     * @Assert\NotBlank()
     */
    private $content;

    /**
     * @Column(type="datetime", options={"default": 0})
     * @Assert\NotBlank()
     */
    private $createdAt;

    /**
     * @Column(type="datetime", options={"default": 0})
     * @Assert\NotBlank()
     */
    private $updatedAt;

    /**
     * @var \Doctrine\Common\Collections\Collection|Tag[]

     * @Groups({"tags"})
     * @ApiSubresource

     * @ORM\ManyToMany(targetEntity="Tag", inversedBy="tag")
     * @ORM\JoinTable(
     *  name="post_tags",
     *  joinColumns={
     *      @ORM\JoinColumn(name="tag_id", referencedColumnName="id")
     *  },
     *  inverseJoinColumns={
     *      @ORM\JoinColumn(name="post_id", referencedColumnName="id")
     *  }
     * )
     */
    private $tags;

    function __construct()
    {
        $this->tags = new ArrayCollection();
    }

    /**
     * @param Tag $tag
     */
    public function addTag(Tag $tag): void
    {
        if ($this->tags->contains($tag)) {
            return;
        }
        $this->tags->add($tag);
        $tag->addPost($this);
    }

    /**
     * @param Tag $tag
     */
    public function removeTag(Tag $tag): void
    {
        if (!$this->tags->contains($tag)) {
            return;
        }
        $this->tags->removeElement($tag);
        $tag->removePost($this);
    }

    /**
     * @return mixed
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @return mixed
     */
    public function getSubtitle(): string
    {
        return $this->subtitle;
    }

    /**
     * @return mixed
     */
    public function getContent(): string
    {
        return $this->content;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt(): Datetime
    {
        return $this->createdAt;
    }

    /**
     * @return mixed
     */
    public function getUpdatedAt(): Datetime
    {
        return $this->updatedAt;
    }

    /**
     * @return Tag[]|\Doctrine\Common\Collections\Collection
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }
}
