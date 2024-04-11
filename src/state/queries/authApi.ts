import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../../utils/supabase";
import { LoginInputs } from "../../interfaces/loginInputs";

// Define a service using a base URL and expected endpoints
export const supabaseApi = createApi({
  reducerPath: "supabaseApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async (user: LoginInputs) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: user.email,
          password: user.password,
        });

        if (error) {
          throw { error };
        }

        return { data };
      },
    }),
  }),
});

export const { useLoginMutation } = supabaseApi;
