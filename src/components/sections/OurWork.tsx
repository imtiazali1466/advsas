import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Heading, Text, Grid, Image, Tag, VStack } from "@chakra-ui/react";

const OurWorkSection: React.FC = () => {
  const { t } = useTranslation(); // Use the translation function

  // Sample project data (this could come from props or state)
  const projects = [
    {
      title: t("ourWork.project_1.title"),
      description: t("ourWork.project_1.description"),
      tags: [
        t("ourWork.tags.webDevelopment"),
        t("ourWork.tags.uiUxDesign"),
        t("ourWork.tags.brandGuidelines"),
      ],
      image: "/our_work/awrag.png",
    },
    {
      title: t("ourWork.project_2.title"),
      description: t("ourWork.project_2.description"),
      tags: [
        t("ourWork.tags.webDevelopment"),
        t("ourWork.tags.uiUxDesign"),
        t("ourWork.tags.brandGuidelines"),
      ],
      image: "/our_work/token_sage.png",
    },
    // Add more projects as needed
  ];

  return (
    <Box p={8}>
      <Heading as="h2" mb={6} fontSize={18} color={"accent.400"}>
        {t("ourWork.title")} {/* Translated title "Our Work" */}
      </Heading>

      <Grid gridTemplateColumns={{ base: "1fr", md: "8fr 4fr" }} mb={6}>
        <Heading
          as="h3"
          size="lg"
          bgGradient="linear(to-r, #293056, #667085)"
          bgClip="text"
          fontSize="5xl"
          maxWidth={"4xl"}
        >
          {t("ourWork.mainTitle")}
        </Heading>
        <Text fontSize="lg" color={"gray.500"} textAlign={"justify"}>
          {t("ourWork.subtitle")}
        </Text>
      </Grid>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        {projects.map((project, index) => (
          <Box
            key={index}
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.02)" }}
          >
            <Box
              textAlign="center"
              borderRadius="lg"
              borderWidth="1px"
              padding={"10px"}
              borderColor="black.900"
            >
              <Image
                cursor={"pointer"}
                src={project.image}
                alt={project.title}
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <VStack align="start" py={4} spacing={2}>
              <Box>
                {project.tags.map((tag, tagIndex) => (
                  <Tag
                    key={tagIndex}
                    cursor={"pointer"}
                    mr={2}
                    my={2}
                    background={"transparent"}
                    color={"secondary.800"}
                    px={3}
                    py={1}
                    borderWidth="1px"
                    borderColor="lavender.400"
                    borderRadius="lg"
                    transition="background-color 0.2s"
                    _hover={{ backgroundColor: "gray.100" }} // Subtle background change on hover
                  >
                    {tag}
                  </Tag>
                ))}
              </Box>
              <Heading as="h5" size="lg" lineHeight={4}>
                {project.title}
              </Heading>
              <Text fontSize={16} color={"gray.600"}>
                {project.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default OurWorkSection;
