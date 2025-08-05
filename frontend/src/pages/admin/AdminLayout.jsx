// src/components/admin/AdminLayout.jsx
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/admin/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box flex="1" p={6} bg="gray.50">
        {children}
      </Box>
    </Flex>
  );
};

export default AdminLayout;
