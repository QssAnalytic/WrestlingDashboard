import ComparisonFilter from "./components/filter";
import { FormProvider, useForm } from "react-hook-form";

export default function Comparison() {
  const form = useForm();
  return (
    <FormProvider {...form}>
      <div className="comparison flex flex-col">
        <ComparisonFilter />
      </div>
    </FormProvider>
  );
}
