var ep_LISTV1={};ep_LISTV1.start=1,ep_LISTV1.max=150,ep_LISTV1.arr=new Array,ep_LISTV1.compile=function(e){var t=document.getElementById("ep_LISTV1");if(t){t.innerHTML="";var a=e.feed;if(a&&a.entry.length>0){for(var l=0;l<a.entry.length;l++)for(var n=a.entry[l],r=n.title.$t,s=n.published.$t,p=0;p<n.link.length;p++)if("alternate"==n.link[p].rel){var i=n.link[p].href;i&&i.length>0&&r&&r.length>0&&s&&s.length>0&&ep_LISTV1.arr.push({link:i,title:r,time:s});break}if(a.length>=ep_LISTV1.max)ep_LISTV1.start+=ep_LISTV1.max,ep_LISTV1.run();else{for(var c,o="",c=ep_LISTV1.arr,d=0;d<c.length;d++){var m=c[d].time,g=m.substring(0,4),h=m.substring(5,7),u=m.substring(8,10),I=new Array;I[1]="Tháng 1",I[2]="Tháng 2",I[3]="Tháng 3",I[4]="Tháng 4",I[5]="Tháng 5",I[6]="Tháng 6",I[7]="Tháng 7",I[8]="Tháng 8",I[9]="Tháng 9",I[10]="Tháng 10",I[11]="Tháng 11",I[12]="Tháng 12";var T=m;if(T="function"==typeof timeAgo?timeAgo(new Date(T)):u+" "+I[parseInt(h,10)]+" "+g,c[d].title.includes("Chương")){var f=c[d].title.split("Chương")[1];f=f.replace(/[^0-9\.-]+/g,"")}else if(c[d].title.includes("Chapter")){var f=c[d].title.split("Chapter")[1];f=f.replace(/[^0-9\.-]+/g,"")}else var f=" N/A";o+='<li class="char"><div class="ep-right"><span class="eps"><a href="'+c[d].link+'"><chapter>'+f+'</chapter></a></span></div><div class="ep-left"><span class="eps-jdl"><strong><a href="'+c[d].link+'" rel="nofollow">'+c[d].title+'</a></strong></span><span class="eps-date showdates">'+T+"</span></div></li>"}t.innerHTML='<ul class="ep-item gg-15-char gg-5-char">'+o+"</ul>"}}}},ep_LISTV1.run=function(e){ep_LISTV1.label=e;var t=document.createElement("script");t.src="/feeds/posts/default/-/"+ep_LISTV1.label+"?alt=json&callback=ep_LISTV1.compile&start-index="+2+"&max-results="+ep_LISTV1.max,document.body.appendChild(t)},ep_LISTV1.search=function(){var e,t,a,l,n,r,s;for(e=document.getElementById("searchchapter"),t=e.value.toUpperCase(),a=document.getElementById("listItem"),l=a.getElementsByTagName("li"),r=0;r<l.length;r++)n=l[r].getElementsByTagName("chapter")[0],s=n.textContent||n.innerText,s.toUpperCase().indexOf(t)>-1?l[r].style.display="":l[r].style.display="none"};
