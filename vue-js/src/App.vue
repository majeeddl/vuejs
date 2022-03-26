<template>
  <div>
    <a-layout>
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo" />
        <a-menu v-model="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <router-link to="/essentials">
              <user-outlined />
              <span>Essentials</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/composition">
              <user-outlined />
              <span>Composition API</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/pinia">
              <user-outlined />
              <span>Pinia Store</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";

export default {
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  data() {
    return {
      selectedKeys: ["1"],
      collapsed: false,
    };
  },
};
</script>

<style>
@import "@/assets/base.css";
</style>
