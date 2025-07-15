"use client";
import { useState } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MultiStepFormWrapper,
  Step,
  useMultiStepForm,
} from "@/components/multi-step-form-wrapper";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 1. Personal Info Schema
const personalInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(10, "Phone number is required to be valid with at least 10 digits")
    .max(13, "Phone number is invalid"),
  email: z.email("Invalid email"),
});

// 2. Reservation Schema
const reservationSchema = z.object({
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  guests: z.string().min(1, "Guests are required"),
});

// 3. Notes (optional)
const notesSchema = z.object({
  notes: z.string().optional(),
});

// Full Schema
const formSchema = personalInfoSchema
  .merge(reservationSchema)
  .merge(notesSchema);

type FormValues = z.infer<typeof formSchema>;

export function ReservationMultiStepForm() {
  const [, setResult] = useState<FormValues | null>(null);

  const handleComplete = (
    data: FormValues,
    { reset }: { reset: () => void }
  ) => {
    setResult(data);
    toast.success("Reservation submitted!");
    reset(); // ✅ this now works!
  };

  return (
    <MultiStepFormWrapper
      onComplete={handleComplete}
      completeButtonText="Confirm Reservation"
      schema={formSchema}
      initialData={{
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        notes: "",
      }}
      className="w-full max-w-2xl mx-auto border rounded-lg bg-card p-6 h-fit"
    >
      <Step
        title="Personal Info"
        description="We'll use this info to contact you about your reservation."
        schema={personalInfoSchema}
      >
        <PersonalInfoStep />
      </Step>
      <Step
        title="Reservation"
        description="Choose your preferred date, time, and number of guests."
        schema={reservationSchema}
      >
        <ReservationStep />
      </Step>
      <Step
        title="Special Requests"
        description="Let us know of any dietary restrictions or special occasions."
        schema={notesSchema}
      >
        <NotesStep />
      </Step>
    </MultiStepFormWrapper>
  );
}

function PersonalInfoStep() {
  const { form } = useMultiStepForm();

  return (
    <Form {...form}>
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="John Doe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} type="tel" placeholder="+254 700 000000" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="mt-4">
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input {...field} type="email" placeholder="email@example.com" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}

function ReservationStep() {
  const { form } = useMultiStepForm();

  return (
    <Form {...form}>
      <div className="grid md:grid-cols-3 gap-4">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "bg-card text-card-foreground hover:bg-card/30 hover:text-card-foreground w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP")
                      ) : (
                        <span>Select date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => field.onChange(date?.toISOString())}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time</FormLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[
                    "17:00",
                    "17:30",
                    "18:00",
                    "18:30",
                    "19:00",
                    "19:30",
                    "20:00",
                    "20:30",
                    "21:00",
                  ].map((time) => (
                    <SelectItem key={time} value={time}>
                      {time.slice(0, 2)}:{time.slice(3)}{" "}
                      {parseInt(time) < 12 ? "AM" : "PM"}
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
          name="guests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Guests</FormLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Number of guests" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Form>
  );
}

function NotesStep() {
  const { form } = useMultiStepForm();
  const values = form.watch();

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="notes"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="mb-2">Special Requests(optional)</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Any dietary restrictions, special occasions, or other requests..."
                className="w-full p-2 border rounded min-h-[100px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {values && Object.values(values).every((v) => v === "") ? (
        <Card className="mt-6 py-4 border-dashed border-muted">
          <CardHeader>
            <CardTitle className="text-base text-center">
              🎉 Reservation Complete
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground text-center">
            <p>Your reservation has been submitted successfully.</p>
            <p>We&apos;ll be in touch shortly. Thank you!</p>
          </CardContent>
        </Card>
      ) : (
        <Card className="mt-6 py-4">
          <CardHeader>
            <CardTitle className="text-base">Reservation Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">Name:</span>{" "}
              {values.name}
            </p>
            <p>
              <span className="font-medium text-foreground">Phone:</span>{" "}
              {values.phone}
            </p>
            <p>
              <span className="font-medium text-foreground">Email:</span>{" "}
              {values.email}
            </p>
            <p>
              <span className="font-medium text-foreground">Date:</span>{" "}
              {values.date ? format(new Date(values.date), "PPP") : "-"}
            </p>
            <p>
              <span className="font-medium text-foreground">Time:</span>{" "}
              {values.time}
            </p>
            <p>
              <span className="font-medium text-foreground">Guests:</span>{" "}
              {values.guests}
            </p>
            {values.notes && (
              <p>
                <span className="font-medium text-foreground">
                  Special Requests:
                </span>{" "}
                {values.notes}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </Form>
  );
}
