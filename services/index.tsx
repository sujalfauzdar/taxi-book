import { gql, request } from "graphql-request"

export const getCarsList = async () => {
  const query = gql`query CarList{
  carLists{
    name
    carAvg
    price
    seat
    fuelType
    gearType
    createdAt
    id
    publishedAt
    updatedAt
    image{
      url
     }
    carType
    carBrand
  }
}`
  const result = await request('https://ap-south-1.cdn.hygraph.com/content/cm6joxa5g00hr07ut9yznkvw4/master', query);
  return result;
}


export const getStoreLocations = async () => {
  const query = gql`
    query StoreLocation{
     storesLocations{
    address
    createdAt
    id
    publishedAt
    updatedAt
   
  }
}`
  const result = await request('https://ap-south-1.cdn.hygraph.com/content/cm6joxa5g00hr07ut9yznkvw4/master', query);
  return result;
}


export const createBooking = async (formValue: any) => {
  const mutationQuery = gql`
    mutation Mymutation($data: DrivegoCreateInput!) {
      createDrivego(data: $data) {
        id
      }
    }
  `;

  const variables = {
    data: {
      userName: formValue.username,
      email: formValue.email,
      pickupDate: formValue.pickupDate,
      pickupTime: formValue.pickupTime,
      dropOffDate: formValue.dropOffDate,
      dropOffTime: formValue.dropOffTime,
      contactNumber: formValue.contactNumber,
      carList: {
        connect: {
          id: formValue.carId.connect.id
        }
      }
    }
  };

  try {
    const result = await request(
      'https://ap-south-1.cdn.hygraph.com/content/cm6joxa5g00hr07ut9yznkvw4/master',
      mutationQuery,
      variables
    );
    return result;
  } catch (error) {
    console.error("GraphQL Error:", error);
    return null;
  }
};
