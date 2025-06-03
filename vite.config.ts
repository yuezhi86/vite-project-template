import path from 'path';
import { defineConfig } from 'vite';
import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  const plugins: PluginOption = [
    vue(),
    tailwindcss(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: [
        'vue', // 自动导入 Vue 相关 API（ref, reactive, computed 等）
        'vue-router', // 自动导入 Vue Router API
        'pinia', // 自动导入 Pinia API
        '@vueuse/core',
      ],
      dts: true, // 生成类型声明文件（TypeScript 支持）
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components', 'src/libs', 'src/layouts'],
      dts: true,
    }),
  ];

  if (isBuild) {
    plugins.push(
      visualizer({
        open: true, // 在默认浏览器中自动打开报告
        gzipSize: true, // 显示gzip压缩后的大小
        brotliSize: true, // 显示brotli压缩后的大小
        filename: 'stats.html', // 分析文件输出名称
      })
    );
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': pathResolve('src'),
      },
    },
  };
});

function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir);
}
