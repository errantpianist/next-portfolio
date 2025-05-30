import { FaChalkboardTeacher, FaMusic, FaReact } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import { SiTypescript } from "react-icons/si";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-12 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl  font-bold mb-6 text-center">About Me</h2>
      <Card className="max-w-3xl mx-auto p-6 flex flex-col md:flex-row items-center gap-6 border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/me.webp" alt="Yu Zhou" />
            <AvatarFallback>YZ</AvatarFallback>
          </Avatar>
        </div>

        <Separator orientation="vertical" className="hidden md:block h-24" />

        {/* Text area */}
        <CardContent className="p-0 space-y-4">
          <p className="text-muted-foreground text-xl">
            I'm Yu Zhou, a software engineer with a background in classical
            music and education. After years of teaching and performing, I
            transitioned into tech, drawn by the creative and logical challenges
            of building software. I now focus on crafting elegant, accessible
            web applications with React and TypeScript. I care about clean
            architecture, fast iteration, and thoughtful user experience.
          </p>
          <p className="text-muted-foreground text-xl ">
            Outside of code, I still perform music and enjoy deep dives
            into math, finance, and philosophy.
          </p>

          {/* Tech icons */}
          <div className="flex items-center gap-4 text-xl text-muted-foreground">
            <FaReact title="React" />
            <SiTypescript title="TypeScript" />
            <FaChalkboardTeacher title="Teaching" />
            <FaMusic title="Musician" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AboutMe;

