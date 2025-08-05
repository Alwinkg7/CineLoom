import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Badge,
    Box,
  } from "@chakra-ui/react";
  
  const UserTable = ({ users }) => {
    return (
      <Box p={4} overflowX="auto">
        <Table variant="simple" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Email</Th>
              <Th>Subscription</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, idx) => (
              <Tr key={idx}>
                <Td>{user.email}</Td>
                <Td>{user.subscriptionType}</Td>
                <Td>
                  <Badge colorScheme={user.active ? "green" : "red"}>
                    {user.active ? "Active" : "Inactive"}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  };
  
  export default UserTable;
  