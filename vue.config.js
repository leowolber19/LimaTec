// Carimba a data/hora do build no index.html (meta "deploy-em"),
// lida pelo painel admin para mostrar o último deploy do site.
module.exports = {
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].deployEm = new Date().toISOString();
            return args;
        });
    }
};
