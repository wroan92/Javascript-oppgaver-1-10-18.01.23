    function Prediction(description) {
        this.description = description;
      }
      
      const predictions = [
        new Prediction("Du vil endelig klare å fikse den irriterende CSS-buggen som har plaget deg i uker."),
        new Prediction("Din neste pull request vil bli akseptert med en gang, uten at noen kommenterer koden din."),
        new Prediction("Du vil få en plutselig innsikt i en ny frontend-teknologi som gjør at du kan fullføre prosjektet ditt raskere enn du noensinne har gjort før."),
        new Prediction("Du vil få en oppgave som er så enkel at du vil tro det er en felle, men den vil faktisk være akkurat det du trengte for å løsne opp i en vanskelig kodebit."),
        new Prediction("Du vil oppdage en ny funksjon i favorittrammeverket ditt som vil spare deg masse tid på utviklingen."),
        new Prediction("Du vil lage et design som er så bra at det får alle brukerne til å si WOW."),
        new Prediction("Du vil finne en utviklermeme som får deg til å le høyt midt i en kodegjennomgang."),
        new Prediction("Du vil møte en frontend-utvikler som har enda mer kjærlighet for CSS enn du har, og dere vil kunne utveksle triks og triks sammen."),
        new Prediction("En gammel nettleser vil endelig dø ut og gjøre livet ditt som frontend-utvikler mye enklere."),
        new Prediction("Du vil endelig kunne fjerne en hel del kode som ikke lenger trengs, og du vil føle deg som en CSS-guru når du gjør det."),
      ];
      
      function randomPrediction(predictions) {
        var randomIndex = Math.floor(Math.random() * predictions.length);
        document.getElementById("predictionOutput").innerHTML = `"Her er din spådom: ${predictions[randomIndex].description}"`;
      }
      
      document.querySelector("#predictionBtn").addEventListener("click", function() {
        randomPrediction(predictions);
      });
      
      