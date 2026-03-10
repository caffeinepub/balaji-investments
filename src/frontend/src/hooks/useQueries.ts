import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { InvestmentService, Testimonial } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllInvestmentServices() {
  const { actor, isFetching } = useActor();
  return useQuery<InvestmentService[]>({
    queryKey: ["investmentServices"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllInvestmentServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      serviceInterest,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      serviceInterest: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitInquiry(name, email, phone, serviceInterest, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
