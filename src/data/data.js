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
    const found = _.find(data, function(d) { return d.slug == slug; })
    return found
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

const chunkedAudio = cols => {
    return _.chunk(_.sortBy(audio, sound => { return sound.label; }), Math.ceil(audio.length / cols))
}

const dhamaBySlugChunked = (slug, cols) => {
    const dhama = dhamaBySlug(slug)
    const chunkedPlaces = _.chunk(_.sortBy(dhama.places, d => { return d.label; }), Math.ceil(dhama.places.length / cols))
    dhama.places = chunkedPlaces
    return dhama
}

export { data, audio, filtered, dhamaBySlug, darshanBySlug, chunkedAudio, dhamaBySlugChunked }