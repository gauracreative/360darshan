import _ from 'lodash'
import data from './data.json'
import audio from './audio.json'




const filtered = (key, value) => {
    function iter(o) {
        if (!o || typeof o !== 'object') {
            return
        }
        if (o[key] === value) {
            result.push(o)
        }
        Object.keys(o).forEach(function (k) {
            iter(o[k])
        })
    }

    let result = []
    iter(data)
    return result;
}

const dhamaBySlug = slug => {
    return _.find(data, function(d) { return d.slug == slug; })
}

const dhamaByKey = key => {
    return data[key]
}

const darshanBySlug = slug => {
    var result = {}
    var dhama = {}
    Object.values(data).every(dhamaData => {
        const found = dhamaData.places.find(darshanData => {
            return darshanData.slug == slug
        })
        if (found) {
            result = found
            dhama = {label: dhamaData.label, slug: dhamaData.slug}
            return false
        } else {
            return true
        }
    })
    result.dhama = dhama

    return result
}

const chunk = (items, cols) => {
    const sorted = _.sortBy(items, i => { return i.label; })
    return _.chunk(sorted, Math.ceil(items.length / cols))
}

const chunkedAudio = cols => {
    return chunk(audio, cols)
}

const dhamaBySlugChunked = (slug, cols) => {
    const dhama = dhamaBySlug(slug)
    dhama.places = chunk(dhama.places, cols)
    return dhama
}

const dhamaByKeyChunked = (key, cols) => {
    const dhama = dhamaByKey(key)
    dhama.places = chunk(dhama.places, cols)
    return dhama
}

export {
    data,
    audio,
    filtered,
    dhamaBySlug,
    dhamaByKey,
    darshanBySlug,
    chunkedAudio,
    dhamaBySlugChunked,
    dhamaByKeyChunked
}