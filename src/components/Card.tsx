import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <main class="bg-white p-5 shadow-md rounded-md">
      <Slot />
    </main>
  );
});
