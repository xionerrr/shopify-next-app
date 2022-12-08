export const allProducts = `
{
    products(first: 10) {
      edges {
        node {
          id,
          title,
          description,
          createdAt,
          updatedAt
        }
      }
    }
  }
  
`
