import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "../components/Header";
import Textfield from "../components/Textfield";
import Card from "../components/Card";
import Slider from "../components/Slider";

export default component$(() => {
  return (
    <>
      <Header />
      <div class="container mx-auto flex flex-wrap justify-center">
        <main class="flex h-auto w-full flex-wrap gap-3 rounded-md bg-white p-3 md:grid md:grid-cols-2">
          <div class="flex w-full flex-wrap md:grid">
            <fieldset class="grid w-full grid-cols-2 gap-3 rounded-md border border-gray-300 p-3">
              <legend>Dimensions</legend>
              <Textfield label="Width" />
              <Textfield label="Height" />
            </fieldset>
            <fieldset class="border-gray grid w-full grid-cols-4 gap-3 rounded-md border p-3">
              <legend>Colors</legend>
              <div class="col-span-2">
                <Textfield label="Text color" />
              </div>
              <div class="col-span-2">
                <Textfield label="Background color" />
              </div>
              <button
                type="button"
                class="col-span-2 col-start-2 bg-blue-400 text-white"
              >
                Randomize
              </button>
            </fieldset>
            <div class="w-full">
              <Textfield label="Caption" />
            </div>
            <div>
              <Textfield label="Font Family" />
            </div>
            <Slider label="Font Size" min={1} max={200} step={1} />
            <Slider label="Font Weight" />
          </div>
          <div class="flex w-full">
            <div class="absolute">
              <div>
                <label for="a">Format</label>
                <select name="" id="">
                  <option>svg</option>
                  <option>png</option>
                  <option>jpeg</option>
                  <option>webp</option>
                </select>
              </div>
              <div>img src="data:..."</div>
            </div>
            <div class="flex h-full w-full items-center justify-center rounded-md bg-slate-100 bg-[radial-gradient(#aaa_1px,transparent_1px)] p-3 [background-size:5px_5px]">
              <img
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20600%20400%22%20preserveAspectRatio%3D%22none%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%20%20%20%20%20%20%20%20%20%20%23holder%20text%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%20%23ffffff%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-family%3A%20sans-serif%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20400%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Cg%20id%3D%22holder%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23cccccc%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ctext%20text-anchor%3D%22middle%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20dy%3D%22.3em%22%3E600%20x%20400%3C%2Ftext%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fsvg%3E"
                alt="aa"
                class="block w-fit"
                width={600}
                height={400}
              />
            </div>
          </div>
        </main>
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
