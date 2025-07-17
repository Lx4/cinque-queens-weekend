import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Props optional: allow caller to override asset paths & pdf URL
interface CinqueQueensPageProps {
    coverSrc?: string;          // header illustration (Cinque Terre BW)
    groupSrc?: string;          // group photo BW
    pdfHref?: string;           // link to downloadable PDF
}

export default function CinqueQueensPage({
    coverSrc = "/cinque_terre_bw.jpg",
    groupSrc = "/group_photo_bw.jpg",
    pdfHref = "/Cinque_Queens_Weekend_Full_Mims.pdf",
}: CinqueQueensPageProps) {
    return (
        <div className="min-h-screen bg-white text-black flex flex-col items-center w-full">
            {/* Hero header with provided illustration */}
            <header className="w-full relative h-64 sm:h-96 overflow-hidden rounded-b-3xl shadow-md">
                <img
                    src={coverSrc}
                    alt="Vue des Cinque Terre"
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md">
                        Cinque Queens
                    </h1>
                    <p className="mt-2 text-lg sm:text-xl text-white/90">
                        Une vague de love et de soleil · 18–20 juillet 2025
                    </p>
                </div>
            </header>

            <main className="w-full max-w-3xl mx-auto px-4 py-10 space-y-12">
                {/* Introduction */}
                <section className="text-center space-y-4">
                    <p className="text-lg leading-relaxed text-gray-800 max-w-2xl mx-auto">
                        Du 18 au 20 juillet 2025, <strong>Banana</strong>, <strong>Mimo</strong>, <strong>Mamathildon</strong>, <strong>Mel Tisinoi</strong> et <strong>Rhalice</strong> se retrouvent ENFIN pour un week-end de rêve aux Cinque Terre. Belles balades, baignades, spritz bien frais, resto quali et soirées à rigoler fort... tout est réuni pour se créer des souvenirs trop mims entre copines qu'on ne voit pas assez souvent.
                    </p>
                    <p className="text-xl font-semibold text-black italic">
                        Let's go les queens. 👑
                    </p>
                </section>

                {/* Programme Card */}
                <Card className="w-full border-black/10 shadow-sm">
                    <CardContent className="p-6 space-y-8">
                        <section className="text-center">
                            <h2 className="text-2xl font-semibold mb-2">Le Programme</h2>
                            <p className="text-sm text-gray-600">
                                Weekend entre queens aux Cinque Terre – balades, baignades & spritz.
                            </p>
                        </section>

                        <section className="space-y-4 text-left">
                            <DayBlock
                                icon="🌿"
                                title="Jour 1 – Corniglia → Vernazza"
                                items={[
                                    "Train La Spezia → Corniglia + balade dans le village",
                                    "Rando facile avec vue mer (1h30) vers Vernazza",
                                    "Déjeuner : Ristorante Belforte ou Il Pirata",
                                    "Baignade + chill à Vernazza",
                                    "Soirée : Distro, Akua da Oscar ou Shake Club",
                                ]}
                            />

                            <DayBlock
                                icon="🌞"
                                title="Jour 2 – Riomaggiore → Manarola"
                                items={[
                                    "Train vers Riomaggiore + balade (Via dell'Amore si ouverte)",
                                    "Déjeuner : Nessun Dorma (app) ou Trattoria dal Billy",
                                    "Baignade rochers + farniente + coucher de soleil",
                                    "Retour ou dîner/soirée à La Spezia",
                                ]}
                            />

                            <DayBlock
                                icon="🏞"
                                title="Jour 3 – Levanto + village préféré"
                                items={[
                                    "Train La Spezia → Levanto + balade / sentier Bonassola",
                                    "Déjeuner : Osteria Tumelin ou La Picea",
                                    "Retour dans le village préféré (Manarola ? Vernazza ?) pour dernier plongeon",
                                    "Dernière soirée à La Spezia",
                                ]}
                            />
                        </section>

                        <hr className="border-t border-black/10" />

                        <section className="space-y-2 text-left">
                            <h3 className="text-xl font-semibold">🎟 Pass Cinque Terre Treno MS – 3 jours</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Dates : 18 au 20 juillet 2025 (période haute)</li>
                                <li>Prix : 78,50 € / personne</li>
                                <li>Accès illimité trains + sentiers payants + toilettes gratuites</li>
                                <li>Total pour 5 copines : 392,50 €</li>
                            </ul>
                        </section>

                    </CardContent>
                </Card>

                {/* Group Photo Highlight */}
                <section className="w-full flex flex-col items-center text-center space-y-4">
                    <h2 className="text-2xl font-semibold">Les Queens 👑</h2>
                    <div className="w-full max-w-2xl rounded-3xl overflow-hidden border border-black/10 shadow-lg">
                        <img
                            src={groupSrc}
                            alt="Photo de groupe des Cinque Queens"
                            className="w-full h-auto object-cover grayscale"
                        />
                    </div>
                    <p className="text-sm italic">Des queens prêtes pour un week-end inoubliable 👑</p>
                </section>
            </main>

            <footer className="w-full py-8 text-center text-xs text-gray-600">
                Cinque Queens · Juillet 2025 · Love & Soleil
            </footer>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/* Subcomponent: DayBlock                                             */
/* ------------------------------------------------------------------ */
interface DayBlockProps {
    icon?: string;
    title: string;
    items: string[];
}

function DayBlock({ icon, title, items }: DayBlockProps) {
    return (
        <div className="space-y-2">
            <h3 className="font-semibold text-lg">
                {icon ? `${icon} ` : ""}{title}
            </h3>
            <ul className="list-disc list-inside space-y-1">
                {items.map((txt) => (
                    <li key={txt}>{txt}</li>
                ))}
            </ul>
        </div>
    );
}
