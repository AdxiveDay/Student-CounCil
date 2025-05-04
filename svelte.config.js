import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      // ถ้า deploy ใน repo ย่อย ให้ระบุ base path ด้วย
      base: process.env.NODE_ENV === 'production' ? '/Student-CounCil' : ''
    }
  }
};
