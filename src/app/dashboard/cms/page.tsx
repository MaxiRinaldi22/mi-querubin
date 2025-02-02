"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { categories } from "@/lib/const";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  price: z.number().min(0, {
    message: "Price must be a positive number.",
  }),
  category: z.string().min(1, {
    message: "Please select a category.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  stock: z.number().int().min(0, {
    message: "Stock must be a positive integer.",
  }),
  mainImage: z.instanceof(File).refine((file) => file.size > 0, {
    message: "Main image is required.",
  }),
  optionalImage1: z.instanceof(File).optional(),
  optionalImage2: z.instanceof(File).optional(),
});

export default function CMSPage() {
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [optionalImage1Preview, setOptionalImage1Preview] = useState<
    string | null
  >(null);
  const [optionalImage2Preview, setOptionalImage2Preview] = useState<
    string | null
  >(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      category: "",
      description: "",
      stock: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
     console.log(values);
    // Here you would typically send the data to your backend
    // Esto tiene que ser un asyn await 
    // Primero enviando al sroage la imagen
    // Luego recuperando el link de la imagen
    // Luego enviar a la base de datos de productos
    const name = form.getValues("name");
    console.log(name);
    
  }

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setPreview: (preview: string | null) => void,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto h-full py-14 md:w-screen">
      <h1 className="mb-5 text-2xl font-bold">Add New Product</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter product name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0.00"
                        {...field}
                        onChange={(e) =>
                          field.onChange(Number.parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        {...field}
                        onChange={(e) =>
                          field.onChange(Number.parseInt(e.target.value, 10))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter product description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mainImage"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...field } }) => ( 
                  <FormItem>
                    <FormLabel>Main Image (Required)</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-4">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            onChange(e.target.files?.[0]);
                            handleImageChange(e, setMainImagePreview);
                          }}
                          {...field}
                        />
                        {mainImagePreview && (
                          <img
                            src={mainImagePreview || "/placeholder.svg"}
                            alt="Main preview"
                            className="h-16 w-16 rounded object-cover"
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="optionalImage1"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Optional Image 1</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-4">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            onChange(e.target.files?.[0]);
                            handleImageChange(e, setOptionalImage1Preview);
                          }}
                          {...field}
                        />
                        {optionalImage1Preview && (
                          <img
                            src={optionalImage1Preview || "/placeholder.svg"}
                            alt="Optional 1 preview"
                            className="h-16 w-16 rounded object-cover"
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="optionalImage2"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Optional Image 2</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-4">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            onChange(e.target.files?.[0]);
                            handleImageChange(e, setOptionalImage2Preview);
                          }}
                          {...field}
                        />
                        {optionalImage2Preview && (
                          <img
                            src={optionalImage2Preview || "/placeholder.svg"}
                            alt="Optional 2 preview"
                            className="h-16 w-16 rounded object-cover"
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit" className="w-full md:w-auto">
            <Upload className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </form>
      </Form>
    </div>
  );
}
