// our styles to adjust the presentation
import './styles.css'
import Reveal from 'reveal.js'
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js'

const deck = new Reveal()
deck.initialize({ hash: true, slideNumber: true, plugins: [RevealNotes, RevealHighlight] })
