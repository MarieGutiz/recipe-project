import { Box } from "@chakra-ui/react";

const RippleAnimation = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="8em"
      height="8em"
      position="relative"
    >
      <Box
        width="100%"
        height="100%"
        backgroundColor="whiteAlpha.600"
        position="absolute"
        borderRadius="50%"
        animation="ripple-animation 5.5s infinite ease-out"
      />

      <Box
        width="100%"
        height="100%"
        backgroundColor="whiteAlpha.600"
        position="absolute"
        borderRadius="50%"
        animation="ripple-animation 5.5s infinite ease-out"
        transitionDelay="2s"
      />

      <Box
        width="100%"
        height="100%"
        backgroundColor="whiteAlpha.600"
        position="absolute"
        borderRadius="50%"
        animation="ripple-animation 5.5s infinite ease-out"
        transitionDelay="4s"
      />

      <Box
        as="style"
        pos="absolute"
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes ripple-animation {
              0% {
                transform: scale(0.1);
                opacity: 1;
              }
              100% {
                transform: scale(1);
                opacity: 0;
              }
            }
          `,
        }}
      />
    </Box>
  );
};

export default RippleAnimation;
