function getbbdata(){var bbsurl=bbapiurl,httpRequest=new XMLHttpRequest;httpRequest.open("GET",bbsurl,!0),httpRequest.send(),httpRequest.onreadystatechange=function(){if(4==httpRequest.readyState&&200==httpRequest.status){var json=httpRequest.responseText,obj=eval("("+json+")");const bbArray=obj.data.map((e=>({date:e.date,content:e.content,from:e.from})));saveToLocal.set("zhheo-bb",JSON.stringify(bbArray),5/1440);const data=saveToLocal.get("zhheo-bb");generateBBHtml(JSON.parse(data))}}}var generateBBHtml=e=>{var t=document.querySelector("#bber"),a='<section class="timeline page-1"><ul><div class="list">';if(console.log(e),e.length)for(let t=0;t<e.length;t++){var r="";r=-1!=e[t].from.indexOf("iPhone")?'<i class="fas fa-mobile-alt"></i>':-1!=e[t].from.indexOf("iPad")?'<i class="fas fa-tablet-alt"></i>':-1!=e[t].from.indexOf("Mac")?'<i class="fas fa-laptop"></i>':-1!=e[t].from.indexOf("微信")?'<i class="fab fa-weixin" style="font-size: 0.6rem"></i>':'<i class="fas fa-tools"></i>';var o=new Date(e[t].date);e[t].date;a+='<li class="item"><div>'+('<p class="datatime">'+(o.getFullYear()+"/"+(o.getMonth()+1)+"/"+o.getDate()+" "+o.getHours()+":"+o.getMinutes()+":"+o.getSeconds())+"</p>")+('<p class="datacont">'+urlToLink(e[t].content)+"</p>")+'</p><p class="datafrom"><small>'+r+e[t].from+"</small></p></div></li>"}else a+='!{_p("aside.card_funds.zero")}';a+="</div></ul></section>",(t=document.querySelector("#bber")).innerHTML=a,Lately({target:"#bber .datatime"}),window.lazyLoadInstance&&window.lazyLoadInstance.update(),window.pjax&&window.pjax.refresh(t)};function urlToLink(e){return e=(e=e.replace(/\bhttps?:[^:<>"]*\/([^:<>"]*)(\.(jpeg)|(png)|(jpg)|(webp))(!blogimg)?/g,(function(e){return'<a href="'+e+'"><img src="'+e+'" /></a>'}))).replace(/\bhttps?:\/\/(?!\S+(?:jpe?g|png|bmp|gif|webp|gif))\S+/g,(function(e){return" <a href='"+e+"'rel='noopener' target='_blank'>↘链接↙</a> "}))}document.querySelector("#bber")&&getbbdata();var $jscomp=$jscomp||{};$jscomp.scope={},$jscomp.arrayIteratorImpl=function(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}},$jscomp.arrayIterator=function(e){return{next:$jscomp.arrayIteratorImpl(e)}},$jscomp.makeIterator=function(e){var t="undefined"!=typeof Symbol&&Symbol.iterator&&e[Symbol.iterator];return t?t.call(e):$jscomp.arrayIterator(e)},function(e,t){var a=function(){return this||(0,eval)("this")}();"Lately"in a||(a.Lately=function(e){for(var t=e.lang||{second:"秒",minute:"分钟",hour:"小时",day:"天",month:"个月",year:"年",ago:"前",error:"NaN"},a=(e=$jscomp.makeIterator(document.querySelectorAll(e.target||".time"))).next();!a.done;a=e.next()){var r=(a=a.value).dateTime,o=a.title,n=a.innerHTML;if(!r||isNaN(new Date(r=r.replace(/(.*)[a-z](.*)\+(.*)/gi,"$1 $2").replace(/-/g,"/"))))if(o&&!isNaN(new Date(o=o.replace(/-/g,"/"))))r=o;else{if(!n||isNaN(new Date(n=n.replace(/-/g,"/"))))break;r=n}a.title=r,r=new Date(r);var s=(n=(o=(r=((new Date).getTime()-r.getTime())/1e3)/60)/60)/24,i=s/30,l=i/12;a.innerHTML=(1<=l?Math.floor(l)+t.year:1<=i?Math.floor(i)+t.month:1<=s?Math.floor(s)+t.day:1<=n?Math.floor(n)+t.hour:1<=o?Math.floor(o)+t.minute:1<=r?Math.floor(r)+t.second:t.error)+t.ago}})}();