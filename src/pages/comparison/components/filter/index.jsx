import { useFormContext } from "react-hook-form";
import Navigation from "../../../../components/filter/components/navigation";
import SelectCountry from "./components/select-country";
import SelectWrestler from "./components/select-wrestler";
import SelectYear from "./components/select-year";
import { Form, FormField } from "../../../../common/components/ui/form";
import useSWR from "swr";
import { filterEndpoints } from "../../../../services/api/endpoints";
import { getData } from "../../../../services/api/requests";

export default function ComparisonFilter() {
  const form = useFormContext();
  const onSubmit = (data) => console.log("comparison", data);

  const { data: countries } = useSWR(filterEndpoints.countries, getData);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comparison-filter">
        <div className="filter-inner flex gap-[1.38rem] items-center">
          <Navigation />
          <FormField
            control={form.control}
            name="country_first"
            render={({ field }) => <SelectCountry name="F1" id="country_first" data={countries} {...field} />}
          />
          <FormField
            control={form.control}
            name="opponent_first"
            render={({ field }) => <SelectWrestler name="Fighter 1" id="opponent_first" {...field} />}
          />
          <SelectYear name={"Years (F1)"} />
          <SelectCountry name="F2" id="country-second" />
          <SelectWrestler name="Fighter 2" />
          <SelectYear name={"Years (F2)"} />
        </div>
      </form>
    </Form>
  );
}
