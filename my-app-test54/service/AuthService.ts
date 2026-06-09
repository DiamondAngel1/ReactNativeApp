import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import { BASE_URL } from "@/api";
// import {serialize} from "object-to-formdata";
import type ILoginModel from "../models/ILoginModel.ts";
import {serialize} from "object-to-formdata";
import {IRegisterModel} from "@/models/IRegisterModel";


export const authService = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/Account/`,
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['Auth'],
    endpoints: (build) => ({
        register: build.mutation<any, IRegisterModel>({
            query: (model) => {
                const formData = new FormData();

                formData.append("FirstName", model.firstName);
                formData.append("LastName", model.lastName);
                formData.append("Email", model.email);
                formData.append("Password", model.password);

                if (model.imageFile) {
                    formData.append("ImageFile", {
                        uri: model.imageFile.uri,
                        name: model.imageFile.name,
                        type: model.imageFile.type,
                    } as any);
                }

                return {
                    url: "register",
                    method: "POST",
                    body: formData,
                };
            },
        }),
        login: build.mutation<{token : string}, ILoginModel>({
            query: (model)=>{
                // const formData = serialize(model)
                return{
                    url: "Login",
                    method: "POST",
                    body: model,
                }
            }
        }),
    })
})

export const { useRegisterMutation, useLoginMutation, } = authService;