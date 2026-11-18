// Carimba a data/hora do build no index.html (meta "deploy-em"),
// lida pelo painel admin para mostrar o último deploy do site.
module.exports = {
    devServer: {
        port: 8085, // Evita conflito com o Docker (Evolution API na 8080, Painel na 3000)
    },
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].deployEm = new Date().toISOString();
            return args;
        });
    }
};
