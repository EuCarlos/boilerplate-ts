

const regex = {
    removeUnnecessaryCharacters: '\\/?',
    getNecessaryCharacters: '(?=\\/|$)',
    getValidValue: /^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//,
    captureGroup: /\\(.)/g,
  }

const split = value => {
    if (typeof value === 'string') return value.split('/')

    else if (value.fast_slash) return ''

    else
        var match = value.toString()
            .replace(regex.removeUnnecessaryCharacters, '')
            .replace(regex.getNecessaryCharacters, '$')
            .match(regex.getValidValue)
        return match
            ? match[1].replace(regex.captureGroup, '$1').split('/')
            : '<complex:' + value.toString() + '>'

}

export const print = (path, layer) => {
    if (layer.route)
        layer.route.stack.forEach(
            print.bind(null, path.concat(split(layer.route.path)))
        )

    else if (layer.name === 'router' && layer.handle.stack)
        layer.handle.stack.forEach(
            print.bind(null, path.concat(split(layer.regexp)))
        )

    else if (layer.method)
        console.log('%s /%s',
            layer.method.toUpperCase(),
            path.concat(split(layer.regexp)).filter(Boolean).join('/')
        )
}
