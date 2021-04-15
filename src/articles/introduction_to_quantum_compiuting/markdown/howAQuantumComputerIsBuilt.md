# *Jak zbudowany jest komputer kwantowy?

Żeby komputer kwantowy mógł działać prawidłowo to temperatura w jego wnętrzu musi być bliska zeru absolutnemu, czyli około -273oC. Spytasz pewnie dlaczego, otóż jest to spowodowane tym, że im większa temperatura tym cząsteczki z których się składa wszystko w okuł nas się szybciej poruszają. Tyczy to się też qubitów, które są jednostka informacji w komputerze kwantowym. W takim razie możemy dojść do wniosku, że im wyższa temperatura tym wyższy współczynnik błędu podczas wykonywanych przez komputer kwantowy operacji na qubitach, ponieważ im wolniej taka cząsteczka się porusza tym łatwiej jest nam przewidzieć jej zachowanie i nad nią zapanować oraz wykonywać na niej operacje. Skoro już wiesz miej więcej jak działa komputer kwantowy i dlaczego potrzebuje on tak niskiej temperatury do pracy to przejdźmy teraz do jego budowy :

Oto jest grafika która przedstawia przykładowy komputer kwantowy :

![Komputer kwantowy](../../img/quantum_computer.svg)

[Źródło grafiki](https://www.ibm.com/quantum-computing/_nuxt/img/a546ac8.svg?target=_blank)

1. Wzmacniacz sygnału Qubitów
Jeden z dwóch stopni wzmacniających, który jest schładzany do temperatury 4 kelwinów, czyli około -269.15~^o~~C.

2. Wejściowe linie mikrofalowe
Tłumienie szumu termicznego jest stosowane na każdym etapie zachodzącym w chłodziarce w celu ochrony qubitów podczas procesu wysyłania sygnałów sterujących i odczytowych do procesora.

3. Nadprzewodzące linie koncentryczne
Linie koncentryczne w komputerze kwantowym są zbudowane z nadprzewodników, dzięki czemu podczas kierowania przez nie sygnału między pierwszym, a drugim stopniem wzmacniającym straty energii są minimalizowane.  

4. Izolator kriogeniczny
Umożliwia on przesyłanie sygnałów qubitów, bez naruszenia jakości przesyłanego qubita.

5. Wzmacniacze kwantowe
Wewnątrz osłony magnetycznej wychwytują one i wzmacniają sygnały odczytu procesora, przy okazji minimalizując szum.

6. Osłona krioperm
Procesor kwantowy znajduje się w środku osłony chroniącej go przed promieniowaniem elektromagnetycznym, aby zachował on swoją jakość.

7. Komora mieszania
Znajduje ona się w najniższej części chłodziarki i odpowiada za zapewnienie niezbędnej mocy chłodniczej do obniżenia temperatury procesora oraz związanych z nim komponentów do 15 mili kelwinów, czyli -273~^o~~C - to mniej niż w próżni.
