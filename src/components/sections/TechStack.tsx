import {
  Box,
  Grid,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  SiChakraui,
  SiNextdotjs,
  SiFigma,
  SiAmazon,
  SiGooglecloud,
  SiTerraform,
  SiAnsible,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiKubernetes,
  SiDocker,
} from "react-icons/si";

// @ts-expect-error silly no reason
const MotionBox = motion(Box);

const techStack = [
  { name: "Chakra UI", icon: SiChakraui },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Figma", icon: SiFigma },
  { name: "AWS", icon: SiAmazon },
  { name: "Google Cloud", icon: SiGooglecloud },
  { name: "Terraform", icon: SiTerraform },
  { name: "Ansible", icon: SiAnsible },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Docker", icon: SiDocker },
];

const TechStackSection = () => {
  const { t } = useTranslation();

  // Adjust icon size based on screen size (smaller on mobile)
  const iconSize = useBreakpointValue({ base: "50px", md: "70px" });

  // Adjust the grid layout for mobile to show three items per row
  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(3, 1fr)", // 3 columns on small screens
    md: `repeat(${techStack.length}, 1fr)`, // full columns on medium screens and up
  });

  // Make gap responsive
  const gridGap = useBreakpointValue({
    base: 5, // No gap on mobile
    md: 20, // Larger gap on medium screens and up
  });

  return (
    <VStack spacing={10} pt={10} align="center" px={4}>
      <Heading as="h2" fontSize={18} color="primary.500" textAlign="center">
        {t("techStack.title")} {/* Use the service title for the heading */}
      </Heading>

      <Box overflow="hidden" width="100%">
        <Grid
          templateColumns={gridTemplateColumns}
          gap={gridGap} // Apply responsive gap
          alignItems="center"
          justifyContent="center"
        >
          {techStack.map((tech, index) => (
            <MotionBox
              key={index}
              gap={20}
              initial={{ opacity: 0, x: 50 }} // Start from the right
              animate={{ opacity: 1, x: 0 }} // Move to the center
              exit={{ opacity: 0, x: -50 }} // Move to the left
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: index * 0.25,
              }} // Adjust delay for staggering effect
            >
              <Box
                as={tech.icon}
                margin={"auto"}
                boxSize={iconSize}
                color="gray.600"
              />
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </VStack>
  );
};

export default TechStackSection;
