import React from "react";

export const EasyTaskQuestion = () => {
  return (
    <form>
      <article>
        <header>
          Vous devez exécuter une tâche simple et répétitive pendant une heure.
          Cette tâche ne vous apporte rien de spécial à aucun niveau mais elle
          doit être faite absolument pendant une heure entière. <br />
          Combien seriez-vous prêt à dépenser au maximum pour que je fasse cette
          tâche pour vous pendant 60 minutes?
        </header>
        <div>
          <input type={"number"} placeholder={"$"} required={true} />
          <button type={"submit"}>Next</button>
        </div>
      </article>
    </form>
  );
};
