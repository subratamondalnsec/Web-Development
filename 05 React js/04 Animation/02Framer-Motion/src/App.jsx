import React from 'react'
import { motion,useScroll } from "motion/react"
import './App.css'

const App = () => {
  const scrollYProgress = useScroll().scrollYProgress;

  return (
    <>
    <motion.div 
    style={{
      scaleX: scrollYProgress,
    }}
    className='navbar'></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          x: 500, 
          rotate:720,

          }}
        transition={{ 
          duration: 3,
          delay:2,
          repeat:Infinity
        }}
        className="box"
      >
      </motion.div>
      <br/>
      <br/>
      <br/>
      <motion.h1
      initial={{
          y:50,
          
       }}
      animate={{
        y:200,
      }}
      transition={{
        duration:1,
        ease:'anticipate',
        repeat:Infinity
      }}
      >Subrata</motion.h1>

      <motion.div
      className='box'
      initial={{x:200,y:100}}
      animate={{
        x:[0,500,500,0,0],
        y:[0,0,300,300,0],
        rotate:[0,360,0,-360,0],
      }}
      transition={{
        duration:4,
        delay:1,
        repeat:Infinity
      }}
      >
      </motion.div>
      <motion.div
      className='box'
      whileHover={{
        backgroundColor:'green'
      }}
      whileTap={{scale:0.8}}
      drag
      whileDrag={{
        scale:0.8
      }}
      dragConstraints={{
        left:0,
        top:0,
        right:1000,
        buttom : 500
      }}
      // dragDirectionLock='true'
      ></motion.div>
      <div>Subrata</div>
      <p className='para'>Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/ LOR-əm IP-səm) is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.

Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BCE text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words are the truncation of dolorem ipsum ("pain itself").

Versions of the Lorem ipsum text have been used in typesetting since the 1960s, when advertisements for Letraset transfer sheets popularized it.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX packages,[3][4][5] web content managers such as Joomla! and WordPress, and CSS libraries such as Semantic UI.

Example text
A common form of Lorem ipsum reads:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Source text
The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's De finibus bonorum et malorum.[6][7] The physical source may have been the 1914 Loeb Classical Library edition of De finibus, where the Latin text, presented on the left-hand (even) pages, breaks off on page 34 with "Neque porro quisquam est qui do-" and continues on page 36 with "lorem ipsum ...," suggesting that the galley type of that page was mixed up to make the dummy text seen today.[1]

The discovery of the text's origin is attributed to Richard McClintock, a Latin scholar at Hampden–Sydney College. McClintock connected Lorem ipsum to Cicero's writing sometime before 1982 while searching for instances of the Latin word consectetur, which was rarely used in classical literature.[2] McClintock first published his discovery in a 1994 letter to a Before & After magazine editor,[8] contesting the editor's earlier claim that Lorem ipsum had no meaning.[2]

The relevant section of Cicero as printed in the source is reproduced below with fragments used in Lorem ipsum highlighted. Letters in brackets were added to Lorem ipsum and were not present in the source text:

[32] Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum i[r]ure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?

[33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem reru[d]um facilis est e[r]t expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellend[a]us. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.

What follows is H. Rackham's translation, as printed in the 1914 Loeb edition, with words at least partially represented in Lorem ipsum highlighted:[7]

[32] But I must explain to you how all this mistaken idea of reprobating pleasure and extolling pain arose. To do so, I will give you a complete account of the system and expound the teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter extremely painful consequences. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?

[33] On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammeled and nothing prevents us from being what we like best, every pleasure is welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures must be repudiated and annoyances accepted. The wise man, therefore, always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.

See also
Asemic writing – Wordless open semantic form of writing
Etaoin shrdlu – Common metal-type printing error
Gibberish – Nonsensical speech or writing
Hamburgevons – Text used as a sample for assessing fonts
Indian-head test pattern – Television test card
Lenna – Unauthorized standard test image
Li Europan lingues – Placeholder text in Interlingue
Metasyntactic variable – Placeholder term used in computer science
Pangram – Sentence using every letter of alphabet
The quick brown fox jumps over the lazy dog – Sentence containing all letters of the English alphabet
Shibboleth – Custom or tradition that distinguishes one group from another
"To come" – Phrase used in publishing to indicate missing material
Utah teapot – Computer graphics 3D reference and test model
References
 Cibois, Philippe (2012-06-03). "Lorem ipsum: nouvel état de la question". L'intelligence du monde. L'Institut français. Retrieved 2017-04-07.
 Adams, Cecil (February 2001). "What does the filler text 'lorem ipsum' mean?". The Straight Dope. Retrieved 3 June 2022.
 "LaTeX lipsum package". Retrieved 23 September 2017.
 "LaTeX blind text package". Retrieved 23 September 2017.
 "How to insert sample text into a document in Word". Microsoft Support. 18 September 2011. Archived from the original on 12 January 2012. Retrieved 14 November 2011.
 "Description of the "Lorem ipsum dolor sit amet" text that appears in Word Help". support.microsoft.com. Retrieved 2007-03-22.
 Cicero, Marcus Tullius; Rackham, H. (1914). De finibus bonorum et malorum (in Latin and English). New York: Macmillan Co. p. 36 (Book I ix 32).
 Before & After 4:2, according to Norman Walsh. "Frequently Asked Questions About Fonts". Retrieved 2023-05-12.
External links
Lorem ipsum
at Wikipedia's sister projects
Definitions from Wiktionary
Media from Commons
Texts from Wikisource
The original De finibus bonorum et malorum (Book 1) from Cicero, on Latin Wikisource
</p>
    </>
  )
}

export default App