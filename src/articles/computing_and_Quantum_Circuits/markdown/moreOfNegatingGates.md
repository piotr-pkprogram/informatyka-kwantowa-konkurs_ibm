## Więcej o bramkach negujących

### Bramka √X - pierwiastek z bramki X

Teraz powiemy sobie o bramce √X, czyli pierwiastek z NOT. A jak to może być pierwiastek z NIE, pewnie zapytasz. Otóż jak dobrze pamiętasz, bramka X odwracała wartość superpozycji qubitu względem jego osi. Bramka √X , natomiast najpierw neguje superpozycję danego qubitu, a potem wyciąga z tej odwróconej już wartości pierwiastek i o ten pierwiastek zmniejsza pierwotną superpozycję qubitu.  

![pierwiastek z bramki X](../../img/pierwiastek_z_X.svg)

### Bramka √Xdg - pierwiastek z bramki Xdg

Ta bramka działa bardzo podobnie jak zwykła bramka √X, tyle że ona zamiast odejmować, dodaje do pierwotnej superpozycji qubitu wynik operacji √(zanegowana wartość superpozycji qubitu).

![pierwiastek z bramki Xdg](../../img/pierwiastek_z_Xdg.svg)

### Bramka Y

Jeśli pamiętasz co robiła bramka not, lub inaczej bramka X to zrozumienie działania bramki Y będzie dla ciebie bardzo proste. Otóż bramka X w przeciwieństwie do tego co napisałem w sekcji [Bramka Not](./not_gate.html) nie jest całkowitym Not - em. Już tłumaczę o co chodzi. Jak dobrze pamiętasz sferę Blocha możemy podzielić na trzy osie: X, Y, i Z, bramka X natomiast odwraca wartość superpozycji qubitu, ale tylko względem osi Y i Z. Można w takim razie wyciągnąć wniosek, że nie bierze on pod uwagę kąta fazowego w przeciwieństwie do bramki Y, która to robi. Czemu więc nie powiedziałem tego wcześniej, ponieważ wtedy jeszcze nie wiedziałeś/aś co to jest kąt fazowy, a ja nie chciałem już na samym początku namieszać ci w głowie.
