import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  useToast,
  Badge
} from '@chakra-ui/react';

const plans = [
  {
    name: 'Basic',
    price: '₹199/month',
    features: ['1 Device', 'SD Quality', 'Mobile Only'],
    recommended: false,
  },
  {
    name: 'Standard',
    price: '₹499/month',
    features: ['2 Devices', 'HD Quality', 'Mobile + TV'],
    recommended: true,
  },
  {
    name: 'Premium',
    price: '₹799/month',
    features: ['4 Devices', 'Ultra HD', 'All Screens'],
    recommended: false,
  }
];

const SubscriptionPage = () => {
  const toast = useToast();

  const handleSubscribe = (plan) => {
    toast({
      title: `Subscribed to ${plan} plan.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box bg="black" minH="100vh" color="white" display="flex" flexDirection="column" pt={10}>
      <Box py={12} textAlign="center">
        <Heading fontSize="4xl" mb={2}>Choose Your Plan</Heading>
        <Text fontSize="lg" color="gray.400">
          Stream your favorites anytime, anywhere.
        </Text>
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing={10} px={[6, 12, 24]} mb={20}>
        {plans.map((plan, index) => (
          <Box
            key={index}
            bgGradient={plan.recommended 
              ? "linear(to-b, #1f1f1f, #2e2e2e)" 
              : "linear(to-b, #111111, #1a1a1a)"
            }
            borderRadius="2xl"
            border={plan.recommended ? "2px solid #FF0102" : "1px solid #2b2b2b"}
            boxShadow="2xl"
            p={8}
            minH="420px"
            position="relative"
            transition="all 0.3s ease"
            _hover={{
              transform: 'scale(1.04)',
              boxShadow: 'dark-lg'
            }}
          >
            {plan.recommended && (
              <Badge
                position="absolute"
                top="-3"
                right="4"
                bg="#FF0102"
                color="white"
                px={3}
                py={1}
                borderRadius="md"
                fontSize="xs"
              >
                Most Popular
              </Badge>
            )}
            <Heading size="lg" mb={2}>{plan.name}</Heading>
            <Text fontSize="2xl" fontWeight="bold" mb={5} color="#FF0102">
              {plan.price}
            </Text>

            <VStack spacing={3} mb={8}>
              {plan.features.map((feature, i) => (
                <Text key={i} fontSize="sm" color="gray.300">
                  ✅ {feature}
                </Text>
              ))}
            </VStack>

            <Button
              bg="#FF0102"
              color="white"
              _hover={{ bg: '#cc0000' }}
              size="lg"
              width="100%"
              onClick={() => handleSubscribe(plan.name)}
              borderRadius="lg"
            >
              Subscribe Now
            </Button>
          </Box>
        ))}
      </SimpleGrid>


    </Box>
  );
};

export default SubscriptionPage;
