const sharp=require('sharp');
const fs=require('node:fs');const path=require('node:path');const crypto=require('node:crypto');
const root=process.cwd(), input=path.join(root,'public/map-preview'), output=path.join(input,'optimized');fs.mkdirSync(output,{recursive:true});
const manifest={world:{},creatures:{}};const results=[];
async function make(file,width,label,lossless=false){
 const bytes=await sharp(path.join(input,file)).resize({width,withoutEnlargement:true}).webp({quality:90,alphaQuality:100,lossless,effort:6}).toBuffer();
 const name=label+'.'+crypto.createHash('sha256').update(bytes).digest('hex').slice(0,10)+'.webp';fs.writeFileSync(path.join(output,name),bytes);
 results.push({source:file,output:name,before:fs.statSync(path.join(input,file)).size,after:bytes.length});return '/map-preview/optimized/'+name;
}
(async()=>{
 manifest.world.desktop=await make('world-original.png',1672,'world-1672');
 manifest.world.mobile=await make('world-original.png',960,'world-960');
 manifest.world.placeholder='data:image/webp;base64,'+(await sharp(path.join(input,'world-original.png')).resize(64).webp({quality:35}).toBuffer()).toString('base64');
 const creatures={'pixel-world':'pixel-world-creature-concept-01.png',preservative:'preservative-creature.png','rainy-arcade':'rainy-night-arcade-creature.png',iwbtz:'iwbtz-creature.png','auto-tune':'auto-tune-creature.png','study-assistant':'literature-research-assistant-creature.png','map-teleport':'map-teleport-creature.png'};
 for(const [key,file]of Object.entries(creatures))manifest.creatures[key]=await make(file,512,key,true);
 manifest.turtle=await make('survival-log-turtle-poses.png',1024,'turtle-poses',true);
 manifest.turtleWalk=await make('survival-log-turtle-walk.png',1024,'turtle-walk',true);
 manifest.egg=await make('capture-egg.png',384,'capture-egg',true);
 manifest.tutorial={frames:[],before:[]};
 for(let i=1;i<=5;i++){ for(const [type,prefix] of [['frames','rhythm-frame'],['before','rhythm-before']]){ const file='../tutorial/'+prefix+'-'+i+'.png'; const m=await sharp(path.join(input,file)).metadata(); manifest.tutorial[type].push(await make(file,m.width,prefix+'-'+i,false)); } }
 fs.writeFileSync('src/data/mapVisuals.json',JSON.stringify(manifest,null,2)+'\n');
 console.log(JSON.stringify(results));
})();
