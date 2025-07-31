import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software engineer",
          "Full Stack javascript engineer",
          "python developer",
          "A dreamer to become one of the brightest engineer in the world!",
          "And Why not making a radical contribution to wrold technologies"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;