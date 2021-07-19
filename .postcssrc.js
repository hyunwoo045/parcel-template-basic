// CommonJS - NodeJS 의 import, export 방식은 CommonJS 를 따르며 require, module.exports 로 가져오기/내보내기 한다.

//import
const autoprefixer = require("autoprefixer");

// export
module.exports = {
  plugins: [autoprefixer],
};
