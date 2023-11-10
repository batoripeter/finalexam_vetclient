import { z } from "zod";
import http from "axios";

const clientResponseSchema = z.array(z.object ({
    name:z.string(),
    pets:z.array(z.object({
        name:z.string(),
        animal:z.string(),
        isVaccinated:z.boolean()
    }))
}))

export type ClientResponse = z.infer<typeof clientResponseSchema>;
export let isLoading = false
export let clients:ClientResponse = []

const loadClients = async (inputText: string):Promise<ClientResponse | null> => {
    isLoading=true
    const response = await http.get("https://demoapi.com/api/vet/clients?search="+inputText);
    const data: ClientResponse = response.data;
    const result = clientResponseSchema.safeParse(data);
    if (!result.success) {
  console.log("error")
  isLoading=false
      return null
    }
    clients=data
    isLoading=false
    return clients
  };
  export default loadClients;