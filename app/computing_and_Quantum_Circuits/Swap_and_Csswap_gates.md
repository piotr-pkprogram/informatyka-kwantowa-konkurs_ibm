# Zamiana wartości stanów qubitów - SWAP i CS SWAP

Bramki SWAP i CS SWAP służą do zamiany stanów dwóch qubitów. Bramka SWAP, którą widzisz poniżej, zamienia stan górnego qubita na stan dolnego i na odwrót. 

![bramka swap](../../img/swap_gate.svg)

O to przykład:

![przykład SWAP](../../img/przykład_SWAP.png) 

Tutaj górny qubit jest w stanie ![stan 0](../../img/stan_0.svg?display=inline), qubit dolny ma stan ![stan 1](../../img/stan_1.svg?display=inline). Po użyciu bramki SWAP, te stany się zamienią ze sobą miejscami. Zobazc niżej:

![wynik SWAP](../../img/wynik_SWAP.png)

Bramka CS SWAP działa bardzo podobnie jak bramka SWAP, tylko że ona zamienia wartości dwóch docelowych qubitów, tylko wtedy, kiedy qubit kontrolny ma stan ![stan 1](../../img/stan_1.svg?display=inline) Oto przykład:

![przykład CsSWAP](../../img/przykład_CsSWAP.png)

Jeżeli pierwszy qubit jest równy ![stan 0](../../img/stan_0.svg?display=inline), to nic się nie dzieje.

![przykład CsSWAP 2](../../img/przykład_CsSWAP2.png)

Natomiast jeśli qubit kontrolny będzie miał stan ![stan 1](../../img/stan_1.svg?display=inline) to qubity docelowe zamienią się stanami.
