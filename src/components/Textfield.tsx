import { component$, useId } from "@builder.io/qwik";

interface TextfieldProps {
  label: string;
  onInput?: (event: InputEvent) => void;
}

export default component$<TextfieldProps>((props) => {
  const { label } = props;
  const id = useId();

  return (
    <div class="w-full">
      <label for={id} class="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        type="text"
        id={id}
        class="block w-full rounded-md border border-slate-300 px-2 py-1"
        onInput$={props.onInput}
      />
    </div>
  );
});
