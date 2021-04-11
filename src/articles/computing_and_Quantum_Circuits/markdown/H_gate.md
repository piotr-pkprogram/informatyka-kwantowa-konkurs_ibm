# Tworzenie superpozycji i interferencji za pomocą bramki Hadamarda

Jeśli nie wiesz lub nie pamiętasz co to jest superpozycja to odsyłam cię do artykułu, w którym mówiłem [Co to jest kubit](../introduction_to_quantum_compiuting/whatIsAQubit.html) i wytłumaczyłem czym jest superpozycja. Otóż bramką, która tworzy superpozycję, jest bramka Hadamarda, w skrócie bramka H. Jeżeli qubit przejdzie przez bramkę Hadamarda to wejdzie on w superpozycję dwóch stanów podstawowych ![stan 0](../../img/stan_0.svg?display=inline) i ![stan 1](../../img/stan_1.svg?display=inline), a dokładniej będzie nimi w tym samym czasie. Co to oznacza. To oznacza, że qubit, który jest w stanie właśnie takiej super pozycji ma 50% na to, że przy pomiarze jego stanu będzie miał on stan ![stan 1](../../img/stan_1.svg?display=inline) i 50% szans na to, że będzie miał stan [stan 0](../../img/stan_0.svg?display=inline). Poniżej widzisz obwód z użyciem tej bramki bez zarejestrowania wyniku.

![obwód z bramką H bez pomiaru](../../img/obwod_z_bramka_H_bez_pomiaru.png)

Tutaj widzisz, że szansa no to czy, przy pomiarze qubit będzie miał stan on ![stan 0](../../img/stan_0.svg?display=inline) czy stan, [stan 1](../../img/stan_1.svg?display=inline) jest równa 50%. Jeśli wstawimy tam miernik, to mamy 50% szans na to, że zwróci nam jeden i 50% szans na to, że zwróci nam zero.

![obwód z bramką H z pomiarem](../../img/obwod_z_bramka_H_z_pomiarem.png)

W tym przypadku mamy stan 1. A co się stanie, jeśli w takim obwodzie użyjemy dwóch bramek Hadamarda np. w ten sposób.

![dwie bramki H bez pomiaru](../../img/dwie_bramki_H_bez_pomiaru.png)

Jak widzisz qubit wrócił do swojego podstawowego stanu ![stan 0](../../img/stan_0.svg?display=inline). Dlaczego tak się stało. Na logikę kubit powinien być w stanie, w którym jest 50% na to, że przy pomiarze stanu wyjdzie 1 i 50% na to, że wyjdzie 0. Jednak się tak nie dzieje. Wynika to z tego, że jeśli qubit przejdzie drugi raz przez bramkę H to wróci on do stanu, w którym był przed przejściem przez pierwszą bramkę H. Tak samo stanie się, gdy qubit, który już jest w superpozycji przejdzie przez dwie bramki H. Najpierw dostanie on nową superpozycję utworzoną przez pierwszą bramkę H, a następnie wróci do stanu, w którym był wcześniej.
