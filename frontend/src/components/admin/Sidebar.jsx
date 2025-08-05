import { VStack, Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Manage Movies", path: "/admin/movies" },
    { name: "Manage Banners", path: "/admin/banners" },
    { name: "Manage Genres", path: "/admin/genres" },
    { name: "Manage Languages", path: "/admin/languages" },
    { name: "Trending Section", path: "/admin/trending" },
    { name: "FAQs", path: "/admin/faqs" },
    { name: "Users", path: "/admin/users" },
  ];

  return (
    <Box w="250px" bg="white" p="4" shadow="md">
      <Text fontSize="xl" mb="6" fontWeight="bold">Admin Panel</Text>
      <VStack align="start" spacing="4">
        {navItems.map((item) => (
          <ChakraLink
            as={NavLink}
            to={item.path}
            key={item.name}
            _hover={{ textDecoration: "none", color: "teal.500" }}
            _activeLink={{ fontWeight: "bold", color: "teal.600" }}
          >
            {item.name}
          </ChakraLink>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;