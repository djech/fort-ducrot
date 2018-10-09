<?php

namespace Application\Sonata\MediaBundle\Entity;

use Sonata\MediaBundle\Entity\BaseGallery as BaseGallery;
use Doctrine\ORM\Mapping as ORM;

/**
 * This file has been generated by the SonataEasyExtendsBundle.
 *
 * @link https://sonata-project.org/easy-extends
 *
 * References:
 * @link http://www.doctrine-project.org/projects/orm/2.0/docs/reference/working-with-objects/en
 *
 * @ORM\Entity(repositoryClass="Application\Sonata\MediaBundle\Repository\GalleryRepository")
 */
class Gallery extends BaseGallery
{
    /**
     * @var int $id
     */
    protected $id;

    /**
     * Get id.
     *
     * @return int $id
     */
    public function getId()
    {
        return $this->id;
    }
}
