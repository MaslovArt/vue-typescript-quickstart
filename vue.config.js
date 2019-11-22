module.exports = {
  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: 'index.html',
  publicPath: '/app/',
  assetsDir: 'dist',
  pages: {
    index: {
      // точка входа для страницы
      entry: 'src/main.ts',
      // исходный шаблон
      template: 'public/index.html',
      // в результате будет dist/index.html
      filename: 'index.html',
      // когда используется опция title, то <title> в шаблоне
      // должен быть <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Главная',
      // все фрагменты, добавляемые на этой странице, по умолчанию
      // это извлеченные общий фрагмент и вендорный фрагмент.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  filenameHashing: false,
  // productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: {
        automaticNameDelimiter: '_'
      }
    }
  }
}
