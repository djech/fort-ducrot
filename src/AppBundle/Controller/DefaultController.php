<?php

namespace AppBundle\Controller;

use Application\Sonata\MediaBundle\Entity\Gallery;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/association", name="association")
     */
    public function associationAction(Request $request)
    {
        return $this->render('default/association.html.twig');
    }

    /**
     * @Route("/fort", name="fort")
     */
    public function fortAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/fort.html.twig');
    }

    /**
     * @Route("/gallerie", name="gallerie")
     */
    public function gallerieAction(Request $request)
    {

        $galleries = $this->getDoctrine()->getRepository(Gallery::class)->findBy(array(),array('updatedAt' => 'DESC'));

        return $this->render('default/gallerie.html.twig',array(
            'galleries' => $galleries
        ));
    }
}
