import Image from "next/image";

export default function Home() {
  return (
    <main className="justify-between font-playfair">
      {/* <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="text-center w-full bg-[url('/assets/img/flower-border3.png')] bg-center bg-cover bg-no-repeat py-28">
        <h1 className="text-3xl md:text-5xl text-white font-light mb-2 font-poiretone">
          GERALD DWYNE M. DE LEON
        </h1>
        <h1 className="text-xl text-white font-light mb-2">&</h1>
        <h1 className="text-3xl md:text-5xl text-white font-light mb-10 font-poiretone">
          ARVELYN CLAIRE T. TAMSE
        </h1>
        <Image
          className="mx-auto mb-10"
          src={"/assets/img/flower-divider.png"}
          alt="flower divider"
          width={150}
          height={50}
        />
        <p className="text-lg md:text-xl text-white font-light mb-5">
          <em>Requests the honour of your presence on</em>
        </p>
        <h1 className="text-xl md:text-3xl text-white font-poiretone">
          MAY 9, 2024
        </h1>
      </div>

      <div className="w-full min-h-96 py-16 bg-secondary flex flex-col items-center text-white px-4">
        <article className="prose text-center text-xl">
          <p className="text-white font-poiretone">
            Zombies reversus ab inferno, nam malum cerebro. De carne animata
            corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi
            undead dictum mauris. Hi mortuis soulless creaturas, imo monstra
            adventus vultus comedat cerebella viventium. Qui offenderit rapto,
            terribilem incessu. The voodoo sacerdos suscitat mortuos comedere
            carnem. Search for solum oculi eorum defunctis cerebro. Nescio an
            Undead zombies. Sicut malus movie horror.
          </p>
          <p className="text-white font-poiretone">
            Cum horribilem resurgere de sepulcris creaturis, sicut de iride et
            serpens. Pestilentia, ipsa screams. Pestilentia est haec ambulabat
            mortuos. Sicut malus voodoo. Aenean a dolor vulnerum aperire
            accedunt, mortui iam vivam. Qui tardius moveri, sed in magna copia
            sint terribiles legionis. Alii missing oculis aliorum sicut serpere
            crabs nostram. Putridi odores aere implent.
          </p>
          <p className="text-white">
            <em>Sexbam Roch3lle & Jopay get GET Awwww!</em>
          </p>
        </article>
      </div>
    </main>
  );
}
