import About from "@/ui/about/about";
import Landing from "@/ui/landing/landing";
import Navigation from "@/ui/navigation/navigation";
import Projects from "@/ui/projects/projects";

export default function Home() {
    return (
        <>
            <Navigation />
            <main>
                <Landing />
                <About />
                <Projects />
            </main>
        </>
    );
}
