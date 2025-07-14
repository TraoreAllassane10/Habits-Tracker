import React from "react";

const Header = () => {
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
           <input type="text" className="input input-secondary w-full my-4" />

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-success mr-2">Enregister</button>
              <button className="btn btn-error">Fermer</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Header;
