type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

export default function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold', 
        textTransform: 'uppercase', 
        fontFamily: 'monospace'
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black'}} key={index}>
          {/* 2nd span to determine if letter is visible, and it's color */}
          <span style={{
            visibility: guessedLetters.includes(letter) || reveal
              ? 'visible'
              : 'hidden',
            color: guessedLetters.includes(letter) ? 'black' : 'red'
          }}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}