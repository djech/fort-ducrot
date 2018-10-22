<?php

namespace AppBundle\Controller;

use Application\Sonata\MediaBundle\Entity\Gallery;
use Fort\Bundle\AdministrationBundle\Entity\Membre;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Fort\Bundle\AdministrationBundle\Entity\Contact;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        $contact = new Contact;

        # Add form fields
        $form = $this->createFormBuilder($contact)
            ->add('name', TextType::class, array('label'=> true, 'attr' => array('class' => 'form-control')))
            ->add('email', TextType::class, array('label'=> 'Email','attr' => array('class' => 'form-control')))
            ->add('subject', TextType::class, array('label'=> 'Sujet','attr' => array('class' => 'form-control')))
            ->add('message', TextareaType::class, array('label'=> 'Message','attr' => array('class' => 'form-control')))
            ->getForm();

        # Handle form response
        $form->handleRequest($request);

        $galleries = $this->getDoctrine()->getRepository(Gallery::class)->findBy(array(),array('updatedAt' => 'DESC'),4);

        if($form->isSubmitted() &&  $form->isValid()) {

            $name = $form['name']->getData();
            $email = $form['email']->getData();
            $subject = $form['subject']->getData();
            $message = $form['message']->getData();

            # set form data

            $contact->setName($name);
            $contact->setEmail($email);
            $contact->setSubject($subject);
            $contact->setMessage($message);

            # finally add data in database

            $sn = $this->getDoctrine()->getManager();
            $sn->persist($contact);
            $sn->flush();

            $mail = \Swift_Message::newInstance()
                ->setSubject($subject)
                ->setFrom('hostmaster@fortpodbielski-ducrot-mundolsheim.fr','Contact')
                ->setTo(' jerome.roessler@gmail.com')
                ->setBody($this->renderView('default/sendemail.html.twig',array('name' => $name, 'email' => $email, 'message' => $message)),'text/html');

            $this->get('mailer')->send($mail);

        }

        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
            'galleries' => $galleries,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/association", name="association")
     */
    public function associationAction(Request $request)
    {
        $membres = $this->getDoctrine()->getRepository(Membre::class)->findBy(array(),array('id' => 'ASC'));

        return $this->render('default/association.html.twig',array(
            'membres' => $membres
        ));
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

        return $this->render('default/galleries.html.twig',array(
            'galleries' => $galleries
        ));
    }

    /**
     * @Route("/show/gallerie/{id}", requirements={"id" = "\d+"}, name="showGallerie")
     */
    public function showGallerieAction(Request $request, $id)
    {

        $gallerie = $this->getDoctrine()->getRepository(Gallery::class)->find($id);

        return $this->render('default/gallerie.html.twig',array(
            'gallerie' => $gallerie
        ));
    }
}
