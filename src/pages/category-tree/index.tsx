import { Box, Container, Stack } from "@mui/material";
import { useContext, useState } from "react";
import { MessageContext } from "../../App";
// Define the type for a family member
interface FamilyMember {
  id: number;
  name: string;
  relationship: string;
  spouse?: FamilyMember | null; // Allow null for spouse
  children?: FamilyMember[]; // Children are optional
}

// List of three families using FamilyMember directly
const families: FamilyMember[] = [
  {
    id: 1,
    name: "John Smith",
    relationship: "Father",
    spouse: {
      id: 2,
      name: "Jane Smith",
      relationship: "Mother",
    },
    children: [
      {
        id: 3,
        name: "Emily Smith",
        relationship: "Daughter",
        spouse: {
          id: 4,
          name: "Michael Johnson",
          relationship: "Son-in-law",
        },
        children: [
          {
            id: 5,
            name: "Sophie Johnson",
            relationship: "Granddaughter",
          },
        ],
      },
      {
        id: 6,
        name: "David Smith",
        relationship: "Son",
        spouse: null, // Spouse is null
        children: [],
      },
    ],
  },
  {
    id: 7,
    name: "Robert Brown",
    relationship: "Father",
    spouse: {
      id: 8,
      name: "Laura Brown",
      relationship: "Mother",
    },
    children: [
      {
        id: 9,
        name: "Jacob Brown",
        relationship: "Son",
        spouse: null, // Spouse is null
        children: [],
      },
    ],
  },
  {
    id: 10,
    name: "Alice Green",
    relationship: "Mother",
    spouse: {
      id: 11,
      name: "Peter Green",
      relationship: "Father",
    },
    children: [
      {
        id: 12,
        name: "Ella Green",
        relationship: "Daughter",
        spouse: null, // Spouse is null
        children: [],
      },
    ],
  },
];

function CategoryTree() {
  const [openCates, setOpenCates] = useState<{ [key: number]: boolean }>({});
  const { message } = useContext(MessageContext);
  const handleToggle = (id: number) => {
    setOpenCates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  function handleChildren(families: FamilyMember[]) {
    return families.map((family, idx) => {
      const isOpen = openCates[family.id] || false;
      return ( <Box key={idx}>
          <Box
            sx={{ backgroundColor: "gray" }}
            onClick={() => handleToggle(family.id)}
            margin={"4px"}
          >
            {family.name}
          </Box>
          {isOpen && (
            <Box margin={"4px"}>
              {family.children && handleChildren(family.children)}
            </Box>
          )}
        </Box>
      );
    });
  }

  return (
    <Container maxWidth={"xl"} sx={{ display: "flex" }}>
      {message}
      <Stack
        spacing={2}
        padding={32}
        justifyContent={"center"}
        alignItems={"flex-start"}
        margin={"0 auto"}
      >
        {handleChildren(families)}
      </Stack>
    </Container>
  );
}

export default CategoryTree;
