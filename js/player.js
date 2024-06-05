class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function (album) {
        this.albums.push(album)
    }
    favoriteAlbum = function () {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function () {
        this.played += 1
    }
    display = function () {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)

const $ = (el) => document.getElementById(el)

for (i in jbox.albums) {
    let option = document.createElement('option')
    option.value = i
    option.innerHTML = `${jbox.albums[i].title}, by ${jbox.albums[i].artist}`
    $('albums').appendChild(option)
}

$('play').addEventListener('click', (e) => {
    let i = $('albums').value
    jbox.albums[i].play()
})
$('showFavorite').addEventListener('click', e => {
    alert(jbox.favoriteAlbum())
})