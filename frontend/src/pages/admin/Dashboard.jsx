// src/pages/admin/Dashboard.jsx
import {
    Box,
    Flex,
    Heading,
    Text,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Icon,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { FaUser, FaFilm, FaTags, FaQuestionCircle } from "react-icons/fa";
  import { MdOutlineSubscriptions } from "react-icons/md";
  
  const Dashboard = () => {
    const bg = useColorModeValue("white", "gray.800");
  
    const stats = [
      { label: "Total Users", value: 1240, icon: FaUser },
      { label: "Total Movies", value: 180, icon: FaFilm },
      { label: "Genres", value: 12, icon: FaTags },
      { label: "FAQs", value: 15, icon: FaQuestionCircle },
      { label: "Active Subscriptions", value: 320, icon: MdOutlineSubscriptions },
    ];
  
    return (
      <Box p={6}>
        <Heading mb={6}>Welcome to Admin Dashboard</Heading>
        <Text fontSize="lg" mb={6} color="gray.500">
          Manage movies, banners, genres, languages, FAQs, and user subscriptions.
        </Text>
  
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {stats.map((stat, index) => (
            <StatCard key={index} label={stat.label} value={stat.value} icon={stat.icon} />
          ))}
        </SimpleGrid>
      </Box>
    );
  };
  
  const StatCard = ({ label, value, icon }) => {
    return (
      <Stat
        px={5}
        py={4}
        shadow="md"
        border="1px solid"
        borderColor="gray.200"
        rounded="lg"
        bg={useColorModeValue("gray.50", "gray.700")}
      >
        <Flex justify="space-between" align="center">
          <Box>
            <StatLabel fontWeight="medium">{label}</StatLabel>
            <StatNumber fontSize="2xl">{value}</StatNumber>
          </Box>
          <Icon as={icon} boxSize={8} color="teal.500" />
        </Flex>
      </Stat>
    );
  };
  
  export default Dashboard;
  