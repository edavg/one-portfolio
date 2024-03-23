/* empty css                            */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, k as renderSlot, i as renderComponent } from '../astro_CoP-hCFW.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Image, p as projectData, $ as $$Layout } from './_proyecto__FXh2yMFc.mjs';
import 'clsx';

const $$Astro$4 = createAstro();
const $$BentoGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BentoGrid;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 container pt-12 pb-24", "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/a/ed-one-portfolio/src/components/BentoGrid.astro", void 0);

const $$Astro$3 = createAstro();
const $$BentoGridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BentoGridItem;
  const { id, icon, title, description, image, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/proyectos/${id}`, "href")}${addAttribute(`row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-slate-600/20 hover:bg-slate-500/20 dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4 cursor-pointer ${className}`, "class")}> <div${addAttribute(`view-transition-name: image-${id}`, "style")} class="w-full max-h-[130px]"> ${renderComponent($$result, "Image", $$Image, { "src": image, "width": 260, "height": 130, "alt": "", "loading": "eager", "class": "object-cover w-full h-full object-top" })} </div> <div${addAttribute(`view-transition-name: svg-${id}`, "style")} class="group-hover/bento:translate-x-2 transition duration-200"> ${renderComponent($$result, "Image", $$Image, { "src": icon, "width": 30, "height": 30, "alt": "", "loading": "eager" })} <div${addAttribute(`view-transition-name: title-${id}`, "style")} class="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2"> ${title} </div> <div${addAttribute(`view-transition-name: description-${id}`, "style")} class="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 line-clamp-1"> ${description} </div> </div> </a>`;
}, "D:/a/ed-one-portfolio/src/components/BentoGridItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$BentoGridDemo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BentoGridDemo;
  return renderTemplate`${renderComponent($$result, "BentoGrid", $$BentoGrid, {}, { "default": ($$result2) => renderTemplate`${projectData.map((value, index) => {
    return renderTemplate`${renderComponent($$result2, "BentoGridItem", $$BentoGridItem, { "key": index, "id": value.id, "title": value.title, "description": value.description, "image": value.image, "icon": value.svg1, "className": index === 0 || index === 3 ? "md:col-span-2" : "" })}`;
  })}` })}`;
}, "D:/a/ed-one-portfolio/src/components/BentoGridDemo.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto w-11/12"> <h3${addAttribute(`view-transition-name: title`, "style")} class="text-center text-3xl font-bold">
Proyectos
</h3> <div${addAttribute(`view-transition-name: form`, "style")}> ${renderComponent($$result2, "BentoGridDemo", $$BentoGridDemo, {})} </div> </section> ` })}`;
}, "D:/a/ed-one-portfolio/src/pages/proyectos/index.astro", void 0);

const $$file$1 = "D:/a/ed-one-portfolio/src/pages/proyectos/index.astro";
const $$url$1 = "/proyectos";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ed portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto"> <div${addAttribute(`view-transition-name: title`, "style")} class="flex lg:flex-row flex-col justify-between bg-gradient-to-r from-slate-100 via-40% via-yellow-100 to-yellow-50 bg-clip-text text-transparent"> <div class=""> <div class="relative"> <h1 class="text-3xl text-center lg:text-5xl font-extrabold text-yellow-50">
Eduardo Villamayor
</h1> <div class="absolute inset-x-8 top-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 blur-sm"></div> <div class="absolute inset-x-16 top-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"></div> <div class="absolute inset-x-36 top-full bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[6px] w-1/4 blur-sm"></div> <div class="absolute inset-x-36 top-full bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"></div> </div> <p class="text-xl mb-6">Web Developer</p> <div class="flex items-center gap-x-1 mb-2"> <a class="" href="https://www.linkedin.com/in/eduardo-villamayor-3088291a2" target="_blank">${renderComponent($$result2, "Image", $$Image, { "src": "/assets/linkedinsvg.svg", "alt": "linkedin", "width": 48, "height": 48, "loading": "eager" })}</a> <a class="" href="https://www.instagram.com/eduardo_villamayor/" target="_blank">${renderComponent($$result2, "Image", $$Image, { "src": "/assets/igsvg.svg", "alt": "instagram", "width": 48, "height": 48, "loading": "eager" })}</a> <a class="" href="https://github.com/edavg" target="_blank">${renderComponent($$result2, "Image", $$Image, { "src": "/assets/github.svg", "width": 48, "height": 48, "alt": "Github", "loading": "eager" })}</a> </div> <a href="/Ed-resume.pdf" download="/Ed-resume.pdf" class="flex items-center cursor-pointer hover:text-yellow-50 hover:fill-yellow-50 group">
Descargar CV
<span> <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path class="fill-white group-hover:fill-yellow-50" opacity="1" fill-rule="evenodd" clip-rule="evenodd" d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z"></path> <path class="fill-white group-hover:fill-yellow-50 group-hover:translate-y-1 transition-all" fill-rule="evenodd" clip-rule="evenodd" d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z"></path> </svg> </span> </a> </div> ${renderComponent($$result2, "Image", $$Image, { "src": "/assets/edphoto.webp", "width": 250, "height": 280, "alt": "Eduardo Villamayor", "class": "ed rounded-full max-lg:mx-auto aspect-[25/28]", "loading": "eager" })} </div> <section${addAttribute(`view-transition-name: form`, "style")} class="mb-32 mt-16 text-pretty bg-gradient-to-r from-slate-100 via-40% via-yellow-100 to-yellow-50 bg-clip-text text-transparent"> <h2 class="text-2xl font-bold mb-6">Sobre mí</h2> <p class="mb-2">
Me llamo Eduardo, soy estudiante de la carrera de Ciencias de la
        Informática, actualmente me dedico al desarrollo de páginas Webs con
        Frameworks de Javascript como:
<a href="https://nextjs.org/" target="_blank" class="bg-gradient-to-b from-gray-500 via-gray-300 to-gray-200 bg-clip-text text-transparent">Next</a> y <a href="https://astro.build/" target="_blank" class="text-orange-500">Astro</a>.
</p> <p class="mb-2">
También poseo conocimientos sólidos sobre backend con <a href="https://dotnet.microsoft.com/es-es/learn/aspnet/what-is-aspnet" target="_blank" class="text-violet-400">Asp.net</a> y <a href="https://nodejs.org/en" target="_blank" class="text-green-500">Nodejs</a>.
</p> <p class="mb-6">
Mis proyectos se enfocan principalmente en <span class="text-violet-500">C#</span> y <span class="text-blue-600">TypeScript</span> y estoy constantemente
        al día con las nuevas tecnologías del desarrollo.
</p> <div class="flex"> <a href="/proyectos" class="bg-slate-600 border-2 border-yellow-50 font-bold bg-opacity-20 transition-all hover:bg-slate-300 hover:text-slate-800 p-2 rounded-md">Ir a mis proyectos</a> </div> </section> </section> ` })}`;
}, "D:/a/ed-one-portfolio/src/pages/index.astro", void 0);

const $$file = "D:/a/ed-one-portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
