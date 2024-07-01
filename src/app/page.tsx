import About from "@/ui/about/about";
import Landing from "@/ui/landing/landing";
import Navigation from "@/ui/navigation/navigation";

export default function Home() {
    return (
        <>
            <Navigation />
            <main>
                <Landing />
                <About />
            </main>
        </>
    );
}
