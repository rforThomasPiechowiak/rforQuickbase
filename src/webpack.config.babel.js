import {join} from 'path'

const include = join(__dirname,'src')

export default {
    entry: './src/index',
    output:{
        path: join(__dirname,'dist'),
        libraryTarget: 'umd',
        library:'rforquickbase'
    },
    devtool: 'source-map',
    module: {
            loaders: [
                {test: /\.js$/, loader: 'babel', include},
                {test: /\.js$/, loader: 'json', include},
            ]
    }
}

