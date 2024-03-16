import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        libInjectCss()
    ],
    build: {
        lib: {
            // src/indext.js is where we have exported the component(s)
            entry: resolve(__dirname, "src/lib/index.js"),
            name: "auth-form-react",
            // the name of the output files when the build is run
            fileName: "auth-form-react",
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["react", "react-dom", "react-router-dom", "formik", "yup"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: "React",
                    "react-dom": "React-dom",
                    "formik": "formik",
                    "yup": "yup"

                },
            }
        },
    },
})
