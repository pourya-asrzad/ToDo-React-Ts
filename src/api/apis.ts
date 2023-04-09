export const API_LINK:any = "https://6347eca8db76843976b5e973.mockapi.io/todos";
//You can use it 👆 for fetching data 
export const LIMIT_LINK:any = new URL("https://6347eca8db76843976b5e973.mockapi.io/todos");
LIMIT_LINK.searchParams.append('limit', 10);
LIMIT_LINK.searchParams.append('page', 1)

