# Proiect - Lab2
-S-ar putea itemele din json sa nu fie displayd din cauza ca browserul blokeaza fetch
1. **Ce este o resursa în aplicatia ta?**
- O resursă este un loc din campus (ca Biblioteca sau Cantina) despre care ofer informatii in fisierul JSON (nume, locație, program).

2. **Exemplu de URI si componente:**
Exemplu: [/pages/library.html#schedule]
-[/pages/] : Folderul unde stau paginile.
- [library.html] : Fișierul paginii.
- [#schedule] : Fragmentul care te duce direct la secțiunea cu programul.

3. **Care parti sunt statice si care sunt dinamice?**
- **Statice:** Paginile .html și fisierul .css (continutul care nu se schimbă singur).
- **Dinamice:** Lista de resurse de pe prima pagina, pentru ca JavaScript-ul o ia din JSON si o afiseaza automat.

4. **Este aplicatia document-centric sau interactive (sau ambele)?**
Este ambele. Este **document-centric** pentru ca ofera informatii de citit, dar este si **interactiva** pentru ca am folosit JavaScript (fetch) pentru a filtra si afisa datele.


