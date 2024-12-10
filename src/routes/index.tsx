import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "../components/Header";
import Textfield from "../components/Textfield";
import App from "../components/App";

export default component$(() => {
  return (
    <>
      <Header />
      <div class="container flex justify-center">
        <App>
          <div class="flex w-full max-w-xl justify-center px-5">
            <Textfield label="Width" />
          </div>
        </App>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Placeholder Image Generator",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
