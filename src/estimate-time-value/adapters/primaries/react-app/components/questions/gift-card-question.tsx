import React from "react";

export const GiftCardQuestion = () => {
  return (
    <form>
      <article>
        <header>
          Imaginez que je vous propose de passer une heure au télé-phone, sans
          rien faire d'autre quattendre votre tour, pour gagner une carte cadeau
          que vous pourrez dépenser n'importe où. <br />
          Combien devrait coûter au minimum cette carte cadeau pour que vous
          patientiez sagement au téléphone durant 60 minutes ?
        </header>
        <div>
          <input type={"number"} placeholder={"$"} required={true} />
          <button type={"submit"}>Next</button>
        </div>
      </article>
    </form>
  );
};
