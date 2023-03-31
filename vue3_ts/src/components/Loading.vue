<template>
<div class="Spinner">
  <div class="Spinner_Circle">
    <div class="Spinner_Sphere"></div>
  </div>
  <p>loading...</p>
</div>
</template>

<style scoped>
.Spinner {
  color: blue;
}
.Spinner_Circle {
  left: calc( 50% - 10px );
  position: relative;
  margin: -11px;
  /* margin:0 auto; */
  border: 1px solid blue;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.Spinner_Sphere {
  position: absolute;
  top: -4px;
  left: 6px;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background: blue;
  -webkit-animation-name: Spinner_SphereRotate;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: 1s;
  -webkit-transform-origin: 50% 14px;
}

@-webkit-keyframes Spinner_SphereRotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

</style>
