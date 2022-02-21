# P14_Plugins_02-2022

Openclassrooms - Parcours développeur Front-end

## Projet 14 : Faites passer une librairie jQuery vers React

Le projet P14_Plugins_02-2022 est un plugin développé dans le cadre de la formation OpenClassRooms et plus précisémment pour le projet [P14_HRnet_02-2022](https://github.com/lallieau/P14_HRnet_02-2022).

C'est un plugin React permettant d'afficher une modale.

## Installation :

```
$ npm install --save p14-plugin
$ yarn add p14-plugin
```

### Comment fonctionne le plug-in

#### Module d'importation :

```
import { Modal } from 'p14-plugin'
```

#### Créez votre state dans votre composant :

```
  const [modalIsOpen, setModalIsOpen] = useState(false);
```

#### Affichez la modale dans votre composant :

```
    return (
      <Modal
        show={modalIsOpen}
        setShow={setModalIsOpen}
        title="Success !"
        text="The new employee has been created"
        image={done}
      />
    )
```
