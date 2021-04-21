## Bramka Not

Jeśli nie pamiętasz czym jest qubit to odsyłam cię [tutaj](../introduction_to_quantum_compiuting/whatIsAQubit.html). Dla przypomnienia kubit ma dwa stany podstawowe, czyli 0 i 1, które powinny być zapisane w ten sposób: ![stan 1](../../img/stan_1.svg?display=inline) i ![stan 0](../../img/stan_0.svg?display=inline) gdzie : ![stan 1 i 0](../../img/stan_0_i_1.svg?display=inline). I od teraz będę używał tego zapisu. Bramka Not to operacja, która neguje stan qubitu, inaczej odwraca go. Jest to najprostszy rodzaj bramki kwantowej, którą oznaczamy jako X. Na przykład jeśli nasz kubit ma stan ![stan 0](../../img/stan_0.svg?display=inline) to po użyci bramki not będzie on miał stan ![stan 1](../../img/stan_1.svg?display=inline).
Poprawny zapis takiej operacji według wzoru, który pokazywałem we [Wprowadzeniu](./introdaction.html) wyglądał by tak:
![dałanie bramki NOT](../../img/działanie_bramki_NOT.svg?display=inline). Jeśli natomiast nasz qubit będzie miał stan ![stan 1](../../img/stan_1.svg?display=inline) to po użyciu bramki not będzie on miał stan ![stan 0](../../img/stan_0.svg?display=inline).

Z [Wprowadzenia](./introdaction.html) do tej sekcji do powinieneś pamiętać przykład obwodu, który tam ci pokazałem, o to on:

![Obwód kwantowy](../../img/pierwszy_obwód.svg)

Teraz wytłumaczmy sobie co się na nim dzieje. Pierwszy blok resetuje qubit do stanu ![stan 0](../../img/stan_0.svg?display=inline) Potem qubit przechodzi przez bramkę NOT i jego stan zmienia się z ![stan 0](../../img/stan_0.svg?display=inline) na ![stan 1](../../img/stan_1.svg?display=inline), a później jego wartość jest rejestrowana, za pomocą miernika. Co prawda może ci się wydawać, że bramka NOT nie zadziałała, ponieważ miernik zwrócił zero, ale to nie jest jego prawdziwy stan. Teraz wejdź do [qauntum composer](https://quantum-computing.ibm.com/composer/?target=_blank) i zrób ten obwód samemu lub spójrz poniżej. Tutaj jest przedstawiony prawdziwy stan qubitu:

![wynik obwodu z bramką not](../../img/wynik_obwodu_NOT.png)

Jak widzisz qubit jest w stanie ![stan 1](../../img/stan_1.svg?display=inline), więc wszystko poszło ok.
