## Croatian instalation instructions
Instalirati nodejs, zatim otići u ..\google\blockly-moj_projekt\demos\moj_projekt i pokrenuti naredbu "npm install"
u git bash prozoru u tom folderu kako bi se instalirali svi moduli potrebni za web aplikaciju.

Instalirati MongoDB bazu podataka tako što se prvo skine s njihove stranice instaler, zatim se instalira u root direktorij particije npr. C:\mongodb , zatim se napravi novi folder u toj mapi koji se zove "data" gdje će biti baze podataka. Nakon toga se uđe u /bin folder i pokrene se command prompt kao administrator te se pokrene mongod. Instrukcije za pokretanje baze kao servis se mogu pronaći na internetu, no ja sam koristio https://www.youtube.com/watch?v=k_0ZzvHbNBQ kao uputu kako to sve instalirati i podesiti.

Nakon instalacije baze podataka treba kopirati /data folder koji je na gitu i kopirati ga u vaš mongodb folder kako bi dobili kolekcije s blokovima i kolekciju koju aplikacija koristi. Kolekcije (collection) su ekvivalenti tablica u MySQL bazi podataka. Budući da je MongoDB NoSQL baza podataka orijentirana na dokumente onda ona koristi kolekcije.

Nakon što je podignut MongoDB kao servis i instalirani su svi moduli koje web aplikacija koristi, onda odite u folder u kojem se nalazi aplikacija -> ..\google\blockly-moj_projekt\demos\moj_projekt i u git bash prozoru upišete "nodemon" i sačekate da se digne lokalni server na adresi localhost:8888 i da se spoji na bazu podataka.

## English instalation instructions
Install nodejs then go to ..\google\blockly-my_project\demos\my_project and run the command "npm install" in the git bash window in that folder to install all the modules required for the web application.

Install the MongoDB database by first downloading it from their installer page, then installing it into the root partition directory eg C:\mongodb, then create a new folder in that folder called "data" where the database will be. Then enter the /bin folder and launch the command prompt as an administrator and start mongod. Instructions for running database as a service can be found on the Internet, but I used https://www.youtube.com/watch?v=k_0ZzvHbNBQ as a guide to installing and configuring it all.

After installing the database, it is necessary to copy the /data folder on the git and copy it to your mongodb folder to get the collection with the blocks and collection that the application uses. Collections are the table equivalents in the MySQL database. Since MongoDB is a NoSQL database and is document oriented database it uses collections.

Once MongoDB has been installed as a service and all the modules used by the web application are installed, go to the folder where the application is located -> ..\ google\blockly-my_project\demos\my_project and enter "nodemon" in the git bash window and wait for app to start the local server at localhost: 8888 and connect to the database.
