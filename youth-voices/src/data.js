// Fictional, illustrative sample content. Nothing here is real or stored on a server.
export const pal=[['#A8B5A0','#D9DFD3'],['#C9A88A','#EBDCCB'],['#8FA39A','#C9D6CF'],['#B9A58F','#E4D9CA'],['#9AA88F','#CFD8C6'],['#D0B59F','#F0E2D5']]
export const creators=[
{id:'ayesha',name:'Ayesha Malik',age:17,city:'Lahore',talent:'Poet',tags:['Urdu','Ghazal'],bio:'Writes ghazals in the margins of her chemistry notebook.',journey:'Ayesha began writing couplets to understand her grandmother\'s stories. Her teachers noticed her marks, not her verses, until a school assembly changed that. She now hosts a small weekly reading circle.'},
{id:'hamza',name:'Hamza Rauf',age:16,city:'Faisalabad',talent:'Writer',tags:['Stories','Opinion'],bio:'Short fiction about small towns and big silences.',journey:'Hamza wrote his first story on a bus ride home. He believes a good sentence is a form of courage, and is now compiling a collection of ten stories.'},
{id:'zainab',name:'Zainab Tariq',age:18,city:'Islamabad',talent:'Artist',tags:['Painting','Watercolour'],bio:'Watercolours of rooftops, tea stalls and evening light.',journey:'Zainab taught herself to paint from library books. Her rooftop series began during a power cut, when the sunset was the only light in the house.'},
{id:'bilal',name:'Bilal Ahmed',age:17,city:'Sheikhupura',talent:'Photographer',tags:['Street','Portrait'],bio:'Photographs ordinary people doing ordinary things with grace.',journey:'With a hand-me-down phone and patience, Bilal documents the bazaars of his town. He says every face is a poem nobody has transcribed yet.'},
{id:'mehak',name:'Mehak Siddiqui',age:15,city:'Karachi',talent:'Poet',tags:['Spoken word','English'],bio:'Performs spoken word about exams, expectations and breathing room.',journey:'Mehak\'s first performance was in front of six classmates. Her piece on grades and self-worth has since been read aloud at three school events.'},
{id:'usman',name:'Usman Qadir',age:18,city:'Multan',talent:'Writer',tags:['Essays','Society'],bio:'Essays on education, work and what a fair chance looks like.',journey:'Usman writes about the gap between talent and opportunity, drawing from his own neighbourhood. He hopes to study journalism.'}]
export const poems=[
{id:'p1',by:'ayesha',lang:'Urdu',title:'خاموش صدا',text:'ہر آنکھ میں اک خواب ہے، ہر دل میں اک صدا\nخاموش ہیں جو لب، وہ بھی کہتے ہیں کچھ نہ کچھ\nکبھی سن کر تو دیکھو، یہ جو چپ ہے ہمارے بیچ\nیہی تو ہے وہ زبان، جو کہتی ہے سب کچھ'},
{id:'p2',by:'ayesha',lang:'Shayari',title:'ہنر کا قد',text:'نمبروں سے نہیں ناپا جاتا ہنر کا قد\nچراغ جلتا ہے تو روشنی خود بتاتی ہے'},
{id:'p3',by:'bilal',lang:'Punjabi',title:'لفظاں دا جہان',text:'اکھر اکھر جوڑ کے میں اپنا جہان بنایا\nجیہڑا کسے نے نہ ویکھیا، او لفظاں وچ سجایا'},
{id:'p4',by:'mehak',lang:'English',title:'Room to Breathe',text:'They measured me in percentages,\nbut I am also the rain on the window,\nthe unfinished song, the half-drawn sky.\nAsk me what I see, not what I scored.'},
{id:'p5',by:'mehak',lang:'Spoken word',title:'Out Loud',text:'[Slow, then rising]\nI was told to sit quietly and be measured.\nBut a voice kept in a drawer still hums.\nSo here I am, unfolding it —\nloud enough for the girl in the last row.'}]
export const thoughts=[
{id:'t1',by:'usman',title:'A Fair Start Is Not a Fast Start',blurb:'Why equal opportunity matters more than early success.',body:'We praise the student who finishes first, but rarely ask who started where. A fair start means a library that is open, a teacher who listens and a chance to try without being ranked. Talent is common. Access is what is scarce. If we build spaces that notice effort and originality, we will find voices we never knew were missing.'},
{id:'t2',by:'mehak',title:'What an Exam Cannot Measure',blurb:'Grades describe a day, not a person.',body:'An exam captures three hours of a life. It cannot see the poem written at midnight or the friend consoled after school. I am not against learning. I am against believing that one number is the whole of me. Let marks be one part of the story, not its title.'},
{id:'t3',by:'hamza',title:'The Teacher Who Read My Story',blurb:'One person\'s attention can change a young writer\'s path.',body:'Mr. Anwar never corrected my spelling first. He asked me what I meant. That question made me a writer. Imagine if every young person had one adult, or one platform, that asked what they meant.'}]
export const works=[
{id:'w1',by:'hamza',type:'Short story',title:'The Last Tea Stall',blurb:'An old tea seller closes his stall for the final time, and the street remembers him.',c:0},
{id:'w2',by:'zainab',type:'Painting',title:'Rooftop, 6:40 pm',blurb:'Watercolour on paper. The hour when the city exhales.',c:1},
{id:'w3',by:'bilal',type:'Photography',title:'Bazaar Hands',blurb:'A series on the hands of craftsmen in the old bazaar.',c:2},
{id:'w4',by:'usman',type:'Article',title:'Libraries Without Walls',blurb:'What a neighbourhood learns when books travel to it.',c:3},
{id:'w5',by:'zainab',type:'Artwork',title:'Monsoon Study',blurb:'Ink and wash experiments on rain and reflection.',c:4},
{id:'w6',by:'mehak',type:'Video',title:'Out Loud: A Performance',blurb:'A spoken word performance filmed in a school courtyard (illustrative).',c:5}]
export const by=id=>creators.find(c=>c.id===id)
