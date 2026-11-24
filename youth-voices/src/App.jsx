import {useState,useEffect} from 'react'
import {Menu,X,Feather,PenLine,Palette,Star,Compass,Search,ArrowRight,Upload,Check} from 'lucide-react'
import {creators,poems,thoughts,works,pal,by} from './data'

const useRoute=()=>{const g=()=>location.hash.replace(/^#\/?/,'').split('/');const[r,setR]=useState(g());
useEffect(()=>{const f=()=>{setR(g());scrollTo(0,0)};addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[]);return r}
const L=({to,children,className=''})=><a href={'#/'+to} className={className}>{children}</a>
const rtl=l=>['Urdu','Shayari','Punjabi'].includes(l)
const Art=({c=0,className='h-44',children})=><div className={'rounded-xl flex items-center justify-center text-ink/40 '+className} style={{background:`linear-gradient(135deg,${pal[c%6][0]},${pal[c%6][1]})`}}>{children}</div>
const Wrap=({children})=><main className="max-w-6xl mx-auto px-5 py-14">{children}</main>
const Head=({t,s})=><header className="mb-10 max-w-2xl"><h1 className="font-serif text-4xl md:text-5xl">{t}</h1><p className="mt-3 text-muted">{s}</p></header>
const Chips=({items,v,on})=><div className="flex flex-wrap gap-2 mb-8">{items.map(i=><button key={i} onClick={()=>on(i)} className={'px-4 py-1.5 rounded-full text-sm border transition '+(v===i?'bg-sage border-sage':'border-ink/15 text-muted hover:border-sage')}>{i}</button>)}</div>
const Empty=({m})=><p className="text-muted py-10">{m}</p>
const Back=({to,children})=><L to={to} className="text-sm text-muted hover:text-ink">← {children}</L>

const links=[['','Home'],['poetry','Poetry Corner'],['thoughts','My Thoughts'],['creative','Creative Space'],['spotlight','Youth Spotlight'],['discover','Discover Talent']]
function Nav({p}){const[o,setO]=useState(false);return(
<nav className="sticky top-0 z-20 bg-ivory/90 backdrop-blur border-b border-ink/10"><div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
<L to="" className="font-serif text-2xl font-semibold">Youth Voices</L>
<div className="hidden lg:flex gap-6 text-sm">{links.map(([to,n])=><L key={to} to={to} className={p===to?'text-ink border-b border-sage pb-1':'text-muted hover:text-ink'}>{n}</L>)}</div>
<div className="flex items-center gap-3"><L to="share" className="hidden sm:block bg-ink text-ivory text-sm px-4 py-2 rounded-full">Join the Community</L>
<button aria-label="Menu" className="lg:hidden" onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></div></div>
{o&&<div className="lg:hidden border-t border-ink/10 px-5 py-4 flex flex-col gap-3 bg-ivory" onClick={()=>setO(false)}>{links.map(([to,n])=><L key={to} to={to}>{n}</L>)}<L to="share" className="font-medium">Join the Community</L></div>}</nav>)}

const Footer=()=><footer className="bg-mist mt-16"><div className="max-w-6xl mx-auto px-5 py-12 grid gap-8 md:grid-cols-3">
<div><p className="font-serif text-2xl">Youth Voices</p><p className="text-muted mt-2 italic">Har awaaz mein ek kahani hai. Har talent ko ek manch milna chahiye.</p></div>
<div className="text-sm text-muted space-y-2"><p>About</p><p>Contact</p><p>Community Guidelines</p></div>
<div className="text-sm text-muted space-y-2"><p>Instagram</p><p>YouTube</p><p>Facebook</p><p className="text-xs pt-3">Prototype. Sample creators and content are fictional.</p></div></div></footer>

const PoemCard=({p})=><L to={'poetry/'+p.id} className="block bg-white border border-ink/10 rounded-xl p-6 hover:shadow-md transition">
<p className="text-xs text-muted mb-3">{p.lang}</p><h3 className={'font-serif text-2xl mb-3 '+(rtl(p.lang)?'urdu':'')}>{p.title}</h3>
<p className={'text-muted line-clamp-2 '+(rtl(p.lang)?'urdu':'')}>{p.text}</p><p className="text-sm mt-4">{by(p.by).name}</p></L>
const ThoughtCard=({t})=><L to={'thoughts/'+t.id} className="block bg-white border border-ink/10 rounded-xl p-6 hover:shadow-md transition">
<h3 className="font-serif text-2xl mb-2">{t.title}</h3><p className="text-muted">{t.blurb}</p><p className="text-sm mt-4">{by(t.by).name}</p></L>
const WorkCard=({w,onOpen})=><button onClick={()=>onOpen(w)} className="text-left group"><Art c={w.c} className="h-56"><Palette/></Art>
<p className="text-xs text-muted mt-3">{w.type}</p><h3 className="font-serif text-xl">{w.title}</h3><p className="text-sm text-muted">{by(w.by).name}</p></button>
const CreatorCard=({c})=><L to={'creator/'+c.id} className="block bg-white border border-ink/10 rounded-xl p-6 hover:shadow-md transition">
<div className="w-12 h-12 rounded-full bg-sage/60 flex items-center justify-center font-serif text-xl mb-4">{c.name[0]}</div>
<h3 className="font-serif text-xl">{c.name}</h3><p className="text-sm text-muted">{c.talent}, {c.city}</p><p className="text-sm mt-3">{c.bio}</p></L>

const cats=[['poetry','Poetry Corner','Ghazals, shayari and verse in Urdu, Punjabi and English.',Feather],['thoughts','My Thoughts','Opinions and experiences about life and society.',PenLine],['creative','Creative Space','Stories, art, photography and videos.',Palette],['spotlight','Youth Spotlight','Appreciating outstanding young creators.',Star],['discover','Discover Talent','Search and meet young poets, writers and artists.',Compass]]
function Home(){return<>
<section className="bg-mist"><div className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center"><div>
<h1 className="font-serif text-5xl md:text-6xl leading-tight">Your Talent. Your Thoughts. Your Voice.</h1>
<p className="mt-5 text-muted max-w-md">A space where young minds share their creativity, express their ideas and inspire the world.</p>
<div className="mt-8 flex flex-wrap gap-3"><L to="creative" className="bg-ink text-ivory px-6 py-3 rounded-full">Explore Creativity</L><L to="share" className="border border-ink/30 px-6 py-3 rounded-full">Share Your Voice</L></div></div>
<div className="grid grid-cols-2 gap-4"><Art c={0} className="h-56 col-span-1 row-span-2 !h-full min-h-[18rem] p-6"><span className="urdu text-2xl text-ink/70">ہر آواز میں کہانی</span></Art><Art c={1} className="h-32"><Feather/></Art><Art c={2} className="h-32"><Palette/></Art></div></div></section>
<Wrap><h2 className="font-serif text-3xl mb-8">Explore</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{cats.map(([to,n,d,I])=><L key={to} to={to} className="border border-ink/10 rounded-xl p-6 bg-white hover:shadow-md transition"><I className="text-warm mb-4"/><h3 className="font-serif text-2xl">{n}</h3><p className="text-muted text-sm mt-2">{d}</p><p className="text-sm mt-4 flex items-center gap-1">Visit <ArrowRight size={14}/></p></L>)}</div>
<h2 className="font-serif text-3xl mt-20 mb-8">Featured contributions</h2><div className="grid md:grid-cols-2 gap-5"><PoemCard p={poems[0]}/><ThoughtCard t={thoughts[0]}/>
<L to="creative" className="block"><Art c={0} className="h-40"><PenLine/></Art><p className="font-serif text-xl mt-3">{works[0].title}</p><p className="text-sm text-muted">{works[0].blurb}</p></L>
<L to="creative" className="block"><Art c={1} className="h-40"><Palette/></Art><p className="font-serif text-xl mt-3">{works[1].title}</p><p className="text-sm text-muted">{works[1].blurb}</p></L></div>
<h2 className="font-serif text-3xl mt-20 mb-8">Youth Spotlight</h2><div className="grid md:grid-cols-3 gap-5">{creators.slice(0,3).map(c=><CreatorCard key={c.id} c={c}/>)}</div></Wrap>
<section className="bg-sage/30"><div className="max-w-3xl mx-auto px-5 py-20 text-center"><h2 className="font-serif text-5xl">Talent Has No Grades.</h2><p className="mt-5 text-ink/80">Youth Voices celebrates creativity, originality and expression beyond academic achievement. Every young person has a voice, a thought or a talent worth sharing.</p></div></section></>}

function Poetry({id}){const[f,setF]=useState('All');
if(id){const p=poems.find(x=>x.id===id);if(!p)return<Wrap><Empty m="Poem not found."/><Back to="poetry">Poetry Corner</Back></Wrap>
return<Wrap><Back to="poetry">Poetry Corner</Back><article className="max-w-2xl mx-auto mt-8 text-center"><p className="text-sm text-muted">{p.lang}</p><h1 className={'font-serif text-4xl mt-2 '+(rtl(p.lang)?'urdu !text-center':'')}>{p.title}</h1>
<p className={'mt-8 whitespace-pre-line text-xl '+(rtl(p.lang)?'urdu !text-center':'font-serif leading-loose')}>{p.text}</p>
<L to={'creator/'+p.by} className="inline-block mt-8 underline decoration-sage">{by(p.by).name}</L></article></Wrap>}
const list=poems.filter(p=>f==='All'||p.lang===f)
return<Wrap><Head t="Poetry Corner" s="Ghazals, shayari, Punjabi and English verse, and spoken word from young poets."/>
<Chips items={['All','Urdu','Shayari','Punjabi','English','Spoken word']} v={f} on={setF}/>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{list.map(p=><PoemCard key={p.id} p={p}/>)}</div>{!list.length&&<Empty m="No poems in this language yet."/>}</Wrap>}

function Thoughts({id}){
if(id){const t=thoughts.find(x=>x.id===id);if(!t)return<Wrap><Empty m="Article not found."/><Back to="thoughts">My Thoughts</Back></Wrap>
return<Wrap><Back to="thoughts">My Thoughts</Back><article className="max-w-2xl mx-auto mt-8"><h1 className="font-serif text-4xl">{t.title}</h1><L to={'creator/'+t.by} className="block mt-3 text-muted underline decoration-sage">By {by(t.by).name}</L><p className="mt-8 text-lg leading-loose font-serif">{t.body}</p></article></Wrap>}
return<Wrap><Head t="My Thoughts" s="Opinions, experiences and ideas about education, society and life."/><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{thoughts.map(t=><ThoughtCard key={t.id} t={t}/>)}</div></Wrap>}

function Creative(){const[f,setF]=useState('All');const[w,setW]=useState(null)
const types=['All',...new Set(works.map(x=>x.type))];const list=works.filter(x=>f==='All'||x.type===f)
return<Wrap><Head t="Creative Space" s="Stories, articles, paintings, photography and videos."/><Chips items={types} v={f} on={setF}/>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{list.map(x=><WorkCard key={x.id} w={x} onOpen={setW}/>)}</div>
{w&&<div className="fixed inset-0 z-30 bg-ink/40 flex items-center justify-center p-5" onClick={()=>setW(null)}><div className="bg-ivory rounded-2xl max-w-lg w-full p-6" onClick={e=>e.stopPropagation()}>
<Art c={w.c} className="h-52"><Palette/></Art><p className="text-xs text-muted mt-4">{w.type}</p><h2 className="font-serif text-3xl">{w.title}</h2><p className="mt-2 text-muted">{w.blurb}</p>
<div className="flex justify-between mt-6"><L to={'creator/'+w.by} className="underline decoration-sage">{by(w.by).name}</L><button onClick={()=>setW(null)} className="text-sm">Close</button></div></div></div>}</Wrap>}

function Spotlight(){const c=creators[0];return<Wrap><Head t="Youth Spotlight" s="Appreciating young creators for their craft and their journey."/>
<div className="grid md:grid-cols-2 gap-8 bg-mist rounded-2xl p-8 mb-14"><Art c={0} className="h-64"><span className="font-serif text-6xl">{c.name[0]}</span></Art><div><p className="text-sm text-muted">Creator of the week</p><h2 className="font-serif text-4xl mt-1">{c.name}</h2><p className="mt-4">{c.journey}</p><L to={'creator/'+c.id} className="inline-block mt-6 bg-ink text-ivory px-5 py-2 rounded-full text-sm">Read her story</L></div></div>
<div className="grid md:grid-cols-3 gap-5">{creators.slice(1).map(x=><CreatorCard key={x.id} c={x}/>)}</div></Wrap>}

function Discover(){const[q,setQ]=useState('');const[t,setT]=useState('All')
const list=creators.filter(c=>(t==='All'||c.talent===t)&&(c.name+c.talent+c.city+c.tags.join()).toLowerCase().includes(q.toLowerCase()))
return<Wrap><Head t="Discover Talent" s="Meet young poets, writers, artists and photographers."/>
<div className="relative max-w-md mb-6"><Search size={16} className="absolute left-4 top-3.5 text-muted"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by name, talent or city" className="w-full pl-10 pr-4 py-3 rounded-full border border-ink/15 bg-white"/></div>
<Chips items={['All','Poet','Writer','Artist','Photographer']} v={t} on={setT}/>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{list.map(c=><CreatorCard key={c.id} c={c}/>)}</div>{!list.length&&<Empty m="No creators match. Try a different name or talent."/>}</Wrap>}

function Creator({id}){const c=creators.find(x=>x.id===id);if(!c)return<Wrap><Empty m="Creator not found."/><Back to="discover">Discover Talent</Back></Wrap>
const mine=[...poems.filter(p=>p.by===id).map(p=>['poetry/'+p.id,p.title,p.lang]),...thoughts.filter(p=>p.by===id).map(p=>['thoughts/'+p.id,p.title,'Thought']),...works.filter(p=>p.by===id).map(p=>['creative',p.title,p.type])]
return<Wrap><Back to="discover">Discover Talent</Back><div className="max-w-2xl mt-8"><div className="w-20 h-20 rounded-full bg-sage/60 flex items-center justify-center font-serif text-4xl">{c.name[0]}</div>
<h1 className="font-serif text-5xl mt-4">{c.name}</h1><p className="text-muted">{c.talent}, {c.city}, age {c.age}</p><p className="mt-6 text-lg font-serif leading-loose">{c.journey}</p>
<h2 className="font-serif text-2xl mt-10 mb-4">Contributions</h2>{mine.length?<ul className="space-y-2">{mine.map(([to,n,k],i)=><li key={i}><L to={to} className="underline decoration-sage">{n}</L> <span className="text-sm text-muted">{k}</span></li>)}</ul>:<Empty m="No contributions yet."/>}</div></Wrap>}

function Share(){const types=['Poetry','Thought','Story','Artwork','Photography'];const[type,setType]=useState('Poetry');const[lang,setLang]=useState('English')
const[f,setF]=useState({name:'',title:'',text:''});const[img,setImg]=useState(null);const[err,setErr]=useState({});const[done,setDone]=useState(false)
const submit=e=>{e.preventDefault();const x={};if(!f.name.trim())x.name='Enter your name.';if(!f.title.trim())x.title='Add a title.';if(f.text.trim().length<20)x.text='Write at least 20 characters.';setErr(x);if(!Object.keys(x).length)setDone(true)}
const upd=k=>e=>setF({...f,[k]:e.target.value});const inp='w-full px-4 py-3 rounded-xl border border-ink/15 bg-white'
if(done)return<Wrap><div className="max-w-xl mx-auto text-center py-10"><div className="w-14 h-14 rounded-full bg-sage/50 mx-auto flex items-center justify-center"><Check/></div><h1 className="font-serif text-4xl mt-5">Thank you, {f.name}.</h1>
<p className="text-muted mt-3">Your {type.toLowerCase()} "{f.title}" was received in this prototype. It is not published or saved anywhere, and will disappear when you refresh.</p>
<button onClick={()=>{setDone(false);setF({name:'',title:'',text:''});setImg(null)}} className="mt-6 border border-ink/30 px-5 py-2 rounded-full">Share another</button></div></Wrap>
return<Wrap><Head t="Share Your Voice" s="Pick a form, write or upload, and preview it. This prototype does not store anything."/>
<form onSubmit={submit} className="max-w-2xl space-y-6" noValidate><Chips items={types} v={type} on={setType}/>
{(type==='Poetry'||type==='Thought')&&<div><label className="text-sm text-muted">Language</label><select value={lang} onChange={e=>setLang(e.target.value)} className={inp+' mt-1'}>{['English','Urdu','Punjabi'].map(l=><option key={l}>{l}</option>)}</select></div>}
{[['name','Your name'],['title','Title']].map(([k,l])=><div key={k}><label className="text-sm text-muted">{l}</label><input value={f[k]} onChange={upd(k)} className={inp+' mt-1'}/>{err[k]&&<p className="text-sm text-red-700 mt-1">{err[k]}</p>}</div>)}
<div><label className="text-sm text-muted">Your piece</label><textarea rows={7} dir={lang==='English'?'ltr':'rtl'} value={f.text} onChange={upd('text')} className={inp+' mt-1 '+(lang!=='English'&&['Poetry','Thought'].includes(type)?'urdu':'')}/>{err.text&&<p className="text-sm text-red-700 mt-1">{err.text}</p>}</div>
{['Artwork','Photography'].includes(type)&&<div><label className="inline-flex items-center gap-2 border border-dashed border-ink/30 rounded-xl px-4 py-3 cursor-pointer"><Upload size={16}/>Choose an image<input type="file" accept="image/*" className="hidden" onChange={e=>e.target.files[0]&&setImg(URL.createObjectURL(e.target.files[0]))}/></label>{img&&<img src={img} alt="Preview" className="mt-4 max-h-64 rounded-xl"/>}</div>}
<button className="bg-ink text-ivory px-6 py-3 rounded-full">Share your voice</button></form></Wrap>}

export default function App(){const r=useRoute();const[p,id]=r;let v
if(p==='poetry')v=<Poetry id={id}/>;else if(p==='thoughts')v=<Thoughts id={id}/>;else if(p==='creative')v=<Creative/>;else if(p==='spotlight')v=<Spotlight/>;else if(p==='discover')v=<Discover/>;else if(p==='creator')v=<Creator id={id}/>;else if(p==='share')v=<Share/>;else v=<Home/>
return<><Nav p={p||''}/>{v}<Footer/></>}
