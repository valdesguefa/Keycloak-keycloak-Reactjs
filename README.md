# Keycloak-keycloak-Reactjs
toutes les explications nécessaire pour une bonne comprehension de Keycloak se referer au pdf 'Readme Keycloak.pdf' 
ce repository a pour but d'offrir de permettre une meilleure compréhension de ce qu'es Keycloak et comment l'utiliser dans une application.
pour cela les configuration du royaume se trouve dans le fichier realm-export.json pour l'utiliser il suffit de:
- lancer votre server Keycloak sur le port 8180 la commande pour le faire se trouve dans le pdf 'Readme Keycloak.pdf'
- ouvir la console d'administration et importer le fichier 'realm-export.json' dans une des rubrique (contenant le mot 'export') qui vous sera proposes au niveau de la console d'administration
dans notre royaume nous avons definis 2 applications clientes ayant pour clientId 'valdes' et 'valdes2' dans notre royaume 
ces 2 applications clientes sont des projets react donc pour installer les dépendances  de chacun des projets taper dans le repertoire de chacun d'eux la commande 'npm install'
ensuite taper la commande 'nom start' pour lancer chacune des applications react .
