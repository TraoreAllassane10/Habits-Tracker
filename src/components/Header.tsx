import { useState } from "react";

interface Habit {
  name: string;
  days: object;
}

const Header = () => {
  // State de controle du champs d'ajout de nouvelle habitude
  const [habit, setHabit] = useState("");

  // Fonction d'ajout d'habitude
  const handleHabits = () => {

    if (habit !== "") {

      // Verication si l'habitude existe déjà
      if(localStorage.getItem(habit))
      {
        console.log("Cette habitude existe déjà");
        return ;
      }

      let days =  {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false
      };

      localStorage.setItem(habit, JSON.stringify(days));

    }

    setHabit("");
  };

  return (
    <div className="flex place-items-center justify-between py-6">
      <h1 className="text-2xl text-white font-semibold">HABITS TRACKER</h1>
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="bg-[var(--app-red)] p-1 rounded-xl text-sm hover:bg-[var(--app-red)]/90 cursor-pointer transition"
      >
        Nouvelle habitude
      </button>

      {/* Modal d'ajout */}
      <dialog id="my_modal_1" className="modal absolute">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Nouvelle habitude</h3>

          <input
            value={habit}
            onChange={(e) => {
              setHabit(e.target.value);
            }}
            type="text"
            className="input input-secondary w-full my-4"
          />

          <div className="modal-action">
            <form method="dialog">
              <button onClick={handleHabits} className="btn btn-success mr-2">
                Enregister
              </button>
              <button className="btn btn-error">Fermer</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Header;
