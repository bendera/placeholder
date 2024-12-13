import { component$, useId } from "@builder.io/qwik";

interface SliderProps {
  label: string;
  min: number;
  max: number;
  step?: number;
}

export default component$<SliderProps>((props) => {
  const id = useId();
  const { label, min, max, step } = props;

  return (
    <div class="w-full">
      <label for={id}>{label}</label>
      <input type="range" id={id} min={min} max={max} step={step} />
      <input type="number"  min={min} max={max} step={step} class="border" />
    </div>
  );
});
