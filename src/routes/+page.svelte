<script>
  let title = "TensorMVJCE";
    import { onMount } from "svelte";

  let displayText = ""; // Text that updates with the typing effect
  let fullText = "Welcome to AI/ML Club of MVJCE"; // Full text to display
  let typingSpeed = 100; // Typing speed in milliseconds

  onMount(() => {
    let i = 0;
    const type = () => {
      if (i < fullText.length) {
        displayText += fullText[i];
        i++;
        setTimeout(type, typingSpeed);
      }
    };
    type();
  });
</script>

<header class="bg-slate-900 text-white p-4 shadow-md opacity-90 rounded-full w-full mx-auto mt-4">
  <div class="container flex justify-between items-center px-4">
    <h1 class="text-indigo-500 font-bold text-2xl">{title}</h1>
    <nav>
    
      <ul class="flex space-x-5">
        <li>
               <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
<span class="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">Home</span>
</button>
        </li>
        <li>
               <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
<span class="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">Events</span>
</button>
        </li>
       <li>
       <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
<span class="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">Team</span>
</button>
       </li>
      </ul>
    </nav>
  </div>
</header>

<section class="flex justify-center h-screen">
  <div class="text-center">
    <h1 class="text-6xl font-bold text-indigo-500 pt-40">
      {displayText}<span class="text-white animate-blink">_</span>
    </h1>
    <p class="mt-4"></p>
  </div>
  <div class="text-center">
    
  </div>
</section>

<style>
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  .animate-blink {
    animation: blink 1s;
  }
</style>

