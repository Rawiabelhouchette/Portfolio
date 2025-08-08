import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Java & Spring Boot Enthusiast",
          "Frontend lover: Angular & React Native",
          "Passionate about AI & Smart Systems",
          "Future software engineer with impact",
          "Aspiring to build tech that changes lives"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;