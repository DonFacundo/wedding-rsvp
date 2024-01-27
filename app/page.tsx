import Image from "next/image";

export default function Home() {
  return (
    <main className="justify-between font-playfair">
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

      <div className="w-full min-h-96 py-16 bg-secondary flex flex-col items-center text-secondary px-12">
        <article className="prose text-center text-md md:text-xl">
          <p className="text-primary font-poiretone">
            To our Beloved Family and Friends,
          </p>
          <p className="text-primary font-poiretone">This is it!</p>
          <p className="text-primary font-poiretone">
            We are absolutely delighted to share with you this special chapter
            in our lives.
          </p>
          <p className="text-primary font-poiretone">
            Your presence in the celebration of our love means the world to us
            and we can’t wait for you to share in the joy and excitement of this
            magical day.
          </p>
          <p className="text-primary font-poiretone">
            Please feel free to explore the various sections of this website,
            and most importantly, save the date as we count down to the moment
            we say “I do”.
          </p>
          <p className="text-primary font-poiretone">
            Thank you for being part of our love story. We can’t wait to create
            more wonderful memories with you.
          </p>
          <p className="text-primary font-poiretone">With love,</p>
          <p className="text-primary font-poiretone">Gerald and Claire</p>

          {/* <p className="text-white font-poiretone">
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
          </p> */}
        </article>
      </div>
    </main>
  );
}
