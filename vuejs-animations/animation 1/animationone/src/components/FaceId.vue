<template>
  <div>
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <g class="image">
        <rect fill="#dbdbdb" height="464" rx="48" width="272" x="120" y="24" />
        <rect fill="#2dc2b4" height="432" rx="48" width="272" x="120" y="24" />
        <path d="m360 264h-208v-56a104 104 0 0 1 104-104 104 104 0 0 1 104 104z" fill="#8e7760" />
        <path d="m184 296h-16a24 24 0 0 1 -24-24 24 24 0 0 1 24-24h8z" fill="#efd6ae" />
        <path d="m344 296h-16l8-48h8a24 24 0 0 1 24 24 24 24 0 0 1 -24 24z" fill="#efd6ae" />
        <g fill="#2ed6d1">
          <path d="m160 128h-16v-24a8 8 0 0 1 8-8h24v16h-16z" />
          <path d="m368 128h-16v-16h-16v-16h24a8 8 0 0 1 8 8z" />
          <path d="m176 408h-24a8 8 0 0 1 -8-8v-24h16v16h16z" />
          <path d="m360 408h-24v-16h16v-16h16v24a8 8 0 0 1 -8 8z" />
        </g>
        <path
          d="m294.018 370.879a78.285 78.285 0 0 1 -76.036 0 78.286 78.286 0 0 1 -39.48-57.362 249.008 249.008 0 0 1 -2.5-35.212v-33.035a91.336 91.336 0 0 1 17.013-53.088l22.985-32.182a95.494 95.494 0 0 0 77.481 52.457l42.519 3.543v62.305a249.008 249.008 0 0 1 -2.5 35.212 78.286 78.286 0 0 1 -39.482 57.362z"
          fill="#efd6ae"
        />
        <circle cx="216" cy="256" fill="#9b8268" r="16" />
        <circle cx="296.003" cy="256" fill="#9b8268" r="16" />
        <path
          d="m255.992 312a8.01 8.01 0 0 1 -3.57-.844l-16-8a8 8 0 0 1 -3.578-10.734l16-32a8 8 0 0 1 14.312 7.156l-12.422 24.844 8.844 4.422a8 8 0 0 1 -3.586 15.156z"
          fill="#9b8268"
        />
        <path
          d="m256 343.289a51.2 51.2 0 0 1 -28.438-8.633 8 8 0 1 1 8.876-13.312 35.174 35.174 0 0 0 39.124 0 8 8 0 0 1 8.876 13.312 51.2 51.2 0 0 1 -28.438 8.633z"
          fill="#9b8268"
        />
        <rect fill="#2ab3a6" height="32" rx="16" width="128" x="192" y="24" />
        <path class="scan" d="m120 304h272v16h-272z" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.scan {
  fill: none;
}

@keyframes scanning {
  0%,
  100% {
    fill: #ff496c;
    opacity: 0.6;
    transform: translate(0px, 90px);
  }
  50% {
    fill: #ff496c;
    opacity: 0.6;
    transform: translate(0px, -210px);
  }
}

.image .scan {
  animation: scanning 4s ease-in-out infinite;
}
</style>

