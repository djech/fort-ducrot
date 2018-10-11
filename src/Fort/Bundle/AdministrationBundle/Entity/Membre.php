<?php

namespace Fort\Bundle\AdministrationBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Membre
 *
 * @ORM\Table(name="membre")
 * @ORM\Entity(repositoryClass="Fort\Bundle\AdministrationBundle\Repository\MembreRepository")
 */
class Membre
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=50, nullable=true)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="prenom", type="string", length=50, nullable=true)
     */
    private $prenom;

    /**
     * @var string
     *
     * @ORM\Column(name="fonction", type="string", length=50, nullable=true)
     */
    private $fonction;

    /**
     * @ORM\ManyToOne(targetEntity="Application\Sonata\MediaBundle\Entity\Media", inversedBy="membres", cascade={"persist"})
     *
     * @ORM\JoinColumn(name="photo_id", referencedColumnName="id")
     */
    private $photo;

    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nom.
     *
     * @param string|null $nom
     *
     * @return Membre
     */
    public function setNom($nom = null)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom.
     *
     * @return string|null
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set prenom.
     *
     * @param string|null $prenom
     *
     * @return Membre
     */
    public function setPrenom($prenom = null)
    {
        $this->prenom = $prenom;

        return $this;
    }

    /**
     * Get prenom.
     *
     * @return string|null
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * Set fonction.
     *
     * @param string|null $fonction
     *
     * @return Membre
     */
    public function setFonction($fonction = null)
    {
        $this->fonction = $fonction;

        return $this;
    }

    /**
     * Get fonction.
     *
     * @return string|null
     */
    public function getFonction()
    {
        return $this->fonction;
    }
    

    /**
     * Set photo.
     *
     * @param \Application\Sonata\MediaBundle\Entity\Media|null $photo
     *
     * @return Membre
     */
    public function setPhoto(\Application\Sonata\MediaBundle\Entity\Media $photo = null)
    {
        $this->photo = $photo;

        return $this;
    }

    /**
     * Get photo.
     *
     * @return \Application\Sonata\MediaBundle\Entity\Media|null
     */
    public function getPhoto()
    {
        return $this->photo;
    }
}
