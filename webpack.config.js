const path = require('path');

module.exports = { 
  "mode": "none", 
  "entry": "./src/js/script.min.js", 
  "output": { 
    "path": __dirname + '/dist', 
    "filename": "bundle.js" 
  },
  devServer: { 
    contentBase: path.join(__dirname, 'dist') 
  }, 
  "module": { 
    "rules": [{ 
      "test": /\.css$/, 
      "use": [ "style-loader", 
               "css-loader" 
      ]
    },]
    }
}