<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Datetime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Column;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\ManyToMany;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(attributes={
 *     "normalization_context"={"groups"={"read"}},
 *     "denormalization_context"={"groups"={"write"}}
 * })
 * @ORM\Entity(repositoryClass="App\Repository\PostRepository")
 */
class Post
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     * @Groups({"read"})
     */
    private $id;

    /**
     * @Column(type="string", length=250)
     * @Groups({"read", "write"})
     * @Assert\NotBlank()
     */
    public $title;

    /**
     * @Column(type="string", length=250)
     * @Groups({"read", "write"})
     */
    public $subtitle;

    /**
     * @Column(type="text")
     * @Groups({"read", "write"})
     * @Assert\NotBlank()
     */
    public $content;

    /**
     * @Column(type="datetime", options={"default": 0})
     * @Groups({"read", "write"})
     * @Assert\NotBlank()
     */
    public $createdAt;

    /**
     * @Column(type="datetime", options={"default": 0})
     * @Groups({"read", "write"})
     * @Assert\NotBlank()
     */
    public $updatedAt;

    /**
     * @var \Doctrine\Common\Collections\Collection|Tag[]
     * @Groups({"read"})
     * @ApiSubresource
     * @ORM\ManyToMany(targetEntity="Tag", inversedBy="posts", cascade={"persist"})
     * @JoinTable(name="post_tags")
     */
    public $tags;

    /**
     * @Column(type="string", length=255)
     * @Groups({"read", "write"})
     * @Assert\NotBlank()
     */
    public $author;

    /**
     * Post constructor.
     */
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
     * @return string
     */
    public function getAuthor(): string
    {
        return $this->author;
    }

    /**
     * @return Tag[]|Collection
     */
    public function getTags()
    {
        return $this->tags;
    }
}
