<template>
  <q-list flat bordered>
    <q-item
      v-for="i in 3" :key="i"
      class="q-py-md "
      style="line-break: anywhere;"
    >
      <q-item-section >
        <q-skeleton width="100%" height="60px" :animation="i === 3 ? 'pulse' : ''" />
      </q-item-section>
    </q-item>
  </q-list>
</template>
