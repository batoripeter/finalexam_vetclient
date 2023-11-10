import { z } from "zod";
import http from "axios";

const clientResponseSchema = z.array(z.object ({
    name:z.string(),
    pets:z.array(z.object({}))
}))

export type ClientResponse = z.infer<typeof clientResponseSchema>;

export let clients:ClientResponse = []

const loadClients = async (inputText: string):Promise<ClientResponse | null> => {
    const response = await http.get("https://demoapi.com/api/vet/clients?search="+inputText);
    const data: ClientResponse = response.data;
    const result = clientResponseSchema.safeParse(data);
    if (!result.success) {
  console.log("error")
      return null
    }
    clients=data
    return clients
  };
  export default loadClients;